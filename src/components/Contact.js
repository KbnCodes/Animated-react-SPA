import React, { useState } from "react";
import Swal from 'sweetalert2'

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone:"",

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your data has been saved',
        showConfirmButton: false,
        timer: 1500
    })
  };
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="EnterName" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="enterName"
                  name="fullname"
                  value={data.fullname}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="EnterPhone" class="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="enterPhone"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="EnterMessage" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="enterMessage"
                  name="message"
                  
                  placeholder="Type Your Message"
                />
              </div>
              <div className="col-12">
                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
