import React from 'react'
import CartIcon from './CartIcon';
import Classes from './HeaderCartButton.module.css'
import { useContext, useEffect, useState} from 'react';
import CartContext from '../store/cart-context'

export default function HeaderCartButton(props) {
  const [btnIsHigh, setBtnIsHigh] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  const btnClasses = `${Classes.button} ${btnIsHigh ? Classes.bump : ''}`

  useEffect(()=> {
    if(cartCtx.items.length === 0){
      return;
    }
    setBtnIsHigh(true)

    const timer = setTimeout(() => {setBtnIsHigh(false)}, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items])
    
  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={Classes.icon}>
            <CartIcon />
        </span>
        <span>Seu carrinho</span>
        <span className={Classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
  )
}
