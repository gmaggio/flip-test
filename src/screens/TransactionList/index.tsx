import { FlatList, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { trxListStyles } from './TransactionList.styles'
import AppText from '../../ui/AppText'
import { Badge } from '../../ui/Badge';

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

export default function TransactionList({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: (props: any) => (
        <View style={trxListStyles.searchBar}>
          <Text>Cari nama, bank, atau nominal</Text>
        </View>
      ),
    })
  }, [navigation])

  return (
    <View style={trxListStyles.pageLayout}>
      <TrxList />
    </View>
  )
}

const TrxList = () => {
  function onPress(item: TransactionData): void {
    console.log('item: ' + item.id)
  }

  return (
    <FlatList
      data={DATA}

      renderItem={({ item }) => {
        var _colorIndicator = item.status === 'PENDING' ? '#f9663b' : '#56b686'

        return (
          <TouchableHighlight
            key={item.id}
            onPress={() => onPress(item)}
          >
            <View style={[
              trxListStyles.listItem, { borderLeftColor: _colorIndicator }
            ]}>
              <View style={trxListStyles.listDetails}>
                <AppText style={trxListStyles.listTitle}>
                  {item.senderBank + ' -> ' + item.beneficiaryBank}
                </AppText>
                <AppText style={trxListStyles.listDescription}>{item.beneficiaryName}</AppText>
                <AppText style={trxListStyles.listSubDescription}>{item.amount} ● {item.createdAt}</AppText>
              </View>
              <View>
                {item.status === 'PENDING' ?
                  <Badge
                    type={'outline'}
                    label={'Pengecekan'}
                    color={_colorIndicator} />
                  :
                  <Badge
                    type={'filled'}
                    label={'Berhasil'}
                    color={_colorIndicator} />
                }
              </View>
            </View>
          </TouchableHighlight>
        );
      }}

      ItemSeparatorComponent={
        ({ }) => (
          <View style={{ marginBottom: 8 }} />
        )
      }
    />
  )
}
