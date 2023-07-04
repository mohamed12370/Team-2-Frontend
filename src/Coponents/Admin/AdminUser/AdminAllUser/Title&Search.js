import React from 'react';

const Title = () => {
  return (
    <>
      <div className="d-flex justify-content-between my-5 title ">
        <div>
          <h5>Users</h5>
        </div>
        <div>
          <button>
            <a href="#/">Search In Users</a>
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="custom-select">
        <select>
          <option hidden> Students</option>
          <option value="admin">admin</option>
          <option value="instructor">instructor</option>
          <option value="ueser">user</option>
        </select>
        {/* <button>
              Students
              <i class="fas fa-chevron-top"></i>
            </button> */}
      </div>
    </>
  );
};

export default Title;
