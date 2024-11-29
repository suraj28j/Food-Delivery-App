import { Route, Routes } from "react-router-dom"
// import Layout from "./components/Layout"
import Home from "./pages/Home/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
