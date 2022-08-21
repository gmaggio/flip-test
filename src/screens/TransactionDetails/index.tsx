import * as React from 'react'
import { useContext } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { DataContext } from '../../context/DataContext'
import KeyValue from '../../data/KeyValue'
import { appTheme } from '../../styles/appTheme'
import AppText from '../../ui/AppText'
import Divider from '../../ui/Divider'
import Tappable from '../../ui/Tappable'
import { Formatters } from '../../utils/formatter'
import { Helpers } from '../../utils/helpers'
import { TransactionData } from '../TransactionList/TransactionList.types'
import { trxDetailsStyles } from './TransactionDetails.styles'

const _styles = trxDetailsStyles

export default function TransactionDetails({ navigation }) {
  const _data: TransactionData = useContext(DataContext)!

  function onCopyId(): void {
    Helpers.copyToClipboard(_data.id, {
      message: 'ID transaksi telah disalin',
    })
  }

  function onBack(): void {
    navigation.pop()
  }

  return (
    <View style={_styles.pageLayout}>
      <View style={[_styles.sectionLayout, _styles.trxIdSection]}>
        <AppText style={_styles.trxIdText}>ID TRANSAKSI: #{_data.id}</AppText>
        <Tappable
          style={_styles.tappable}
          label=''
          trailing={(trailingStyle) => (
            <Icon name='copy-outline' size={18} color={trailingStyle.color} />
          )}
          onTapped={onCopyId}
        />
      </View>

      <Divider.V size={2} color={appTheme.colors.grayLightVariant} />

      <View style={[_styles.sectionLayout, _styles.headingSection]}>
        <AppText style={_styles.headingText}>DETAIL TRANSAKSI</AppText>
        <Tappable
          style={_styles.headingButton}
          label='Tutup'
          onTapped={onBack}
        />
      </View>

      <Divider.V size={2} color={appTheme.colors.grayLightVariant} />

      <View style={[_styles.sectionLayout, _styles.detailsSection]}>
        <AppText style={_styles.detailsTitle}>
          <Text>{Formatters.bankFixCase(_data.senderBank)}</Text>
          <Icon
            name='arrow-forward'
            size={16}
            color={appTheme.texts.colorPrimary}
          />
          <Text>{Formatters.bankFixCase(_data.beneficiaryBank)}</Text>
        </AppText>
        <DetailsList data={_data} />
      </View>
    </View>
  )
}

const DetailsList = (props: { data: TransactionData }) => {
  const detailsData = Array<KeyValue<string, string>>(
    new KeyValue({
      key: props.data.beneficiaryName,
      value: props.data.accountNumber,
    }),
    new KeyValue({
      key: 'NOMINAL',
      value: Formatters.currency(props.data.amount),
    }),
    new KeyValue({
      key: 'BERITA TRANSFER',
      value: props.data.remark,
    }),
    new KeyValue({
      key: 'KODE UNIK',
      value: props.data.uniqueCode.toString(),
    }),
    new KeyValue({
      key: 'WAKTU DIBUAT',
      value: Formatters.date(props.data.createdAt),
    }),
  )

  const detailsList = detailsData.map((item, index, array) => {
    const _column = 2
    const _parity = index % _column ? 'even' : 'odd'
    const _lastIndex = array.length - 1
    const _lastOffset = _column - 1 * (array.length % _column)
    const _isLast = index > _lastIndex - _lastOffset

    return (
      <View
        key={index}
        style={[
          _styles.detailsData,
          _styles.detailsData[_parity],
          _isLast && _styles.detailsData.isLast,
        ]}
      >
        <View>
          <AppText style={_styles.detailsDataKey}>{item.key}</AppText>
          <AppText style={_styles.detailsDataValue}>{item.value}</AppText>
        </View>
      </View>
    )
  })

  return <View style={_styles.detailsDataSection}>{detailsList}</View>
}
