
function CardNumberUpcomingAndRegisteredAndCompleted(props) {
    return (

        <div className=' col-lg-4 d-flex justify-content-between my-4 Number-Upcoming-Registered'>
            <h2 className="col-3 mx-auto text-center ">{props.number}</h2>
            <p className='col-7 mx-auto py-2 mb-3 '>  {props.title1} <br /> {props.title2} </p>
        </div>

    );
}
export default CardNumberUpcomingAndRegisteredAndCompleted;