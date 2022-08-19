import * as React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { appTheme } from '../../styles/appTheme'
import AppText from '../../ui/AppText'
import Tappable from '../../ui/Tappable'
import { trxDetailsStyles } from './TransactionDetails.styles'

var _styles = trxDetailsStyles

export default function TransactionDetails() {
  // const dataContext = useContext(DataContext)
  const dataContext = {
    // TEST: remove once done testing
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
    fee: 0,
  }

  return (
    <View style={_styles.pageLayout}>
      <View style={[_styles.sectionLayout, _styles.trxIdSection]}>
        <AppText style={appTheme.styles.textStyles.bold}>
          ID TRANSAKSI: #{dataContext?.id}
        </AppText>
        <Tappable
          containerStyle={_styles.trxIdButton}
          label=''
          trailing={(trailingStyle) => {
            var _height = 18

            return (
              <Icon name='copy-outline' size={18} color={trailingStyle.color} />
            )
          }}
          onTapped={() => {
            console.log(`\n-----> Tapped COPY`)
          }}
        />
      </View>
      <View style={[_styles.sectionLayout, _styles.headingSection]}></View>
      <View style={[_styles.sectionLayout, _styles.detailsSection]}></View>
    </View>
  )
}
