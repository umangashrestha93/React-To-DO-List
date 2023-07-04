
import { useState, useEffect } from 'react'

function SecondProgram() {
    const [count, setCounter] = useState(0)
    const [evenCount, setEvenCount] = useState(0)

    function updateCount(){
        setCounter(count + 1)
        if ((count + 1) % 2 == 0) {
            setEvenCount(evenCount + 1)
        }
    }

    useEffect(() => {
        console.log('I just mounted')
    }, [])

    useEffect(() => {
        console.log('COunt is updated')
    }, [count])

    useEffect(() => {
        console.log('Even count is updated')
    }, [evenCount])


  return (
    <div className='st-container'>
        <h1>I am learing react {count} times</h1>
        <button onClick={updateCount} >Button 1</button>
    </div>
        )
}

export default SecondProgram