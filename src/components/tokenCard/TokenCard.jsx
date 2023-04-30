import { useContext, useEffect, useState } from "react";
import "./TokenCard.css";
import useWebSocket from "react-use-websocket";
import TradeContext from "../../context/TradeContext";
import { calculateEstimateTokens } from "../../utils/Utils";
import { TokenMap } from "../../utils/TokenMap";
import {
  BASE_URL,
  IMAGE_URL_128,
  IMAGE_URL_64,
} from "../../constants/Constants";

function TokenCard({ onDropdownClick }) {
  const [socketUrl, setSocketUrl] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [tradeTokenSym, _] = useContext(TradeContext);
  const [noOfTokens, setNoOfTokens] = useState("");
  const { lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    const symbol = TokenMap.get(tradeTokenSym).symbol;
    const streamName = `${symbol.toLocaleLowerCase()}@trade`;
    const url = `${BASE_URL}/ws/${streamName}`;
    setSocketUrl(url);
  }, [socketUrl, tradeTokenSym]);

  useEffect(() => {
    if (lastMessage !== null) {
      const data = JSON.parse(lastMessage.data);
      const priceInDollars = data.p;
      const priceInRupees = (priceInDollars * 80).toFixed(2);
      setCurrentValue(priceInRupees.toString());
    }
  }, [lastMessage, currentValue]);

  const handleAmountChange = (e) => {
    e.preventDefault();
    setNoOfTokens(calculateEstimateTokens(currentValue, e.target.value));
  };

  return (
    <div className="card">
      <div className="iconSection">
        <div className="tokenLogo">
          <img
            src={`${IMAGE_URL_128}/${TokenMap.get(tradeTokenSym).logo}.png`}
            alt="token logo"
          />
        </div>
      </div>
      <div className="cardBody">
        <div className="currentValue">
          <div className="title">Current value</div>
          <div className="value">&#8377; {currentValue}</div>
        </div>

        <div className="tokenSelectorDropdown" onClick={onDropdownClick}>
          <div className="tokenName">
            <img
              className="selectedTokenLogo"
              src={`${IMAGE_URL_64}/${TokenMap.get(tradeTokenSym).logo}.png`}
              alt="selected token logo"
            />
            <div className="name">{TokenMap.get(tradeTokenSym).name}</div>
          </div>
          <img
            className="dropdownArrow"
            src="./dropdown_arrow.png"
            alt="dropdown arrow"
          />
        </div>

        <form>
          <label htmlFor="investAmount">Amount you want to invest</label>
          <div className="input">
            <input
              name="investAmount"
              type="number"
              placeholder="0.00"
              min={0}
              onChange={(e) => handleAmountChange(e)}
            />
            <div className="currency">INR</div>
          </div>

          <label htmlFor="estimateNumber">
            Estimate Number of ETH You will Get
          </label>
          <div className="input disabled">
            <input
              disabled
              name="estimateNumber"
              type="number"
              placeholder="0.00"
              value={noOfTokens}
            />
          </div>

          <button className="buyBtn">Buy</button>
        </form>
      </div>
    </div>
  );
}

export default TokenCard;
