import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./page/Register";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userCurrent } from "./redux/userSlice/userSlice";

function App() {
  const [ping, setPing] = useState(false);
  const dispatch=useDispatch();
  useEffect(() => {
    // dispatch(userCurrent());
  }, [ping,dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
