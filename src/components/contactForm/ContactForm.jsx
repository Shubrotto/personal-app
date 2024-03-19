import "../contact/contact.css";

const ContactForm = () => {
  return (
    <div className="formDiv">
      <div>
        <label>First Name</label>
        <input className="fname" />
      </div>
      <div>
        <label>Last Name</label>
        <input className="lname" />
      </div>
      <div>
        <label>Mobile No</label>
        <input className="mobile" />
      </div>
      <div>
        <label>Email</label>
        <input className="email" />
      </div>
      <div className="message_div">
        <label>Message</label>{" "}
        <textarea name="" id="" cols="30" rows="10"></textarea>{" "}
      </div>
    </div>
  );
};

export default ContactForm;
