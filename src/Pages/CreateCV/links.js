import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderTitle from '../../Coponents/CreateCV/HeaderTitle';
import CreateCVStipper from '../../Coponents/CreateCV/CreateCVStipper';
import Links8Form from '../../Coponents/CreateCV/Links8Form';
import CVTemplate from '../../Coponents/CreateCV/CVTemplate';

function LinksPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    links: [
      { sitename: 'facebook', url: 'facebook' },
      { sitename: 'lenkedin', url: 'facebook' },
      { sitename: 'twitter', url: 'facebook' },
      { sitename: 'github', url: 'facebook' },
    ],
  });

  function handelChange(e, i) {
    console.log('links e ', e);
    console.log('links i ', i);
    const { value, name } = e.target;
    let data = [...formData.links];
    data[i] = { ...data[i], [name]: value };
    setFormData((prev) => ({ ...prev, links: data }));
  }

  // function handelChangeSkills(e, i) {
  // 	console.log("skills i ", i);
  // 	console.log("skills e ", e);
  // 	const { value, name } = e.target;
  // 	console.log("skills value ", value);
  // 	console.log(formData.skills[i]);

  // 	const values = [...formData.skills];
  // 	values[i] = value;
  // 	setFormData((prev) => ({
  // 		...prev,
  // 		skills: values,
  // 		// skills: [...formData.skills, (formData.skills[i] = value)],
  // 	}));
  // }

  function deleteItem(i) {
    console.log('i ', i);
    let newArray = formData.links?.filter((_, index) => index !== i);
    console.log(newArray);
    formData.links.splice(i, 1);
    setFormData((prev) => ({ ...prev, links: [...formData.links] }));
  }

  function addItem() {
    setFormData((prev) => ({
      ...prev,
      links: [...formData.links, ''],
    }));
  }
  return (
    <div style={{ backgroundColor: 'rgb(26 26 26 / .9)' }}>
      <HeaderTitle />
      <CreateCVStipper />

      <section className="container-fluid">
        <div className="row create-cv p-3 bg_black-opc my-4 mx-0 p-0 p-lg-4 rounded ">
          <div className="col-12 col-lg-6 ">
            {/* form part ---------------------------------------------- */}
            <Links8Form
              formData={formData.links}
              handelChange={handelChange}
              deleteItem={deleteItem}
              addItem={addItem}
            />
          </div>
          <div className="col-12 d-none d-lg-block col-lg-6">
            {/* template part ----------------------------------------- */}
            <CVTemplate data={formData} />
          </div>
        </div>
        <div className="d-flex flex-wrap flex-column justify-content-between flex-md-row p-2 gap-4 text-capitalize pb-5 ">
          <button
            className="btn btn-gray btn-lg btn-width"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button className="btn btn-primary btn-lg btn-width justify-self-end">
            Download
          </button>
        </div>
      </section>
    </div>
  );
}

export default LinksPage;
