import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9k2mvbz", "template_fqbdure", form.current, {
        publicKey: "utl58bDTf8NBzY3K6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSent(true); // Update state to indicate email sent successfully
          setTimeout(() => setIsSent(false), 3000); // Reset isSent after 5 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className="section-header" id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>
            I'm open for new opportunities in Frontend and MERN stack
            development. Let's contact me for new job roles!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i class="bx bxs-home"></i>
              </div>

              <div className="contact-info-content">
                <h4>Address</h4>
                <p>
                  VijayNagar, Indore
                  <br />
                  452011
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i class="bx bx-phone"></i>
              </div>

              <div className="contact-info-content">
                <h4>Phone</h4>
                <p>950-827-3674</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i class="bx bxs-envelope"></i>
              </div>

              <div className="contact-info-content">
                <h4>Email</h4>
                <p>krabhishek0321@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail} action="" id="contact-form">
              <h2>Send Message</h2>
              <div className="input-box">
                <input
                  type="text"
                  required="true"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  required="true"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="input-box">
                <textarea
                  required="true"
                  name="message"
                  placeholder="Type your Message..."
                ></textarea>
              </div>
              <div className="input-box">
                <input type="submit" value="Send" name="" />
              </div>
              {isSent && <p>Message sent successfully!</p>}{" "}
              {/* Display success message */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
