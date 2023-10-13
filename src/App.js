import React from 'react'
import Input from './components/Input'
import Usecurency from './Usecurency'
import { useState } from 'react'
export default function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = Usecurency(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div>
      <div>dwwwsssddddddddss</div>
      {/* <Input></Input> */}
      <div>
        eeeeeeeeee
      </div>
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          convert()
        }}>

        <Input
        label="from"
        amount={amount}
        currencyOptions={options}
        selectcurrency={from}
        onamoutchange={(amount)=>setAmount(amount)}
        onCurrencyChange={(currency)=>{
          setAmount(amount)}
        }/>
        

        <button onClick={swap}>
          swap
        </button>


        <div>
          <Input
          label="to"
          amount={convertedAmount}
          currencyOptions={options}
          selectcurrency={from}
          
          onCurrencyChange={(currency)=>
            setTo(currency) 
          }
          amountdisable/>
          
            <button type="submit" >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
        </div>
    </form>
      </div>



      
    <p>hello</p>      
    <p>hello</p>      
    <p>hello</p>      
    <p>hello</p>      
    </div>
  )
}

