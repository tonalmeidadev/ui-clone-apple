import { useContext } from 'react'
import { StatesContext } from '../../contexts/Contexts'

import './style.scss'

import { IoSearchOutline } from 'react-icons/io5'

export default function Hamburger() {
  const {
    menu,
    clickMenu,
    searchMobile,
    clickInputMobile,
    clickCancelMobile
  } = useContext(StatesContext)

  return (
    <div className={menu ? "hamburger is-active" : "hamburger"}>
      <div className="hamburger__icon" onClick={clickMenu} />
      <div className={searchMobile ? "hamburger__dropdown is-active" : "hamburger__dropdown"}>
        <div className="hamburger__search">
          <div className="hamburger__actions">
            <div className="hamburger__input">
              <IoSearchOutline />
              <input type="text" placeholder="Buscar em apple.com" onClick={clickInputMobile} />
            </div>
            <div className="hamburger__cancel" onClick={clickCancelMobile}>
              <span>Cancelar</span>
            </div>
          </div>
        </div>
        <ul className="hamburger__menu">
          <li className="hamburger__item">
            <a href="/" className="hamburger__link">Mac</a>
          </li>
          <li className="hamburger__item">
            <a href="/" className="hamburger__link">iPad</a>
          </li>
          <li className="hamburger__item">
            <a href="/" className="hamburger__link">iPhone</a>
          </li>
          <li className="hamburger__item">
            <a href="/" className="hamburger__link">Watch</a>
          </li>
          <li className="hamburger__item">
            <a href="/" className="hamburger__link">TV</a>
          </li>
          <li className="hamburger__item">
            <a href="/" className="hamburger__link">Music</a>
          </li>
          <li className="hamburger__item">
            <a href="/" className="hamburger__link">Suporte</a>
          </li>
        </ul>
        <ul className="hamburger__results">
          <h1 className="hamburger__title">Links rápidos</h1>
          <li className="hamburger__options">
            <a href="/" className="hamburger__option">Perguntas Frequentes sobre a Visita na Apple Store</a>
          </li>
          <li className="hamburger__options">
            <a href="/" className="hamburger__option">Comprar na Apple Store online</a>
          </li>
          <li className="hamburger__options">
            <a href="/" className="hamburger__option">Acessórios</a>
          </li>
          <li className="hamburger__options">
            <a href="/" className="hamburger__option">AirPods</a>
          </li>
          <li className="hamburger__options">
            <a href="/" className="hamburger__option">AirTag</a>
          </li>
        </ul>
      </div>
    </div>
  )
}