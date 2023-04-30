import TokenSelectorDialog from "../../components/tokenSelector/TokenSelectorDialog";
import Nav from "../../components/nav/Nav";
import TokenCard from "../../components/tokenCard/TokenCard";
import "./Trade.css";
import { useState } from "react";

function Trade() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="trade">
      <TokenSelectorDialog open={isOpen} onClick={handleClick} />
      <Nav />
      <div className="body">
        <TokenCard onDropdownClick={handleClick} />
      </div>
    </div>
  );
}

export default Trade;
