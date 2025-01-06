import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="About"> 
        <div className="container gx-0">
          <div className="row gx-0">
            <div className="col-12">
              <h1 className="about_us">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ***************************** */}
      <div className="contact">
        <div className="container-fluid contact_main gx-0">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-6 text-center">
              <div className="contact_sec1">
                <h4 className="contact_h4">Contact Information</h4>
                <p>
                  Fill the form below or call us or email us .We will help you as soon as
                  possible.
                </p>
                {/* ************************* */}
                <div className="row gx-0">
                  <div className="col-lg-6">
                    <div className="contact_fm_1">
                      <i className="fa-solid fa-phone"></i>
                      <h4>Phone No</h4>
                      <h6>+88 01682 825 123</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact_fm_2">
                      <i className="fa-solid fa-envelope"></i>
                      <h4>Email</h4>
                      <h6>EXstore@gmail.com</h6>
                    </div>
                  </div>
                </div>
                {/* ************************* */}
                <div className="row gx-0">
                  <div className="col-lg-12">
                    <div className="contact_fm_3">
                      <i className="fa-solid fa-location-dot"></i>
                      <h4>Address</h4>
                      <h6>Al Ain, Abu Dhabi</h6>
                      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129993.42069063494!2d54.386728!3d24.453884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b5d9b5f5f5f%3A0x0!2zQWJ1IERoYWJpIQ!5e0!3m2!1sen!2sus!4v1593475534530!5m2!1sen!2sus"
  width="100%"
  height="650px"
  frameBorder="0"
  style={{ border: 0 }}
  allowFullScreen
></iframe>

                    </div>
                  </div>
                </div>
                {/* ************************* */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact_sec2">
                <form action="https://formspree.io/f/xjvqvwyo" method="POST">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Subject*
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Subject Here"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message*
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      name="textarea"
                      placeholder="Type Your Message Here"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="contact_btn">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***************************** */}
    </>
  );
}

export default Contact;