const Kv = (props) => {
  console.log(props);
  console.log(props.src);

  return (
    <>
      <div className="Kv_contents">
        <img src={props.src} alt="KV" />
      </div>
    </>
  );
}

export default Kv;