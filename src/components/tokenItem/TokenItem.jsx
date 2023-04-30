import { IMAGE_URL_64 } from "../../constants/Constants";
import "./TokenItem.css";

function TokenItem({ src, name, isSelected, onClick }) {
  return (
    <div
      className={`tokenItem ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img
        className="tokenImg"
        src={`${IMAGE_URL_64}/${src}.png`}
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
