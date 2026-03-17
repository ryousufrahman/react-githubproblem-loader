import './App.css'
import Problem from "../src/Components/Problems/Problem"
import { Suspense } from 'react'

 const fetchProblem = fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues').then(res=>res.json())

function App() {
  

  return (
    <>
      <h2>Hello</h2>
     <Suspense fallback={<p>Loading...</p>}>
      <Problem fetchProblem={fetchProblem}></Problem>

     </Suspense>
    </>
  )
}

export default App
