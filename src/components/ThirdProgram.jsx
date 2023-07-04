import React, { useEffect, useRef, useState } from 'react'

function ThirdProgram() {
    const refElement = useRef("")
    const [name, setName] = useState("umanga");
function Reset(){
    setName("")
}
useEffect(()=>{
    console.log("Reset Complete")
},[name])
  return (
    <>
        <h1>Learning useRef</h1>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={Reset}>Reset</button>
    </>
  )
}

export default ThirdProgram