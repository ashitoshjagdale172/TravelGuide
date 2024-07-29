import { useState } from 'react'

import Nav from './Components/Nav'
import Header from './Components/Header'
import VacationPackage from './Components/VacationPackage'
import DoWeUse from './Components/DoWeUse'
import Recommendation from './Components/Recommendation'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Header/>
    <VacationPackage/>
    <DoWeUse/>
    <Recommendation/>
    <Footer/>
    </>
  )
}

export default App
