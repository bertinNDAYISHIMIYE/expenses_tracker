import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


const Balance = () => {

    const { transations } = useContext(GlobalContext)
    const amounts = transations.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (

        <>
            <h4>Balance</h4>
            <h1>${total}</h1>
        </>
     );
}
 
export default Balance;