import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../Pages/StudentePortalPage/style.css';

function CardHereIsHowYou({ value = '', title, level, hour }) {
  return (
    <>
      <div className=" row justify-content-center m-auto col-lg-3 my-3  ">
        <div className="card-body1 col-lg-12 col-3  ">
          <div className="card-title circularparent mx-auto">
            <CircularProgressbarWithChildren
              value={value}
              styles={buildStyles({ pathColor: ' #BF9B30' })}
            >
              <div className="circularchildren mx-auto">
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({ pathColor: ' #BF9B30' })}
                >
                  <div>
                    <h4>{value}%</h4>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="card-body col-lg-12 col-9  mx-auto text-center">
          <p className="card-title here-is-how-introuduction-text">{title}</p>
          <h4 className="card-text here-is-how-lev1 my-3">{level}</h4>
          <p className=" here-is-how-hour">{hour}</p>
        </div>
      </div>
    </>
  );
}

export default CardHereIsHowYou;
