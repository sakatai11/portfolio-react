import { useState,useRef } from "react"
import { createPortal } from "react-dom"
import Ham from "./Ham"

const HamPortal = ({children}) => {
  console.log(children)
  const target = useRef(document.getElementById('container'));
  console.log(target.current);
  return createPortal(children, target.current)
}


const Header = () => {
  const [hamOpen, setHamOpen] = useState(false)
  const [isMenu, setIsMenu] = useState('')


  console.log(hamOpen);

  return (
    <header>
      <div className="Header_text">
        <h1>
          <a href="#" tabIndex={100}>TAICHI PHOTO</a>
        </h1>
      </div>
      <div className="Header__nav">
        <ul>
          <li><a href="#" tabIndex={200}>すべての写真を見る</a></li>
          <li><a href="#" tabIndex={300}>雑記</a></li>
          <li><a href="#" tabIndex={400}>旅行</a></li>
        </ul>
      </div>

      <div id="hamburger" 
        onClick={ () => {
          setHamOpen(!hamOpen) // hamOpenの真偽値を反転させる
          setIsMenu(hamOpen ? '' : 'is-open')  // hamOpenに応じてisMenuを変更する
        }}
        disabled={hamOpen}>
      </div>

      <div id="container" className={isMenu}>

        {
          hamOpen && 
          (
            <HamPortal>
              <Ham handleCloseClick={() => {
                setHamOpen(false)
                setIsMenu(hamOpen ? '' : 'is-open')  // hamOpenに応じてisMenuを変更する
              }}/>
            </HamPortal>
          )
        }
        </div>
    </header>
  );
}

export default Header;