import { useContext } from 'react'
import { StatesContext } from '../../contexts/Contexts'

import Hamburger from '../Hamburger/Hamburger'
import Search from '../Search/Search'
import './style.scss'

import {
  IoLogoApple,
  IoBagOutline,
  IoSearchOutline
} from 'react-icons/io5'

export default function Navigation() {
  const { search, clickInput } = useContext(StatesContext)
  
  return (
    <ul className={search ? "menu is-search" : "menu"}>
      <Search />
      <Hamburger />
      <li className="menu__item">
        <a href="/" className="menu__link">
          <IoLogoApple />
        </a>
      </li>
      <li className="menu__item">
        <a href="/" className="menu__link">Mac</a>
      </li>
      <li className="menu__item">
        <a href="/" className="menu__link">iPad</a>
      </li>
      <li className="menu__item">
        <a href="/" className="menu__link">iPhone</a>
      </li>
      <li className="menu__item">
        <a href="/" className="menu__link">Watch</a>
      </li>
      <li className="menu__item">
        <a href="/" className="menu__link">TV</a>
      </li>
      <li className="menu__item">
        <a href="/" className="menu__link">Music</a>
      </li>
      <li className="menu__item">
        <a href="/" className="menu__link">Suporte</a>
      </li>
      <li className="menu__item">
        <div className="menu__search">
          <IoSearchOutline onClick={clickInput} />
        </div>
      </li>

      
      <li className="menu__item">
        <a href="/" className="menu__link">
          <IoBagOutline />
        </a>
      </li>
    </ul>
  )
}