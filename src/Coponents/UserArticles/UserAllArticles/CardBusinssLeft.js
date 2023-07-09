function CardBusinssLeft(props) {
  return (
    <div className="row d-flex justify-content-between my-3 Card-Businss-Left-box">
      <div className="Card-Businss-Left-box11">
        <div className="Card-Businss-Left-box115">
          <p className="Businss-Left-text15">BUSINESS</p>
          <div className="Card-Businss-Left-subtitle-line"></div>
          <h4 className="Businss-Left-text255 ">
            HERE'S THE {props.text} ARTICAL
          </h4>
          <span className=" Businss-Left-icon-about">
            <i className="fa-regular fa-clock mx-2 Businss-Left-icon"></i>
            <span className="Businss-Left-text22">2h ago</span>
          </span>
        </div>

        <p className="Businss-Left-text3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          fugit totam veritatis sint sequi commodi reprehenderit corporis
          quibusdam.
        </p>
      </div>
    </div>
  );
}

export default CardBusinssLeft;
