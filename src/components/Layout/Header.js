import React from 'react'
import meals from '../../images/video.mp4'
import c from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
    <>
    <header className={c.header}>
        <h1>ComidaDelivery</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={c['main-image']}>
        <video src={meals} autoPlay loop muted/>
    </div>
    </>
  )
}
