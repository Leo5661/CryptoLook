import "./TokenCard.css";
import useWebSocket, { ReadyState } from "react-use-websocket";

function TokenCard({ onDropdownClick }) {
  const socketUrl = "wss://stream.binance.com:9443";

  const { sendJsonMessage, lastJsonMessage, readyState } =
    useWebSocket(socketUrl);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div className="card">
      <div className="iconSection">
        <div className="tokenLogo">
          <img src="./token_logo.png" alt="token logo" />
        </div>
      </div>
      <div className="cardBody">
        <div className="currentValue">
          <div className="title">Current value</div>
          <div className="value">$32568</div>
        </div>

        <div className="tokenSelectorDropdown" onClick={onDropdownClick}>
          <div className="tokenName">
            <img
              className="selectedTokenLogo"
              src="./token_logo.png"
              alt="selected token logo"
            />
            <div className="name">Ethereum</div>
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
            <input name="investAmount" type="number" placeholder="0.00" />
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
            />
          </div>

          <button className="buyBtn">Buy</button>
        </form>
      </div>
    </div>
  );
}

export default TokenCard;
