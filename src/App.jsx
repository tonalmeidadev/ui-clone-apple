import StatesContext from './contexts/Contexts'

import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'

export default function App() {
  return (
    <StatesContext>
      <Header />
      <Wrapper />
    </StatesContext>
  );
}
