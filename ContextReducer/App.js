import React from 'react'
import { useMyContext } from './useMyContext'

const App = () => {

    //get from context
    const {color,mode}=useMyContext();

    //dispatching
    const { changeColor, changeMode } = useMyContext()
    changeColor('#ffffff')

    return (
        <div>
            
        </div>
    )
}

export default App
