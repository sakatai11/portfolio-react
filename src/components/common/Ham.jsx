const Ham = ({ handleCloseClick, NavRouter,  }) => {
  return (
    <nav className="headerHambugerArea">
      <div className="closeBtn" onClick={handleCloseClick}>
      </div>
      <ul className="headerNavHumburerInner">
      <li>
            <NavRouter 
              to="/list/" 
              tabIndex={100}
              end
              state={{title: 'PHOTO'}}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={handleCloseClick}
              >
                すべての写真
            </NavRouter>
          </li>
          <li>
            <NavRouter 
              to="/list/outing/" 
              tabIndex={100}
              state={{title: 'おでかけ'}}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={handleCloseClick}
              >
                おでかけ
            </NavRouter>
          </li>
          <li>
            <NavRouter 
              to="/list/night/" 
              tabIndex={100}
              state={{title: '夜'}}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={handleCloseClick}
              >
                夜
            </NavRouter>
          </li>
          <li>
            <NavRouter 
              to="/list/sports/" 
              tabIndex={100}
              state={{title: 'スポーツ'}}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={handleCloseClick}
              >
                スポーツ
            </NavRouter>
          </li>
      </ul>
    </nav>
  )
}

export default Ham;