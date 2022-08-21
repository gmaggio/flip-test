import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LineIcon from 'react-native-vector-icons/SimpleLineIcons'

import { DataUpdateContext } from '../../context/DataContext'
import { appTheme } from '../../styles/appTheme'
import AppText from '../../ui/AppText'
import Badge, { BadgeProps } from '../../ui/Badge'
import Divider from '../../ui/Divider'
import Tappable from '../../ui/Tappable'
import { Formatters } from '../../utils/formatter'
import { trxListStyles } from './TransactionList.styles'
import { SortTypes, TransactionData } from './TransactionList.types'
import SortModal, { SortLabels } from './ui/SortModal/SortModal'

// TODO: Temporary data
const DATA: TransactionData[] = [
  {
    id: 'FT7802',
    amount: 3098714,
    unique_code: 117,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '5793436805',
    beneficiary_name: 'Rhiannan Simmons',
    beneficiary_bank: 'muamalat',
    remark: 'sample remark',
    created_at: '2022-08-15 08:08:42',
    completed_at: '2022-08-15 08:08:42',
    fee: 0,
  },
  {
    id: 'FT19862',
    amount: 2136158,
    unique_code: 834,
    status: 'PENDING',
    sender_bank: 'bni',
    account_number: '462122715',
    beneficiary_name: 'Shanice Harwood',
    beneficiary_bank: 'bca',
    remark: 'sample remark',
    created_at: '2022-08-15 08:07:42',
    completed_at: '2022-08-15 08:08:42',
    fee: 0,
  },
  {
    id: 'FT16197',
    amount: 756637,
    unique_code: 287,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '4670124158',
    beneficiary_name: 'Beck Glover',
    beneficiary_bank: 'mandiri',
    remark: 'sample remark',
    created_at: '2022-08-15 08:06:42',
    completed_at: '2022-08-15 08:08:42',
    fee: 0,
  },
]
let _dummyData: TransactionData[] = []
for (let index = 0; index < 3 * 3; index++) {
  const _curr = index % 3
  const _new = { ...DATA[_curr] }
  _new.id = _new.id + '-' + index
  _dummyData[index] = _new
}

const _styles = trxListStyles

export default function TransactionList({ navigation }) {
  const [data, setData] = useState<TransactionData[]>([])

  const fetchData = async () => {
    const _resp = await fetch('https://recruitment-test.flip.id/frontend-test')
    const _dataObj: { [key: string]: TransactionData } = await _resp.json()
    const _data: TransactionData[] = Object.values(_dataObj)

    setData(_data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const updateData = useContext(DataUpdateContext)!

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
    updateData(data)
    navigation.push('TransactionDetails')
  }

  return (
    <View style={_styles.pageLayout}>
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
