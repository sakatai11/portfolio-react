const Header = () => {
  return (
    <header>
      <div className="Header_text">
        <p>
          <a href="#" tabIndex={100}>TAICHI PHOTO</a>
        </p>
      </div>
      <div className="Header__nav">
        <ul>
          <li><a href="#" tabIndex={200}>すべての写真を見る</a></li>
          <li><a href="#" tabIndex={300}>雑記</a></li>
          <li><a href="#" tabIndex={400}>旅行</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;