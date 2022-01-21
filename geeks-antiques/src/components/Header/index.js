import React from "react";
import "./style.css";

function Header() {
  return (
    <div>
      <nav className='page-navbar'>
        <a classname='page-navbar-link' href='/coins'>
          Numisma
        </a>
        {"   "}
        <a classname='page-navbar-link' href='/stamps'>
          Philately
        </a>
        {"   "}
        <a classname='page-navbar-link' href='/antiques'>
          Antiques
        </a>
        {"   "}
      </nav>
      <header className='page-header'>The Antique Geek</header>
    </div>
  );
}
export default Header;
