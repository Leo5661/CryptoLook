import "./TokenItem.css";

const IMAGE_URL = "https://s2.coinmarketcap.com/static/img/coins/64x64";

function TokenItem({ src, name, isSelected, onClick }) {
  return (
    <div
      className={`tokenItem ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img
        className="tokenImg"
        src={`${IMAGE_URL}/${src}.png`}
        alt="Token Icon"
      />
      <div className="tName">{name}</div>
      {isSelected ? (
        <img className="tic" src="./selected.png" alt="Selected Token" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default TokenItem;
