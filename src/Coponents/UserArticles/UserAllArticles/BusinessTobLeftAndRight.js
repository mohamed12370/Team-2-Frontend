import CardBusinssLeft from './CardBusinssLeft';
import CardBusinssRight from './CardBusinssRight';

function BusinessTobLeftAndRight() {
  return (
    <div>
      <h3 className="latest-business-news-title">LATEST BUSINESS NEWS</h3>
      <div className=" row d-flex justify-content-between latest-business-news-box-left ">
        <CardBusinssLeft text="FIRST" />

        <div className="latest-business-news-box-right   ">
          <CardBusinssRight ago="3" text="SECOND" />
          <CardBusinssRight ago="5" text="THIRD" />
        </div>
      </div>
    </div>
  );
}

export default BusinessTobLeftAndRight;
