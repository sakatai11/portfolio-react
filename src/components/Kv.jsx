const Kv = (props) => {
  console.log(props);
  console.log(props.src);

  return (
    <>
      <div className="Kv_contents">
        <picture>
          <source srcSet={`${props.src[0]} 1x, ${props.src[1]} 2x`} alt="KV"  media="(max-width: 767px)"/>
          <img src={props.src[0]} alt="KV" />
        </picture>

        <div className="scrollArea">
          <p>SCROLL</p>
          <div class="scroll-down4"></div>
        </div>
      </div>
    </>
  );
}

export default Kv;