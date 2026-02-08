function Header({ totalItems }) {
  return (
    <div className="header">
      <h3>Blinkit Clone</h3>
      <span>🛒 {totalItems}</span>
    </div>
  );
}

export default Header;
