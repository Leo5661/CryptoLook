import "./TokenCard.css";

function TokenCard() {
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

        <div className="tokenSelectorDropdown"></div>

        <form>
          <label htmlFor="investAmount">Amount you want to invest</label>
          <div className="input">
            <input name="investAmount" type="number" placeholder="0.00" />
            <div className="currency">INR</div>
          </div>

          <label htmlFor="estimateNumber">
            Estimate Number of ETH You will Get
          </label>
          <div className="input">
            <input name="estimateNumber" type="number" placeholder="0.00" />
          </div>

          <button className="buyBtn">Buy</button>
        </form>
      </div>
    </div>
  );
}

export default TokenCard;
