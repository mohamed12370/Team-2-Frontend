import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../Pages/StudentePortalPage/style.css';

function CardHereIsHowYou(props) {
  return (
    <>
      {/* <div className=' col-lg-3 col-md-6 col-sm-12  mb-5 bg-dark text-center'>

                <div className="card " >
                    <div className='card-title circularparent float-left bg-info'>
                        <CircularProgressbarWithChildren value={props.valuee} styles={buildStyles({ pathColor: ' #BF9B30' })} >
                            <div className='circularchildren mx-auto'>
                                <CircularProgressbarWithChildren value={props.valuee} styles={buildStyles({ pathColor: ' #BF9B30' })} >
                                    <div style={{ fontSize: 30 }} >

                                        <h4>{props.valuee}%</h4>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>

                        </CircularProgressbarWithChildren>

                    </div>



                    <div className="card-body float-left col-6 bg-info">
                        <h4 className="card-title props-title">{props.title}</h4>
                        <h4 className="card-text my-5">{props.level}</h4>
                        <h5 className="hour">{props.hour}</h5>
                    </div>
                </div>


            </div> */}

      <div className=" row justify-content-center m-auto col-lg-3 my-3  ml-1">
        <div className="card-body1 col-lg-12 col-3 ml-1 ">
          <div className="card-title circularparent mx-auto">
            <CircularProgressbarWithChildren
              value={props.valuee}
              styles={buildStyles({ pathColor: ' #BF9B30' })}
            >
              <div className="circularchildren mx-auto">
                <CircularProgressbarWithChildren
                  value={props.valuee}
                  styles={buildStyles({ pathColor: ' #BF9B30' })}
                >
                  <div>
                    <h4>{props.valuee}%</h4>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>

        <div className="card-body col-lg-12 col-9 ml-1 mx-auto text-center">
          <h4 className="card-title props-title">{props.title}</h4>
          <h4 className="card-text ">{props.level}</h4>
          <h5 className="hour">{props.hour}</h5>
        </div>
      </div>
    </>
  );
}

export default CardHereIsHowYou;
