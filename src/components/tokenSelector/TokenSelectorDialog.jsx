import { useContext, useEffect, useState } from "react";
import "./TokenSelectorDialog.css";
import { TokenMap } from "../../utils/TokenMap";
import TokenItem from "../tokenItem/TokenItem";
import TradeContext from "../../context/TradeContext";

function TokenSelectorDialog({ open, onClose }) {
  let [tokenList, setTokenList] = useState([]);
  let [filterList, setFilterList] = useState([]);
  const [tradeTokenSym, setTradeTokenSym] = useContext(TradeContext);

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
      setFilterList(tokenList);
    };

    fetchSym();
  }, []);

  const handleOnChange = (e) => {
    e.preventDefault();
    const searchKey = e.target.value;
    if (searchKey === "") {
      setFilterList(tokenList);
    } else {
      const filteredList = filterList.filter((item) => {
        const itemName = item.baseAsset.toLowerCase();
        return itemName.includes(searchKey.toLowerCase());
      });

      setFilterList(filteredList);
    }
  };

  const handleItemClick = (item) => {
    setTradeTokenSym(item.baseAsset);
    onClose();
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
          {filterList.map((item, index) => {
            const token = TokenMap.get(item.baseAsset);
            return (
              <TokenItem
                onClick={() => handleItemClick(item)}
                key={index}
                src={token.logo}
                name={token.name}
                isSelected={token.sym === tradeTokenSym}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TokenSelectorDialog;
