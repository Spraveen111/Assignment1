import "./index.css"; // Make sure the path is correct for your index.css file

function Header() {
  return (
    <div className="main-container">
      <h1 className="logo">E-Buy</h1>
      <nav className="navbar">
        <ul className="listContainer">
          <li className="listParts">Home</li>
          <li className="listParts">Products</li>
          <li className="listParts">Contact</li>
        </ul>
      </nav>
      <div className="login-container">
        <h1>Login</h1>
      </div>
    </div>
  );
}

export default Header;
