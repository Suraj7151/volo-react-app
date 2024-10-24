import Feature from "./components/Feature"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Start from "./components/Start"


function App() {


  return (
    <>
      <Header/>
      <div className="flex justify-between px-16 pt-10 pb-0">
        <div>
          <Hero/>
          <Feature/>
        </div>
        <div className="grid grid-cols-2">
          <Start/>
          <Pricing/>
        </div>
        
      </div>
    </>
  )
}

export default App
