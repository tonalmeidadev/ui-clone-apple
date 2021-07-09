import { useContext } from 'react'
import { StatesContext } from '../../contexts/Contexts'

import './style.scss'

import Navigation from '../Navigation/Navigation'

export default function Header() {
  const { searchMobile } = useContext(StatesContext)

  return (
    <header className={searchMobile ? "header is-invisible" : "header"}>
      <nav className="nav">
        <Navigation />
      </nav>
    </header>
  )
}