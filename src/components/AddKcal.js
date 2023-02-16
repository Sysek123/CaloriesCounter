import { useState } from 'react' 

const Addkcal = ({ onAdd, afterAdd }) => {
const [calories, setTextaa] = useState('')

const onSumbit = (e) => {
    e.preventDefault()

    if(!calories) {
        alert('Please add number of kcals')
        return
    }

    onAdd({ calories })
    afterAdd()

    setTextaa('')

  }
  return (
    <form className="add-form" onSubmit={onSumbit}>
        <div className="form-control">
            <label>Add calories</label>
            <input type='number' placeholder="AddKcal"
            value={calories} onChange={(e) => setTextaa(e.target.value)} />
        </div>
        <input  className="btn btn-block" type='submit' value='Add kcal' />
    </form>
  )
}

export default Addkcal