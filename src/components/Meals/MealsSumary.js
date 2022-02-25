import React from 'react'
import classes from './MealsSumary.module.css'

export default function MealsSumary() {
  return (
    <section className={classes.summary}>
      <h2>Comida deliciosa, sem sair de casa!</h2>
      <p>
       Escolha sua comida favorita do nosso menu e experience uma refeição deliciosa
      </p>
      <p>
       Todas nossas refeições são feitas com ingredientes de alta qualidade, com entrega rapida e feita pelos nossos melhores chefes!
      </p>
    </section>
  )
}
