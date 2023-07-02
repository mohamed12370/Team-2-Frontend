import CardHereIsHowYou from './CardHereIsHowYou';

function HereIsHowYou() {
  return (
    <div>
      <div className="col-lg-6 col-sm-12  my-5">
        <h3 className="titles-page">
          Here's how you've been doing for the{' '}
          <h3 className="titles-page titles-page1  d-inline ">last month</h3>{' '}
        </h3>
      </div>
      <div className="row ">
        <CardHereIsHowYou
          valuee="91"
          title="Introduction to React js"
          level="LEV.1"
          hour="27/30 Hours"
        />
        <CardHereIsHowYou
          valuee="75"
          title="Introduction to Data Analysis"
          level="LEV.1"
          hour="13/17 Hours"
        />
        <CardHereIsHowYou
          valuee="100"
          title="System analisis and design"
          level="LEV.1"
          hour="24/24 Hours"
        />
        <CardHereIsHowYou
          valuee="91"
          title="Introduction to React js"
          level="LEV.1"
          hour="27/30 Hours"
        />
      </div>
    </div>
  );
}

export default HereIsHowYou;
