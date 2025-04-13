import { Suspense, useState } from 'react'

import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import PricingOptions from './components/PricingOptions/PricingOptions';
import ResultCharts from './components/ResultCharts/ResultCharts';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';
// import Navbar from './components/Navbar/Navbar'



const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json');


function App() {


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

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultCharts> </ResultCharts>
      </main>
      <footer>

      </footer>


    </>
  )
}

export default App
