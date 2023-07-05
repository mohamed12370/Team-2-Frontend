
function CardWelcomeBackAndViewPortal(props) {
    return (
      <div className="row">
        <div className="  col-9 ">
          <h1 className='welcom-back'>welcom back <h1 className='welcom-back1 d-inline '>{props.title}</h1> </h1>
        </div>
        <div className=" col-3 clearfix">
          <button className='btn-view-profile float-end btn py-1 ' type="button" >view profile</button>
        </div>
      </div>
    );
  }
  
  export default CardWelcomeBackAndViewPortal;