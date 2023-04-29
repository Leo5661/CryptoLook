import Nav from "../../components/nav/Nav";
import TokenCard from "../../components/tokenCard/TokenCard";
import "./Trade.css";

function Trade() {
  return (
    <div className="trade">
      <Nav />
      <div className="body">
        <TokenCard />
      </div>
    </div>
  );
}

export default Trade;
