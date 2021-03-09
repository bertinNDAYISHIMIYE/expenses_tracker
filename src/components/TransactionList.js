import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transactions from './Transaction'

const TransactionList = () => {
    const context = useContext(GlobalContext)
   
    return (
        <> 
        <h3>History</h3>
        <ul className='list'>
        {context.transations.map(transaction => (
            <Transactions  key={transaction.id} transaction={transaction}/>
        ))}
            
        </ul>
        </>
     );
}
 
export default TransactionList;