import React from 'react';
import Footer from '../Common/Footer';
import { useNavigate } from 'react-router-dom';
import ShowAllBlog from './ShowAllBlog';

const AddblogComp = () => {
    let navigate = useNavigate();
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white me-2">
              <i className="mdi mdi-sale"></i>
            </span>
            All Blogs
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span><button type="button"className="btn bg-gradient-primary text-white me-2"  onClick={() => navigate('addblog')} >Add Blog</button>
              </li>
            </ul>
          </nav>
        </div>
        <ShowAllBlog/>
      </div>
      <Footer/>
    </div>
  );
};

export default AddblogComp;
