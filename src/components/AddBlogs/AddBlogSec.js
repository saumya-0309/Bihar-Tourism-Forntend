import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AddPhoto, usePostBlog } from '../../hooks/blogs';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddBlogSec() {
  const navigate = useNavigate();
  const [blogImage, setBlogImage] = useState(null);
  const [files, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [city, setCity] = useState('none');
  const [religion, setReligion] = useState('');
  const { handleUpload, isUploadPending } = AddPhoto();
  const { handlePostBLog, isPostLoading } = usePostBlog();

  const CityOption = ["none" , "patna",
    "gaya",
    "jamui",
    "banka",
    "vaishali",
    "champaran",
    "samastipur",
    "munger",
    "buxar",
    "darbhanga",
    "bhagalpur",
    "aurangabad",
    "gopalganj",
    "saharsa",
    "kaimur",
    "nawada",
    "rohtas",
    "lakhisarai"]
  
  const ReligionOption = ["none",
    "hindu",
    "sikh",
    "buddies",
    "jain",
    "christian",
    "islamic"]

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file)
    const reader = new FileReader();
    reader.onloadend = () => {
      setBlogImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("upload_preset", "upload");
    data.append("file", files);
    const imaResult = await handleUpload(data);
    const result = await handlePostBLog(title, body, author, tags, imaResult.secure_url, city, religion);
    if (result.success) {
      toast.success('Blog Post Added Successfully');
      navigate('/blogs');
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ background: "#f6f0fc" }}>
        <div className="card-header text-center">
          <h4>Add New Blog Post</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="blogImage" className="form-label">Upload Image</label>
            <div className="upload-area border p-4 text-center" onClick={() => document.getElementById('blogImage').click()}>
              <span>Drag and drop an image or click to upload</span>
            </div>
            <input type="file" id="blogImage" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
            {blogImage && <div className="image-preview mt-3"><img src={blogImage} alt="Blog" className="img-fluid" /></div>}
          </div>
          <div className="form-group">
            <label htmlFor="blogTitle">Title</label>
            <input type="text" id="blogTitle" className="form-control" placeholder="Enter blog title here..." value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Body</label>
            <ReactQuill value={body} onChange={setBody} className="quill-editor" />
          </div>
          <div className="form-group">
            <label htmlFor="blogAuthor">Author</label>
            <input type="text" id="blogAuthor" className="form-control" placeholder="Author name" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="blogCity">City</label>
            <select id="blogCity"  style={{color:'black'}} className="form-select" onChange={(e) => setCity(e.target.value)}>
              {CityOption.map((cityName) => {
                return <option key={cityName} selected={city === cityName} value={cityName}>{cityName}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="blogReligion">Religion</label>
            <select id="blogReligion" style={{color:'black'}} className="form-select" onChange={(e) => setReligion(e.target.value)}>
              {ReligionOption.map((religionName) => {
                return <option key={religionName} selected={religion === religionName} value={religionName}>{religionName}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="blogTags">Tags</label>
            <input type="text" id="blogTags" className="form-control" placeholder="Tags (comma separated) city , religion belongs to etc." value={tags} onChange={(e) => setTags(e.target.value)} />
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>{isUploadPending || isPostLoading ? "Loading... " : "Publish Blog"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlogSec;
