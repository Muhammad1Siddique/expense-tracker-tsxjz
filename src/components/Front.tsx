import React, {useContext,useState} from 'react'
import { TransactionContext } from './transContext';
export const Front = () => {
    
    
    let {transactions, addTransaction, deleteTransaction} = useContext(TransactionContext);

    let[newDesc, setDesc]=useState("");
    let[newAmount, setAmount]=useState(0);

    const handleAddition = (event:any)=>{
        event.preventDefault();
        if(Number(newAmount)===0){
            window.alert("Zero is not allow");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
        
        setDesc("");
        setAmount(0);
        
    }
    const grossIncome =() => {
        let income:number = 0;
        for (let i:number = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
            {
                income += transactions[i].amount;
            }
        }
        return income;
    }
    const totalExpense =() =>{
        let expense:number = 0; 
        for(let j:number = 0; j< transactions.length; j++ ){
            if(transactions[j].amount < 0)
            {
                expense += transactions[j].amount;
            }
        }
        return expense;
    }
    return (
        <div>
            <h1 className="w3-center w3-padding-16">EXPENSE TRACKER</h1>
            <div className="w3-padding-16">
                <strong>YOUR BALANCE</strong>
                <h2>${grossIncome() + totalExpense()}</h2>
            </div>
            <div className="w3-container">
                <div className="w3-row w3-card-2 w3-white">
                    <div className="w3-half">
                        <h4 className="w3-center"><strong>INCOME</strong><br/><span className="w3-text-green">${grossIncome()}</span></h4>
                    </div>
                    <div className="w3-half">
                        <h4 className="w3-center"><strong>EXPENSE</strong><br/><span className="w3-text-red">-${Math.abs(totalExpense())}</span></h4>
                    </div>
                </div>
            </div>
            <div className="w3-container history">
                <h4 className="w3-border-bottom">History</h4>
                {transactions.map((transObj, index)=>{
                     let chec:boolean;
                     let sign:string;
                     if(Number(transObj.amount)>0){
                          chec = true;
                          sign = "+";
                     }else{
                          chec = false;
                          sign = "-";
                     }
                    return(
                        <div key={index} className={`w3-panel w3-rightbar w3-card-2 ${chec ? 'w3-border-green w3-pale-green':'w3-border-red w3-pale-red'}`}>    
                            <button className="delete-btn" onClick={()=>{deleteTransaction(index)}}>X</button>
                            <p><span>{transObj.desc}</span><span>{sign}${Math.abs(transObj.amount)}</span></p>
                        </div>
                    )
                })}
                                
            </div>  
            <div className="w3-container">
                <h4 className="w3-border-bottom">Add New Transactions</h4>
                  <form onSubmit={handleAddition}>
                    <p><label>Description</label>
                    <input className="w3-input w3-border" value={newDesc} onChange={(ev)=>setDesc(ev.target.value)}   type="text" placeholder="Description" required/>
                    </p>
                    <p><label>Amount<br/><small>negative for expense, positive for income</small></label>
                    <input className="w3-input w3-border" value={newAmount} onChange={(ev)=>setAmount(Number(ev.target.value))}   type="number" placeholder="0" required/></p>
                    <p>
                    <input className="w3-purple w3-button w3-border" name="submit" type="submit" value="Add Transaction"/></p>
                  </form>
            </div>
        </div>
    )
}
