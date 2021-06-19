
  type transObject = {
    amount: number,
    desc: string
  }
  //  enum ActionType{
  //   add_transaction = "add_transaction",
  //   delete_transaction = "delete_transaction",
  // }
  export type ActionResult ={
    type: "add_transaction" | "delete_transaction",
    payload: transObject,
    ActionId: number
  }


  export  const TransactionReducer = ((state:transObject[], action:ActionResult) => {

  switch(action.type){
      case "add_transaction":{
          return [action.payload, ...state];
      }
      case "delete_transaction":{
        let value = state[action.ActionId];
        return state.filter(item => item !== value)
      }
      default:
          return state;
  }  
    
  })
