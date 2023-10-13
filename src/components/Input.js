import React,{useId} from 'react'

function Input({
    label,
    amount,
    onamoutchange,
    onCurrencyChange,
    currencyOptions=[],
    selectcurrency="usd",
    amountdisable=false,
    Currencydisable=false, 
}) {

    return (
        <div>
            <div>
                <label >
                    {label}
                </label>

                <input type='number' placeholder="Amount"
                value={amount}
                disabled={amountdisable}
                onChange={(e)=>onamoutchange && onamoutchange(Number(e.target.value))}/>
                0
                
            </div>

            <div>
                <p>
                    CURRENCY TYPE
                </p>

                <select 
                value={selectcurrency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange((e.target.value))}
                disabled={Currencydisable}>


                    {currencyOptions.map((currency)=>(

                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                    ))}

                </select>
            </div>


            
        </div>
    )
}

export default Input


