import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routeList from "./Routes/routes";



const App = () => {
  return (
    <Router>
      <Routes>
        {routeList.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  )
}

export default App;
