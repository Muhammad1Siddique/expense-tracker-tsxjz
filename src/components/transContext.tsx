import { createContext, useReducer } from "react";
import {TransactionReducer} from './transReducer';

type transObject = {
    amount: number,
    desc: string
}


type stateType={
    transactions:transObject[],
    deleteTransaction:any,
    addTransaction:any
}

const initialState:stateType={
    transactions:[],
    deleteTransaction:null,
    addTransaction:null,
}

const initialTransactions:transObject[] = [] 
// const initialTransactions:transObject[] = [
//     {amount: 300, desc: "deposit"},
//     {amount: -140, desc: "chicken meet"},
//     {amount: -60, desc: "vegitable"}

// ]

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({children}:{children:any})=>{
    let  [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transObj:transObject){
        dispatch({
            type: "add_transaction",
            payload:{
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
    function deleteTransaction(id:number){
        dispatch({
            type: "delete_transaction",
            ActionId: id
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}