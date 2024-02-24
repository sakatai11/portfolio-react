const Ham = ({ handleCloseClick }) => {
  return (
    <nav className="headerHambugerArea">
      <div className="closeBtn" onClick={handleCloseClick}>
      </div>
      <ul className="headerNavHumburerInner">
        <li><a href="#" tabIndex={200}>すべての写真を見る</a></li>
        <li><a href="#" tabIndex={300}>雑記</a></li>
        <li><a href="#" tabIndex={400}>旅行</a></li>
      </ul>
    </nav>
  )
}

export default Ham;