import './App.css'
import Problem from "../src/Components/Problems/Problem"
import { Suspense } from 'react'
import Daisynav from './Components/Problems/Daisynav'

 const fetchProblem = fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues').then(res=>res.json())

function App() {
  

  return (
    <>
      <Daisynav></Daisynav>
     <Suspense fallback={<p className='loader'>Loading...</p>}>
      <Problem fetchProblem={fetchProblem}></Problem>

     </Suspense>
    </>
  )
}

export default App
