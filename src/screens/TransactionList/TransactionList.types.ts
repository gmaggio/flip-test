export type TransactionData = {
  id: string,
  amount: number,
  uniqueCode: number,
  status: 'PENDING' | 'SUCCESS',
  senderBank: string,
  accountNumber: string,
  beneficiaryName: string,
  beneficiaryBank: string,
  remark: string,
  createdAt: string,
  completedAt: string,
  fee: number,
}
