import Header from "./components/Header";
import Meals from "./components/Meals";
import { useState, useEffect } from 'react'
import AddMeal from "./components/AddMeal";
import Bottom from "./components/Bottom";
import Goal from "./components/Goal";
import AddKcal from "./components/AddKcal";

function App() {
  const [allKcal, setTotalkcal] = useState ([
      {totalkcal : 0,
      currentGoal : 0}
    ]
  )
  const [showAddKcal, setShowAddKcal] = useState (false) 
  const [showAddMeal, setShowAddMeal] = useState (false)
  const [showAddGoal, setShowAddGoal] = useState(false)
  const [meals, setMeals] = useState ([
    {id : 1,
    text : 'breakfast',
    kcal : 600,
    time : 9.20, 
    },
    {id : 2,
    text : 'dinner',
    kcal : 800,
    time : 14.30,
    },
    { id : 3,
    text : 'supper',
    kcal : 600,
    time : 19.30,
    }
  ])

const addMeal = (meal) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newMeal = { id, ...meal }
  setMeals([...meals, newMeal])
  allKcal[0].totalkcal += parseInt(meal.kcal, 10)
}

const deleteMeal = (id, kcal) => {
  setMeals(meals.filter((meal) => meal.id !==id))
  allKcal[0].totalkcal -= kcal
}

const AddGoal = (goal) => {
  allKcal[0].currentGoal = parseInt(goal.goal, 10)
}

const Addkcal = (calories) => {
  allKcal[0].totalkcal += parseInt(calories.calories, 10)
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddMeal 
      (!showAddMeal)} showAdd={showAddMeal}/>
      {showAddMeal && <AddMeal onAdd={addMeal}/>}
      {meals.length > 0 ? <Meals meals={meals} onDelete={deleteMeal} /> : "Let's eat something"}
      <Bottom onAdd={() => setShowAddGoal 
      (!showAddGoal)} onAdda={() => setShowAddKcal (!showAddKcal)} kcal={allKcal[0].totalkcal} 
      showAdd={showAddGoal} showAdda={showAddKcal}
       range={allKcal[0].currentGoal}/>
      {showAddGoal && <Goal onAdd={AddGoal} afterAdd={() => setShowAddGoal (!showAddGoal)} />}
      {showAddKcal && <AddKcal onAdd={Addkcal} afterAdd={() => setShowAddKcal (!showAddKcal)} />}
    </div>
  );
}

export default App;
