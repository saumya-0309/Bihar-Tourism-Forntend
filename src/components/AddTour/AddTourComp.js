import React from 'react';
import Footer from '../Common/Footer';

const AddTourComp = () => {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white me-2">
              <i className="mdi mdi-sale"></i>
            </span>
            Add More Tours
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        {/* add your component */}
      </div>
      <Footer/>
    </div>
  );
};

export default AddTourComp;
