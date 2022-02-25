import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef, useState } from 'react';

export default function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
      setAmountIsValid(false); 
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };



  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={amountInputRef}
       label="Quantidade"
       input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }}/>
      <button>+ Adicionar</button>
      {!amountIsValid && <p>Por favor selecione uma quantidade válida (1-5).</p>}
    </form>
  )
}
