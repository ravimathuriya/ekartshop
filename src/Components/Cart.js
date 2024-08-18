import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Cart() {

  const [totaldata, setTotaldata] = useState([]);
  const reducer = useSelector(state => state.reducer)

  const fruitdata = () =>{
    console.log(reducer)
    setTotaldata(reducer)
}

  useEffect(()=>{
    fruitdata()
  },[ ])

  return (
    <>
    
      {totaldata.map((item)=>{
        return (<h1 className='my-5' key={item.key} > {item.title} </h1>)
      })
        }
    </>
  )
}

export default Cart
