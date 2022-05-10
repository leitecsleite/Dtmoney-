
import { ReactNode, useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";


const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

interface Transaction {
    id?: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt ?: string;
}

type TransactionInput = Omit <Transaction, 'id | createdAt '>

interface TransactionsProviderProps{
    children: ReactNode
}

interface TransactionsContextData{
    transactions: Transaction[]; 
    createTransactions: (transaction: TransactionInput) => void; 
}


 export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

     async function  createTransactions(transactionInput: TransactionInput){
       const response = await   api.post('/transactions', {
        ...transactionInput, 
        createdAt: new Date(), 
       })

       const {transaction} = response.data ; 

       setTransactions([
           ...transactions, 
              transaction,
       ])
    }

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    })
    return (
        <TransactionsContext.Provider value={{transactions, createTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context; 
}