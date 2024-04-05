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
                おでかけ
            </NavRouter>
          </li>
          <li>
            <NavRouter 
              to="/trip/" 
              tabIndex={400}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
                夜
            </NavRouter>
          </li>
          <li>
            <NavRouter 
              to="/trip/" 
              tabIndex={500}
              className={({ isActive }) => (isActive ? 'active' : '')}
              >
                スポーツ
            </NavRouter>
          </li>
      </ul>
    </nav>
  )
}

export default Ham;