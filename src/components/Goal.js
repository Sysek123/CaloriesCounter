import { useState } from 'react' 

const AddGoal = ({ onAdd, afterAdd }) => {
const [goal, setTexta] = useState('')

const onSumbit = (e) => {
    e.preventDefault()

    if(!goal) {
        alert('Please add a goal')
        return
    }

    onAdd({ goal })
    afterAdd()

    setTexta('')

  }
  return (
    <form className="add-form" onSubmit={onSumbit}>
        <div className="form-control">
            <label>Your kcal goal</label>
            <input type='number' placeholder="AddGoal"
            value={goal} onChange={(e) => setTexta(e.target.value)} />
        </div>
        <input  className="btn btn-block" type='submit' value='Save Goal' />
    </form>
  )
}

export default AddGoal