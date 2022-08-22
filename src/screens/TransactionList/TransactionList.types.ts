import { SortTypes } from './ui/SortOptions/SortOptions'

type TransactionData = {
  id: string
  amount: number
  unique_code: number
  status: 'PENDING' | 'SUCCESS'
  sender_bank: string
  account_number: string
  beneficiary_name: string
  beneficiary_bank: string
  remark: string
  created_at: string
  completed_at: string
  fee: number
}

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

export { TransactionData, FilterDataTypes, FilterDataState, FilterDataAction }
