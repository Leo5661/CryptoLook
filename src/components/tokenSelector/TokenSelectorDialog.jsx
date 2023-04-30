import { useEffect, useState } from "react";
import "./TokenSelectorDialog.css";
import { TokenMap } from "../../utils/TokenMap";
import TokenItem from "../tokenItem/TokenItem";

function TokenSelectorDialog({ open, onClose }) {
  let [tokenList, setTokenList] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const fetchSym = async () => {
      const res = await fetch("https://data.binance.com/api/v3/exchangeInfo");
      const data = await res.json();

      tokenList = data.symbols.filter((item) => {
        const obj = TokenMap.get(item.baseAsset);
        if (item.status === "TRADING" && obj !== undefined) {
          if (item.symbol === obj.symbol) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
      setTokenList(tokenList);
    };

    fetchSym();
  }, []);

  const handleOnChange = (e) => {
    e.preventDefault();
    tokenList = tokenList.filter((item) => {});
  };

  const handleItemClick = (item) => {
    console.log(item);
  };

  if (!open) return null;

  return (
    <div className="tokenSelectorDialog">
      <div className="dialog">
        <div className="handler">
          <div className="close" onClick={onClose}>
            <img src="./close.png" alt="close button" />
          </div>
        </div>

        <div className="search">
          <img className="searchIcon" src="./search.png" alt="Search icon" />
          <input
            className="searchInput"
            type="text"
            maxLength={30}
            placeholder="Search chains"
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <div className="list">
          {tokenList.map((item, index) => {
            const token = TokenMap.get(item.baseAsset);
            return (
              <TokenItem
                onClick={() => handleItemClick(item)}
                key={index}
                src={token.logo}
                name={token.name}
                isSelected={isSelected}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TokenSelectorDialog;
