export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export interface Summary {
  deposits: number,
  withdraws: number,
  total: number,
}
