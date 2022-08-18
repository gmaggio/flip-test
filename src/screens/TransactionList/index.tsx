import { FlatList, Pressable, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { trxListStyles } from './TransactionList.styles'
import AppText from '../../ui/AppText';
import { Badge } from '../../ui/Badge';
import Divider from '../../ui/Divider';
import { TransactionData } from './TransactionList.types';
import Icon from 'react-native-vector-icons/Ionicons';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { globalStyles, AppColors } from '../../styles/globalStyles';

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
  _dummyData[index] = _new;
}

export default function TransactionList({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: (props: any) => <SearchBar />,
    })
  }, [navigation])

  return (
    <List />
  )
}

const SearchBar = () => {
  const [text, onChangeText] = React.useState<string>('');
  const [sortModalVisible, setSortModalVisible] = useState(false);

  return (
    <View style={trxListStyles.searchBar}>
      <LineIcon name='magnifier' size={26} color={AppColors.textSubtle} />
      <Divider.H value={6} />
      <TextInput
        style={trxListStyles.searchBarField}
        onChangeText={onChangeText}
        value={text}
        placeholder='Cari nama, bank, atau nominal'
        keyboardType='numeric'

      />
      <Divider.H value={12} />
      <Pressable onPress={() => setSortModalVisible(!sortModalVisible)}>
        <View style={trxListStyles.searchBarButton}>
          <AppText style={trxListStyles.searchBarButtonText}>URUTKAN</AppText>
          <Divider.H value={6} />
          <Icon name='chevron-down' size={24} color={AppColors.red} />
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
        var _colorIndicator = item.status === 'PENDING' ? AppColors.danger : AppColors.success

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
                  <Text>{item.senderBank}</Text>
                  <Icon name='arrow-forward' size={16} color={globalStyles.textStyles.color} />
                  <Text>{item.beneficiaryBank}</Text>
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
          </TouchableOpacity>
        );
      }}

      ItemSeparatorComponent={
        ({ }) => (
          <Divider.V value={8} />
        )
      }
    />
  )
}
