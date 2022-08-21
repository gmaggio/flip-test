import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LineIcon from 'react-native-vector-icons/SimpleLineIcons'

import { DataUpdateContext } from '../../context/DataContext'
import useApi from '../../hooks/useApi'
import { appTheme } from '../../styles/appTheme'
import AppText from '../../ui/AppText'
import Badge, { BadgeProps } from '../../ui/Badge'
import Divider from '../../ui/Divider'
import Tappable from '../../ui/Tappable'
import { Formatters } from '../../utils/formatter'
import { trxListStyles } from './TransactionList.styles'
import { SortTypes, TransactionData } from './TransactionList.types'
import SortModal, { SortLabels } from './ui/SortModal/SortModal'

const _styles = trxListStyles

export default function TransactionList({ navigation }) {
  const { response, loading, error } = useApi({
    method: 'get',
    url: '/frontend-test',
  })

  const [data, setData] = useState<TransactionData[]>([])

  useEffect(() => {
    if (response !== null) {
      const _data: TransactionData[] = Object.values(response)
      setData(_data)
    }
  }, [response])

  const getSelectedData = useContext(DataUpdateContext)!

  const [sortModalVisible, setSortModalVisible] = useState(false)
  const [sortType, setSortTypes] = useState('sort' as SortTypes)

  function toggleSortModal(visible: boolean): void {
    setSortModalVisible(visible)
  }

  function selectSortType(type: SortTypes): void {
    setSortTypes(type)
    setSortModalVisible(false)
  }

  function onSortModalClose(): void {
    toggleSortModal(false)
  }

  function onItemTapped(data: TransactionData): void {
    getSelectedData(data)
    navigation.push('TransactionDetails')
  }

  return (
    <View style={_styles.pageLayout}>
      {loading && (
        <View style={_styles.pageBlank}>
          <ActivityIndicator size={100} color={appTheme.colors.gray} />
        </View>
      )}
      {error && (
        <View style={_styles.pageBlank}>
          <Icon name='skull-outline' size={100} color={appTheme.colors.gray} />
          <AppText style={_styles.errorTitle}>Ups! Maap!</AppText>
          <AppText style={_styles.errorDescription}>
            Silahkan coba lagi nanti.
          </AppText>
        </View>
      )}
      {!loading && !error && (
        <>
          <SortModal
            visible={sortModalVisible}
            value={sortType}
            onSelect={selectSortType}
            onClose={onSortModalClose}
          />
          <SearchBar
            sortType={sortType}
            visible={sortModalVisible}
            toggleSortModal={toggleSortModal}
          />
          <List data={data} onItemTapped={onItemTapped} />
        </>
      )}
    </View>
  )
}

const SearchBar = (props: {
  sortType: SortTypes
  visible: any
  toggleSortModal: (visible: boolean) => void
}) => {
  const [text, onChangeText] = React.useState<string>('')

  function onShowSortModal(): void {
    props.toggleSortModal(true)
  }

  return (
    <View style={_styles.searchBar}>
      <View style={_styles.searchBarFieldSection}>
        <LineIcon
          name='magnifier'
          size={20}
          color={appTheme.texts.colorSubtle}
        />
        <TextInput
          style={_styles.searchBarField}
          onChangeText={onChangeText}
          value={text}
          placeholder='Cari nama, bank, atau nominal'
          keyboardType='numeric'
        />
      </View>
      <Tappable
        style={_styles.searchButton}
        label={SortLabels[props.sortType]}
        trailing={(trailingStyle) => (
          <Icon name='chevron-down' size={24} color={trailingStyle.color} />
        )}
        onTapped={onShowSortModal}
      />
    </View>
  )
}

const List = (props: {
  data: TransactionData[]
  onItemTapped: (item: TransactionData) => void
}) => {
  const _badgeProps: {
    PENDING: BadgeProps
    SUCCESS: BadgeProps
  } = {
    PENDING: {
      type: 'outline',
      label: 'Pengecekan',
      color: appTheme.colors.danger,
    },
    SUCCESS: {
      type: 'filled',
      label: 'Berhasil',
      color: appTheme.colors.success,
    },
  }

  function onItemTapped(item: TransactionData): void {
    props.onItemTapped(item)
  }

  const renderItem = ({ item }: { item: TransactionData }): JSX.Element => {
    function _onItemTapped(): void {
      onItemTapped(item)
    }

    const _senderBank = Formatters.bankFixCase(item.sender_bank)
    const _beneficiaryBank = Formatters.bankFixCase(item.beneficiary_bank)
    const _amount = Formatters.currency(item.amount)
    const _createdAt = Formatters.date(item.created_at)

    return (
      <TouchableOpacity
        key={item.id}
        onPress={_onItemTapped}
        activeOpacity={0.5}
      >
        <View
          style={[
            _styles.listItem,
            { borderLeftColor: _badgeProps[item.status].color },
          ]}
        >
          <View style={_styles.listDetails}>
            <AppText style={_styles.listTitle}>
              <Text>{_senderBank}</Text>
              <Icon
                name='arrow-forward'
                size={16}
                color={appTheme.texts.colorPrimary}
              />
              <Text>{_beneficiaryBank}</Text>
            </AppText>
            <AppText style={_styles.listDescription}>
              {item.beneficiary_name.toUpperCase()}
            </AppText>
            <AppText style={_styles.listDescription}>
              {_amount}
              {' ● '}
              {_createdAt}
            </AppText>
          </View>
          <View>
            <Badge
              type={_badgeProps[item.status].type}
              label={_badgeProps[item.status].label}
              color={_badgeProps[item.status].color}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const itemSeparatorComponent = () => <Divider.V size={8} />

  return (
    <FlatList
      contentContainerStyle={_styles.listLayout}
      data={props.data}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparatorComponent}
    />
  )
}
