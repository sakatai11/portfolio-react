import Nav from "./Nav";

const Ham = ({ handleCloseClick }) => {
  return (
    <nav className="headerHambugerArea">
      <div className="closeBtn" onClick={handleCloseClick}>
      </div>
        <Nav handleCloseClick={handleCloseClick} />
    </nav>
  )
}

export default Ham;