import { useState } from "react";
import "./contact.css";
import ContactForm from "../contactForm/ContactForm";

const Contact = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <section id="contact">
      <div className="common-wrapper contact_wrapper">
        <div className="contact_title_wrapper">
          <hr />
          <h2 className="title">Contact</h2>
          <hr />
        </div>
        <div className="contact_form">
          <p>
            I am currently seeking employment, and I would appreciate it if you
            could contact me with any available job opportunities.
          </p>
        </div>
        <div className="contact_form_main">
          {showContact === true ? (
            <>
              <ContactForm
                showContact={showContact}
                setShowContact={setShowContact}
              />
              <div className="contact_btn">
                <button onClick={() => setShowContact(!showContact)}>
                  Send Message
                </button>
              </div>
            </>
          ) : (
            <button
              className="contact_btn"
              onClick={() => setShowContact(!showContact)}
            >
              Write Message
            </button>
          )}
        </div>
      </div>
      <div className="contact_social_icon">
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
    </section>
  );
};

export default Contact;
