import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Trade from "./page/trade/Trade";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trade />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
