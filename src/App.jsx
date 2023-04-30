import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Trade from "./page/trade/Trade";
import { useState } from "react";
import TradeContext from "./context/TradeContext";

function App() {
  const tradeToken = useState("ETH");

  return (
    <>
      <BrowserRouter>
        <TradeContext.Provider value={tradeToken}>
          <Routes>
            <Route path="/" element={<Trade />}></Route>
          </Routes>
        </TradeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
