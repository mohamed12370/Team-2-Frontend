function CardBusinssRight(props) {
  return (
    <div className="Businss-Left-boxxx pb-3 mt-4 ">
      <div className=" Card-Businss-Left-box115">
        <p className="Businss-Left-text15">BUSINESS</p>
        <div className="Card-Businss-Left-subtitle-line"></div>
        <h4 className="Businss-Left-text2r">HERE'S THE {props.text} ARTICAL</h4>
        <span className="Businss-Left-icon-about ">
          <i className="fa-regular fa-clock mx-2 Businss-Left-icon"></i>
          <span className="Businss-Left-text22">{props.ago}h ago</span>
        </span>
      </div>
      <p className="Businss-Left-text3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        fugit totam veritatis.
      </p>
    </div>
  );
}

export default CardBusinssRight;
