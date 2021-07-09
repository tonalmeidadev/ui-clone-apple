import { createContext, useState } from "react";

export const StatesContext = createContext()

export default function StatesProvider({ children }) {
  const [searchMobile, setSearchMobile] = useState(false)
  const [search, setSearch] = useState(false)
  const [menu, setMenu] = useState(false)

  function clickMenu() {
    setMenu(menu === false ? true : false)
  }

  function clickInput() {
    if (search === false) {
      setSearch(true)
      console.log("Ativou o input")
    }
  }

  function clickCancel() {
    if (search === true) {
      setSearch(false)
      console.log("Desativou o input")
    }
  }

  function clickInputMobile() {
    if (searchMobile === false) {
      setSearchMobile(true)
      console.log("Ativou o input mobile")
    }
  }

  function clickCancelMobile() {
    if (searchMobile === true) {
      setSearchMobile(false)
      console.log("Desativou o input mobile")
    }
  }

  return (
    <StatesContext.Provider value={{
      menu,
      search,
      clickMenu,
      clickInput,
      clickCancel,
      searchMobile,
      clickInputMobile,
      clickCancelMobile
    }}>
      {children}
    </StatesContext.Provider>
  )
}