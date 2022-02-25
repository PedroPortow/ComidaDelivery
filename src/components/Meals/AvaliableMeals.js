import React from 'react'
import classes from './AvaliableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'O melhor sushi do mundo!',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Sanduíche',
      description: 'Um sanduíche muito saboroso!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Hamburguer Americano',
      description: 'Carne, queijo e bacon, o clássico americano!',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Salada de vegetais',
      description: 'Essa é pra quem é fitness...ou gosta de verde!',
      price: 18.99,
    },
  ];

export default function AvaliableMeals() {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
        <Card>
          <ul>
              {mealsList}
          </ul>
        </Card>
    </section>
  )
}
