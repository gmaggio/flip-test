import React, { useEffect, useMemo, useReducer, useState } from 'react'
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
import { TransactionData } from './TransactionList.types'
import SortOptions, {
  SortLabels,
  SortTypes,
} from './ui/SortOptions/SortOptions'

const _styles = trxListStyles

enum FilterDataTypes {
  search = 'search',
  sort = 'sort',
}

interface FilterDataState {
  searchKeyword?: string
  sortType?: SortTypes
}

interface FilterDataAction {
  type: FilterDataTypes
  payload: FilterDataState
}

function filterData(state: FilterDataState, action: FilterDataAction) {
  const { type, payload } = action

  switch (type) {
    case FilterDataTypes.search:
      return {
        ...state,
        searchKeyword: payload.searchKeyword,
      }
    case FilterDataTypes.sort:
      return {
        ...state,
        sortType: payload.sortType,
      }
    default:
      return state
  }
}

export default function TransactionList({ navigation }) {
  const { response, loading, error } = useApi({
    method: 'get',
    url: '/frontend-test',
  })

  const [data, setData] = useState<TransactionData[]>([])
  const [sortOptionsVisible, setSortOptionsVisible] = useState(false)

  const [state, dispatch] = useReducer(filterData, {
    sortType: SortTypes.sort,
    searchKeyword: '',
  })

  const getSelectedData = useContext(DataUpdateContext)!

  useEffect(() => {
    if (response !== null) {
      const _data: TransactionData[] = Object.values(response)
      setData(_data)
    }
  }, [response])

  function toggleSortOptions(visible: boolean): void {
    setSortOptionsVisible(visible)
  }

  function onSearchList(text: string): void {
    dispatch({
      type: FilterDataTypes.search,
      payload: {
        searchKeyword: text,
      },
    })
  }

  function selectSortType(type: SortTypes): void {
    dispatch({
      type: FilterDataTypes.sort,
      payload: {
        sortType: type,
      },
    })

    setSortOptionsVisible(false)
  }

  function onSortOptionsClose(): void {
    toggleSortOptions(false)
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
          <SortOptions
            visible={sortOptionsVisible}
            value={state.sortType ?? SortTypes.sort}
            onSelect={selectSortType}
            onClose={onSortOptionsClose}
          />
          <SearchBar
            sortType={state.sortType ?? SortTypes.sort}
            visible={sortOptionsVisible}
            onSearch={onSearchList}
            toggleSortOptions={toggleSortOptions}
          />
          <List filterState={state} data={data} onItemTapped={onItemTapped} />
        </>
      )}
    </View>
  )
}

const SearchBar = (props: {
  sortType: SortTypes
  visible: any
  onSearch: (text: string) => void
  toggleSortOptions: (visible: boolean) => void
}) => {
  const [text, onChangeText] = React.useState<string>('')

  function onChangeSearchKeyword(text: string): void {
    props.onSearch(text)
    onChangeText(text)
  }

  function onShowSortOptions(): void {
    props.toggleSortOptions(true)
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
          onChangeText={onChangeSearchKeyword}
          value={text}
          placeholder='Cari nama, bank, atau nominal'
        />
      </View>
      <Tappable
        style={_styles.searchButton}
        label={SortLabels[props.sortType]}
        trailing={(trailingStyle) => (
          <Icon name='chevron-down' size={24} color={trailingStyle.color} />
        )}
        onTapped={onShowSortOptions}
      />
    </View>
  )
}

const List = (props: {
  data: TransactionData[]
  filterState: FilterDataState
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

  const _searchKeyword = props.filterState.searchKeyword ?? ''
  const _sort = props.filterState.sortType ?? SortTypes.sort

  function search({
    dataToSearch,
    searchText,
  }: {
    dataToSearch: TransactionData[]
    searchText: string
  }): TransactionData[] {
    let _dataSearched = dataToSearch

    if (searchText.length > 0) {
      _dataSearched = _dataSearched.filter(
        (item) =>
          item.beneficiary_name.toLowerCase().includes(searchText) ||
          item.beneficiary_bank.toLowerCase().includes(searchText) ||
          item.amount.toString().includes(searchText),
      )
    }

    return _dataSearched
  }

  function sort({
    dataToSort,
    sortType,
  }: {
    dataToSort: TransactionData[]
    sortType: SortTypes
  }): TransactionData[] {
    const _dataUnsorted = [...dataToSort]

    let _dataSorted = [...dataToSort]

    if (sortType !== SortTypes.sort) {
      _dataSorted.sort((a, b) => {
        const nameA = a.beneficiary_name.toLowerCase()
        const nameB = b.beneficiary_name.toLowerCase()
        const dateA = new Date(a.created_at.replace(' ', 'T'))
        const dateB = new Date(b.created_at.replace(' ', 'T'))

        switch (sortType) {
          case SortTypes.alphaAsc:
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
          case SortTypes.alphaDesc:
            return nameA > nameB ? -1 : nameA < nameB ? 1 : 0
          case SortTypes.newest:
            return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
          case SortTypes.oldest:
            return dateA < dateB ? -1 : dateA > dateB ? 1 : 0
          default:
            return 0
        }
      })
    } else {
      _dataSorted = [..._dataUnsorted]
    }

    return [..._dataSorted]
  }

  const _data = useMemo((): TransactionData[] => {
    let _currentData = [...props.data]

    _currentData = search({
      dataToSearch: _currentData,
      searchText: _searchKeyword,
    })

    _currentData = sort({
      dataToSort: _currentData,
      sortType: _sort,
    })

    return _currentData
  }, [_searchKeyword, _sort])

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

  const listEmptyComponent = () => (
    <View style={[_styles.listItem, _styles.listItem.empty]}>
      <View style={_styles.listDetails}>
        <AppText style={_styles.listDescription}>
          <Text>Daftar tidak ditemukan</Text>
        </AppText>
      </View>
    </View>
  )

  const itemSeparatorComponent = () => <Divider.V size={8} />

  return (
    <FlatList
      contentContainerStyle={_styles.listLayout}
      data={_data}
      renderItem={renderItem}
      ListEmptyComponent={listEmptyComponent}
      ItemSeparatorComponent={itemSeparatorComponent}
    />
  )
}
