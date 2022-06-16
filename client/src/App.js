import React from "react";


// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Nav";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/Create";
import Footer from "./components/Footer";
import ScpRecord from "./components/scp";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recordList" element={<RecordList />} />
        <Route path="/scp/:id" element={<ScpRecord />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

// export default App;

//import SCP from "./components/SCP";
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";

//import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/SCP" element={<SCP />} /> */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

function Home() {
  return (
    <div className="container p-3 bg-light text-light mt-3 mb-3">
      <div className="container p-3 bg-dark">
        <h1>SCP Foundation</h1>
        <p className="container p-4 justify">
          Welcome to the SCP Foundation, researcher.
          <br />
          <br /> It has likely been a difficult journey to find yourself where
          you are today, having to be scouted out by people you've never met
          before and invited to exams and interviews for a position you were
          never fully told of. We can imagine you already have a few questions,
          whether it be where you are, who is here with you, or why you were
          chosen to be here. Many of these questions we will not be able to
          answer. Some of those, we will.
          <br />
          <br /> In the interest of not making new personnel go through their
          first several weeks guessing what each task force, site, and acronym
          actually stands for, we have compiled all the information you'd
          reasonably need (and can be given) into a single automated message,
          sent to every new recruit's personal inbox. We recommend going over
          these at your earliest convenience.
          <br />
          <br />
          <br />
          <br />
          <strong>
            &middot;&emsp;
            <span className="text-danger">About the SCP Foundation</span>
          </strong>
          , our mission statement, a word from the Administrator, and other
          miscellaneous information we expect new recruits to be aware of.
          <br />
          <br />
          <strong>
            &middot;&emsp;<span className="text-danger">Object Classes</span>
          </strong>
          , a rundown of the standard anomaly classification system and what
          each designation says about its respective item.
          <i>Required reading for new researchers.</i>
          Information regarding
          <span className="text-danger"> esoteric object classes </span>
          may also be read. , how our classification system works. Violation of
          clearance levels is grounds for instant contract termination, and
          likely amnesticization, so take this information to heart.
          <br />
          <br />
          <strong>
            &middot;&emsp;
            <span className="text-danger">Secure Facilities</span>
          </strong>
          , an explanation of what your Site or Area designation stands for,
          along with what to expect in such locations. You may access
          <span className="text-danger"> a complete list of facilities </span>
          , if allowed so.
          <br />
          <br />
          <strong>
            &middot;&emsp;
            <span className="text-danger">Research Departments</span>
          </strong>
          . Due to the vast amount of anomalous items in our possession, we have
          multiple operational departments, each focusing on a different aspect
          of our research. Cursory knowledge of these sectors may assist you
          when handling unknown objects.
          <br />
          <br />
          <strong>
            &middot;&emsp;
            <span className="text-danger">Mobile Task Forces</span>
          </strong>
          , our highly specialized containment teams. Depending on the anomaly,
          you may require a different kind of expertise than what you personally
          know, so a cursory knowledge of this list may help during times of
          crisis. A more
          <span className="text-danger"> complete list of Task Forces </span>
          can be viewed, if you possess the appropriate clearance levels.
          <br />
          <br />
          <strong>
            &middot;&emsp;
            <span className="text-danger">The Personnel Dossier</span>
          </strong>
          , a list of your superiors, fellow workmates, and individuals of
          particular interest. This list is mostly redacted to personnel of
          lower security clearances, so do not be alarmed if you cannot see any
          names.
          <br />
          <br />
          <strong>
            &middot;&emsp;
            <span className="text-danger">Groups of Interest</span>
          </strong>
          , a list of other organisations aware of the anomalous. A list of more
          <span className="text-danger"> minor Groups of Interest </span>
          is also available.
          <br />
          <br />
          &middot;&emsp;Lastly,
          <strong>
            <span className="text-danger">
              {" "}
              K-Class "End of the World" Scenarios
            </span>
          </strong>
          , as a reminder of what horrors lurk in the dark.
          <br />
          <br />
          <br />
          <br />
          Additionally, as you're presently listed as a Junior Researcher,
          here's a few resources you may use in order to get a better
          understanding of the anomalous and its limits (or lack thereof).
          <br />
          <br />
          <strong>
            &middot;&emsp;
            <span className="text-danger">The Log of Anomalous Items</span>
          </strong>
          , a list of objects contained by the Foundation which do not currently
          warrant an SCP designation and containment procedures. A number of
          these items are available for testing purposes upon request.
          <br />
          <br />
          <strong>
            &middot;&emsp;
            <span className="text-danger">The Log of Extranormal Events</span>
          </strong>
          , as an internal reminder of unusual events which occurred too
          suddenly for Foundation intervention or designation.
          <br />
          <br />
          <strong>
            &middot;&emsp;
            <span className="text-danger">
              The Log of Unexplained Locations
            </span>
          </strong>
          , for locations that are presently anomalous, but do not warrant any
          more Foundation attention than basic concealment procedures.
          <br />
          <br />
          <strong>
            &middot;&emsp;<span className="text-danger">The Nexus Hub</span>
          </strong>
          , a list of anomalous locations inhabited by a permanent community,
          necessitating a more diplomatic approach to their containment.
          <br />
          <br />
          <br />
          If you have any more questions, ask your assigned senior researcher.
          Remember that there's a considerable likelihood that your question
          will have a classified answer, and that you may receive a response.
          <br />
          <br />
          Welcome again, recruit, and good luck.
          <br />
          <br />
          <code>
            This message was sent via an automated system; Do not respond.
          </code>
        </p>
      </div>
    </div>
  );
}

export default App;
