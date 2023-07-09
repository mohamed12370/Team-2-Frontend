import { Link } from 'react-router-dom';
import image1 from '../../../Images/secondary_background.jpg';

function CardBusinessbottom() {
  return (
    <div className="Card-Business-bottom-box mb-5 ">
      <div className="row ">
        <div className="col-md-4 col-12 ">
          <img
            src={image1}
            alt=""
            className="img-fluid rounded-start Businss-Left-image "
          />
        </div>
        <div className="col-md-8 col-12">
          <div className="Card-Business-bottom-box-text">
            <div className="Card-Businss-Left-box115">
              <p className="Businss-Left-text15">BUSINESS</p>
              <div className="Card-Businss-Left-subtitle-line"></div>
              <h4 className="Businss-Left-text2">
                HERE'S THE TITLE OF THE ARTICAL
              </h4>
              <span className="Businss-Left-icon-about ">
                <i className="fa-regular fa-clock mx-2 Businss-Left-icon"></i>
                <span className="Businss-Left-text22">2h ago</span>
              </span>
            </div>
            <div className="row">
              <div className="col-11">
                <p className="Businss-Left-text3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur fugit totam veritatis sint sequi commodi
                  reprehenderit corporis quibusdam, iusto ea perspiciatis nisi
                  nesciunt natus ipsa, impedit pariatur nostrum aperiam.dolor
                  sit amet consectetur adipisicing elit Possimus.
                </p>
              </div>
              <div className="col-1">
                <Link to={`/userarticledetails/:id`}>
                  <i className="fa-solid fa-chevron-right Businss-Left-icon2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBusinessbottom;
