const Ham = ({ handleCloseClick, LinkRouter }) => {
  return (
    <nav className="headerHambugerArea">
      <div className="closeBtn" onClick={handleCloseClick}>
      </div>
      <ul className="headerNavHumburerInner">
        <li><LinkRouter to="/list/" tabIndex={200} >すべての写真を見る</LinkRouter></li>
        <li><LinkRouter to="#" tabIndex={300} onClick={handleCloseClick}>雑記</LinkRouter></li>
        <li><LinkRouter to="#" tabIndex={400} onClick={handleCloseClick}>旅行</LinkRouter></li>
      </ul>
    </nav>
  )
}

export default Ham;