import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Components/Homepage"
import NavBar from "./Components/NavBar"
import { JobDataProvider } from "./fetchData"

function App() {
  
  return (
    <div className='font-sans font-normal text-base bg-slate-50'>
    <BrowserRouter>
      <JobDataProvider>
        <NavBar />
        <Routes>
          <Route path='/' element ={<HomePage />} />
          {/* <Route path='/search' element ={<HomePage />} /> */}
        </Routes>
      </JobDataProvider>
    </BrowserRouter>
    <footer className='bg-white text-sm'>
        <div className='p-2.5 mx-auto w-full lg:max-w-screen-lg'>© Copyright iO Academy 2022</div>
    </footer>
    </div>
  )
}
export default App
