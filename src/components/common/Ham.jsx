const Ham = ({ handleCloseClick, NavRouter }) => {
  return (
    <nav className="headerHambugerArea">
      <div className="closeBtn" onClick={handleCloseClick}>
      </div>
      <ul className="headerNavHumburerInner">
      <li>
            <NavRouter 
              to="/list/" 
              tabIndex={200}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
                すべての写真を見る
            </NavRouter>
          </li>
          <li>
            <NavRouter 
              to="/zaki/" 
              tabIndex={300}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
                雑記
            </NavRouter>
          </li>
          <li>
            <NavRouter 
              to="/trip/" 
              tabIndex={400}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
                旅行
            </NavRouter>
          </li>
      </ul>
    </nav>
  )
}

export default Ham;