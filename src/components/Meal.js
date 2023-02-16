import { FaTimes} from "react-icons/fa"

const Meal = ({ meal, onDelete }) => {
  return (
    <div className="meal">
        <h3>{meal.text} <FaTimes style={{ color:'red', cursor: 'pointer'}} onClick={() => onDelete(meal.id, meal.kcal)}/></h3>
        <p>{meal.kcal}</p>

    </div>
  )
}

export default Meal