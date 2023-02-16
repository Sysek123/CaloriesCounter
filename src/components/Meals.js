import Meal from "./Meal"

const Meals = ({ meals, onDelete }) => {

  return (
    <>
    {meals.map((meal) => (
     <Meal key={meal.id} meal={meal} onDelete={onDelete} />
     ))}
     </>
  )
}

export default Meals