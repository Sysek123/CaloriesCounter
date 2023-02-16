import Button from './Button'
import Api from './Api'
import { useState, useEffect } from 'react'

const AddMeal = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [kcal, setKcal] = useState('')
    const [time, setTime] = useState('')
    const [fullKcal, setfullKcal] = useState([
        {fullKcala:0}
    ])
    const [showApi, setShowApi] = useState (true) 

    
    const onSumbit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a name')
            return
        }
        
        onAdd({ text, kcal, time, })

        setText('')
        setKcal('')
        setTime('00:00')
    }
    
    const completeMeal = (productKcal) => {
        fullKcal[0].fullKcala  += productKcal
        console.log(fullKcal[0].fullKcala)
    }

    const transferKcal = () => {
        setKcal(fullKcal[0].fullKcala)
        console.log(kcal)
    }

  return (
    <div>
        <form className="add-form" onSubmit={onSumbit}>
            <div className="form-control">
                <label>Meal</label>
                <input type='text' placeholder="AddMeal"
                value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Kcal</label>
                <input type='number' placeholder="AddKcal"
                value={kcal} onChange={(e) => setKcal(e.target.value)} />
            </div>
            <div className="form-control form-control-check" >
                <label>Time</label>
                <input type='time' placeholder="AddTime" 
                value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <input  className="btn btn-block" type='submit' value='Save Meal' />
        </form>
            <div className='header'>
                <h3>Complete a meal</h3>
                <p>{fullKcal[0].fullKcala} kcal</p>
                <Button color='green' text={'Add to meal'} onClick={transferKcal}></Button>
            </div>
            <div>
                <Api onAdd={completeMeal} afterAdd={() => setShowApi (!showApi)} />
            </div>
        </div>


  )
}

export default AddMeal