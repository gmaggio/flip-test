import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LineIcon from 'react-native-vector-icons/SimpleLineIcons'

import { appTheme } from '../../styles/appTheme'
import AppText from '../../ui/AppText'
import Badge from '../../ui/Badge'
import Divider from '../../ui/Divider'
import { Formatters } from '../../utils/formatter'
import { trxListStyles } from './TransactionList.styles'
import { SortTypes, TransactionData } from './TransactionList.types'
import SortModal, { SortLabels } from './ui/SortModal/SortModal'

// TODO: Temporary data
const DATA: TransactionData[] = [
  {
    id: 'FT7802',
    amount: 3098714,
    uniqueCode: 117,
    status: 'SUCCESS',
    senderBank: 'bni',
    accountNumber: '5793436805',
    beneficiaryName: 'Rhiannan Simmons',
    beneficiaryBank: 'muamalat',
    remark: 'sample remark',
    createdAt: '2022-08-15 08:08:42',
    completedAt: '2022-08-15 08:08:42',
    fee: 0
  },
  {
    id: 'FT19862',
    amount: 2136158,
    uniqueCode: 834,
    status: 'PENDING',
    senderBank: 'bni',
    accountNumber: '462122715',
    beneficiaryName: 'Shanice Harwood',
    beneficiaryBank: 'bca',
    remark: 'sample remark',
    createdAt: '2022-08-15 08:07:42',
    completedAt: '2022-08-15 08:08:42',
    fee: 0
  },
  {
    id: 'FT16197',
    amount: 756637,
    uniqueCode: 287,
    status: 'SUCCESS',
    senderBank: 'bni',
    accountNumber: '4670124158',
    beneficiaryName: 'Beck Glover',
    beneficiaryBank: 'mandiri',
    remark: 'sample remark',
    createdAt: '2022-08-15 08:06:42',
    completedAt: '2022-08-15 08:08:42',
    fee: 0
  },
]
var _dummyData: TransactionData[] = []
for (let index = 0; index < (3 * 15); index++) {
  var _curr = index % 3
  var _new = { ...DATA[_curr] }
  _new.id = _new.id + '-' + index
  _new.id = _new.beneficiaryName + ' - ' + index
  _dummyData[index] = _new
}

export default function TransactionList({ navigation }) {
  const [sortModalVisible, setSortModalVisible] = useState(false)
  const [sortType, setSortTypes] = useState('sort' as SortTypes)

  function toggleSortModal(visible: boolean): void {
    setSortModalVisible(visible)
  }

  function selectSortType(type: SortTypes): void {
    setSortTypes(type)
    setSortModalVisible(false)
  }

  return (
    <View style={trxListStyles.pageLayout}>
      <SortModal
        visible={sortModalVisible}
        value={sortType}
        onSelect={(value: SortTypes) => selectSortType(value)}
        onClose={() => toggleSortModal(false)}
      />
      <SearchBar
        sortType={sortType}
        visible={sortModalVisible}
        toggleSortModal={toggleSortModal}
      />
      <List />
    </View>
  )
}

const SearchBar = (props: {
  sortType: SortTypes,
  visible: any,
  toggleSortModal: (visible: boolean) => void,
}) => {
  const [text, onChangeText] = React.useState<string>('')

  return (
    <View style={trxListStyles.searchBar}>
      <LineIcon
        name='magnifier'
        size={26}
        color={appTheme.texts.colorSubtle}
      />
      <Divider.H value={6} />
      <TextInput
        style={trxListStyles.searchBarField}
        onChangeText={onChangeText}
        value={text}
        placeholder='Cari nama, bank, atau nominal'
        keyboardType='numeric'
      />
      <Divider.H value={12} />
      <Pressable onPress={() => props.toggleSortModal(true)}>
        <View style={trxListStyles.searchBarButton}>
          <AppText style={trxListStyles.searchBarButtonText}>{SortLabels[props.sortType]}</AppText>
          <Divider.H value={6} />
          <Icon name='chevron-down' size={24} color={appTheme.colors.red} />
        </View>
      </Pressable>
    </View>
  )
}

const List = () => {
  function onPress(item: TransactionData): void {
    console.log('item: ' + item.id)
  }

  return (
    <FlatList
      contentContainerStyle={trxListStyles.listLayout}

      data={_dummyData}

      renderItem={({ item }) => {
        var _colorIndicator = item.status === 'PENDING'
          ? appTheme.colors.danger
          : appTheme.colors.success


        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => onPress(item)}
            activeOpacity={.5}
          >
            <View style={[
              trxListStyles.listItem, { borderLeftColor: _colorIndicator }
            ]}>
              <View style={trxListStyles.listDetails}>
                <AppText style={trxListStyles.listTitle}>
                  <Text>{Formatters.bankFixCase(item.senderBank)}</Text>
                  <Icon name='arrow-forward' size={16} color={appTheme.texts.colorPrimary} />
                  <Text>{Formatters.bankFixCase(item.beneficiaryBank)}</Text>
                </AppText>
                <AppText style={trxListStyles.listDescription}>
                  {item.beneficiaryName.toUpperCase()}
                </AppText>
                <AppText style={trxListStyles.listSubDescription}>
                  {Formatters.currency(item.amount)} ● {Formatters.date(item.createdAt)}
                </AppText>
              </View>
              <View>
                {item.status === 'PENDING' ?
                  <Badge.Outline
                    label={'Pengecekan'}
                    color={_colorIndicator} />
                  :
                  <Badge.Filled
                    label={'Berhasil'}
                    color={_colorIndicator} />
                }
              </View>
            </View>
          </TouchableOpacity>
        )
      }}

      ItemSeparatorComponent={
        ({ }) => (
          <Divider.V value={8} />
        )
      }
    />
  )
}
