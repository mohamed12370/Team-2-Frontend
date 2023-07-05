//import './style.css'

function Education() {
  return (
    <>
      <div className="text-white text">Education</div>

      <div className="div-4">
        <label className="label1">university</label>
        <input
          className="input2"
          type="text"
          value="International islamic university"
        />
        <label className="label1">Major</label>
        <select className="input2">
          <option>Computer science</option>
          <option>Electrical engeneering</option>
          <option>Computer science</option>
        </select>
        <label className="label1">Graduation year</label>
        <input className="input2" type="text" value="2019" />
      </div>
    </>
  );
}

export default Education;
