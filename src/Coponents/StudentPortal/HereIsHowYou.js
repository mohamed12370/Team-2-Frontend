import CardHereIsHowYou from './CardHereIsHowYou';

function HereIsHowYou() {
  return (
    <div>
      <div className="col-lg-7 col-sm-12  my-4">
        <h3 className="here-is-how-title">
          Here's how you've been doing for the{' '}
          <span className=" here-is-how-title1 d-inline ">last month</span>{' '}
        </h3>
      </div>
      <div className="row ">
        <CardHereIsHowYou
          value="91"
          title="Introduction to React js"
          level="LEV.1"
          hour="27/30 Hours"
        />
        <CardHereIsHowYou
          value="75"
          title="Introduction to Data Analysis"
          level="LEV.1"
          hour="13/17 Hours"
        />
        <CardHereIsHowYou
          value="100"
          title="System analisis and design"
          level="LEV.1"
          hour="24/24 Hours"
        />
        <CardHereIsHowYou
          value="91"
          title="Introduction to React js"
          level="LEV.1"
          hour="27/30 Hours"
        />
      </div>
    </div>
  );
}

export default HereIsHowYou;
