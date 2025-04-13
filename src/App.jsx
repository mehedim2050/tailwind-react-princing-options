import { Suspense, useState } from 'react'

import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import PricingOptions from './components/PricingOptions/PricingOptions';
// import Navbar from './components/Navbar/Navbar'


const pricingPromise = fetch('pricingData.json')
  .then(res => res.json());
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        {/* <Navbar></Navbar> */}
        <DaisyNav></DaisyNav>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
         <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
      <footer>

      </footer>


    </>
  )
}

export default App
