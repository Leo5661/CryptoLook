import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const hamburgerClicked = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="logo">
        <img src="./logo.png" alt="logo" />
        <img src="./name_logo.png" alt="name logo" />
      </div>

      <ul>
        <li>
          <Link className="activeLink" to="/">
            Trade
          </Link>
        </li>
        <li>
          <Link to="/">Earn</Link>
        </li>
        <li>
          <Link to="/">Support</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>

      <button className="connectWalletBtn">Connect wallet</button>

      <button
        className={`hamburger ${isActive ? "is-active" : ""}`}
        onClick={hamburgerClicked}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Nav;
