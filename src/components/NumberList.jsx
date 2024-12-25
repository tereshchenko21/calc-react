import NumberButton from './NumberButton'
import './NumberList.scss'
import { useState } from 'react'

export default function UserNumberField() {

    const [isTitleNumber, setIsTitleNumber] = useState('')
    const [isListNumberCalc, setIsListNumberCalc] = useState([
        {number: 1}, {number: 2}, {number: 3},
        {number: 4}, {number: 5}, {number: 6},
        {number: 7}, {number: 8}, {number: 9},
        {number: 0},
    ])
      
    function ChangeTitleNumber(clickNumber) {
        setIsTitleNumber(isTitleNumber + clickNumber)
    }

    return (
        <div className='bodyCalc'> 
            <div className='titleNumber'>
               {isTitleNumber}
            </div>
            <div className='numberListWrapper'>
                {isListNumberCalc.map((number) => 
                <NumberButton 
                    key={number.id}
                    onClick={ChangeTitleNumber}
                    number={number.number}
                >{number.number}</NumberButton>)}
            </div>
        </div>
    )
}