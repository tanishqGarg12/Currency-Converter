import React, { useState,useEffect } from 'react'

 function Usecurency(currency) {
    const [data,setdata]=useState({});
    // it will not crash{} empty object

    useEffect(() => {
        return () => {
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>setdata(res[currency]))
        }
    }, [currency])
    return data;
}


export default Usecurency

