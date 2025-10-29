import './SimpleMenu.css'

function SimpleMenu() {
  return (
    <header className="full-width">
      <section className="top-section sticky-top">
        <div className="container full-width">
          <nav className="nav-menu">
            <ul className="horizontal-list">
              <li className="menu-item">Home</li>
              <li className="menu-item">Elements</li>
              <li className="menu-item">Pricing</li>
              <li className="menu-item">Blog</li>
              <li className="menu-item">Contact us</li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  )
}

export default SimpleMenu;
