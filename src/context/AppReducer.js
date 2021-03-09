const AppReducer = (state, action) => {
    console.log('xxxx', state.transactions)
    switch(action.type){
        case 'DELETE_TRANSACTION':
        return {
            ...state,
            transactions : state.transactions.filter(transaction => transaction.id !==action.paylaod)
        }
        case 'ADD_TRANSACTION':
        return {
            ...state,
            transactions : [ action.paylaod,...state.transactions]
        }
        default: 
        return state
    }
}
export default AppReducer