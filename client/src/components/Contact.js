import React from "react";
import "./Decor.css";

function Contact() {
  document.title = "SCP Foundation | SCP Contact";
  return (
    <div className="container p-3 bg-light text-light mt-3 mb-3">
      <div className="container p-3 bg-dark">
        <h2>Contact Us</h2>
        <div className="seperate hl"></div>
        <br />
        <div className="row">
          <p className="col-2 Med AUMar">
            70 Windermere Drive, Poike, Tauranga 3112
          </p>
          <div
            className="col-10"
            dangerouslySetInnerHTML={{
              __html:
                "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6310.7705664923715!2d176.14932655266216!3d-37.73410449748746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6dda6dd7deb1dd%3A0x2d5e8f061ecc7923!2sToi%20Ohomai%20Institute%20of%20Technology%2C%20Windermere%20Campus%2C%20Tauranga!5e0!3m2!1sen!2snz!4v1655353902770!5m2!1sen!2snz' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
            }}
          />
        </div>
        <br />
        <div className="seperate hl"></div>
        <br />
        <div className="row">
          <p className="col-4 Med bold">Phone:</p>
          <p className="col-4 Med bold">Drew Trumbaturi's Email:</p>
          <p className="col-4 Med bold">Michael Paton's Email:</p>
        </div>
        <div className="row">
          <p className="xxsmall col-4">07-571 0190</p>
          <p className="xxsmall col-4">30042619@student.toiohomai.ac.nz</p>
          <p className="xxsmall col-4">30051225@student.toiohomai.ac.nz</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
