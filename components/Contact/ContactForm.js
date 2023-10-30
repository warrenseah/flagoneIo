import React, { useState } from "react";
import axios from "axios";
import {
  alertFailedContent,
  alertSuccessContent,
} from "../../utils/sweetAlert";
import baseUrl from "../../utils/baseUrl";

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertSuccessContent(
        "Your message was successfully send and will back to you soon"
      );
    } catch (error) {
      console.log(error);
      alertFailedContent(error.message);
    }
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h2>Get In Touch</h2>
          <p>Our friendly support team will get back to you.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    value={contact.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={contact.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Phone number"
                    className="form-control"
                    value={contact.number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                    value={contact.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="text"
                    cols="30"
                    rows="6"
                    placeholder="Write your message..."
                    className="form-control"
                    value={contact.text}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
