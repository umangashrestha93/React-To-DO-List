
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import AddUser from './components/AddUser'
import Home from './components/Home'
import ToDoList from './components/ToDoList'
function App() {
  return (
   <>
   {/* <HelloWorld name = "Umanga"/> */}
   {/* <FirstProgram name="FirstProgram" /> */}
   {/* <ThirdProgram /> */}
   {/* <Home />
  <AddUser /> */}
  {/* <ToDoList /> */}
  
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/adduser' element={<AddUser />} />
      <Route path='/todolist' element={<ToDoList />} />
    </Routes>
  </Router>
   </>
  )
}

export default App