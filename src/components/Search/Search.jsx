import { useContext } from "react"
import { StatesContext } from '../../contexts/Contexts'

import './style.scss'

import {
  IoCloseOutline,
  IoSearchOutline
} from 'react-icons/io5'

export default function Search() {
  const { search, clickCancel } = useContext(StatesContext)

  return (
    <div className={search ? "searching is-search" : "searching"}>
      <div className={search ? "actions is-search" : "actions"}>
        <IoSearchOutline />
        <input
          type="text"
          className="actions__input"
          placeholder="Buscar em apple.com"
        />
        <IoCloseOutline onClick={clickCancel} />
      </div>
      <ul className={search ? "results is-search" : "results"}>
        <h1 className="results__title">Links rápidos</h1>
        <li className="results__item">
          <a href="/" className="results__link">Perguntas Frequentes sobre a Visita na Apple Store</a>
        </li>
        <li className="results__item">
          <a href="/" className="results__link">Comprar na Apple Store online</a>
        </li>
        <li className="results__item">
          <a href="/" className="results__link">Acessórios</a>
        </li>
        <li className="results__item">
          <a href="/" className="results__link">AirPods</a>
        </li>
        <li className="results__item">
          <a href="/" className="results__link">AirTag</a>
        </li>
      </ul>
    </div>
  )
}