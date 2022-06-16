import React from "react";
import "./Decor.css";
import Image1 from "./images/Drew.jpg";
import Image2 from "./images/Michael.png";

function AboutUs() {
  document.title = "SCP Foundation | SCP About";
  return (
    <div className="container p-3 bg-light text-light mt-3 mb-3">
      <div className="container p-3 bg-dark">
        <h2>About the Doobleton Productions Team</h2>
        <h5>Introducation written by our Administrator.</h5>
        <p className="small AUMar">
          &nbsp;A quick introduction about our agents who put together and
          created the website. These agents are Drew Trumbaturi and Michael
          Paton. It was written in the final statement from the True American
          President Ronald Reagan that these two were to be picked. A smart move
          from the Hollywood Actor/Union Leader/Most Handsome Man to ever
          Live/Best Governor of California/Best and 40th President of the United
          States as these lads are dumb enough to risk their lives for the good
          of America and her people, and I guess the world too. These agents
          must document, experiment and contain the anomalous creatures with the
          help of the other, definitely more intelligent, agents around the
          world. Now working under the former Vice President and unfortunately
          President, I meant brilliant President... Joe Biden...(Don't write
          that down please, Michael!) these two still continue to undergo
          investigations of these anomalous creatures.
        </p>
        <p className="small AUMar">
          Mankind in its present state has been around for a quarter of a
          million years, yet only a small fraction of that have been of any
          significance. So, what did we do for nearly 250,000 years? We huddled
          in caves and around small fires, fearful of the things that we didn't
          understand. It was more than explaining why the sun came up, it was
          the mystery of enormous birds with heads of men and rocks that came to
          life. So we called them "gods" and "demons", begged them to spare us,
          and prayed for salvation. In time, their numbers dwindled and ours
          rose. The world began to make more sense when there were fewer things
          to fear, yet the unexplained can never truly go away, as if the
          universe demands the absurd and impossible. Mankind must not go back
          to hiding in fear. No one else will protect us, and we must stand up
          for ourselves. While the rest of mankind dwells in the light, we must
          stand in the darkness to fight it, contain it, and shield it from the
          eyes of the public, so that others may live in a sane and normal
          world.
        </p>
        <h5>The Agents</h5>
        <div className="row">
          <p className="small col-3">
            <span className="med bold">TRUMBATURI, Drew</span>
            <br />
            <span className="xsmall">
              Back End Lead, Front End Dev and Production Leader.
            </span>
            <br /> <br />
            <b>Agent Name</b>: DOOBLETON.
            <br />
            <b>D.O.B</b>: 08/08/Too Old.
            <br />
            <b>Sex</b>: Male.
            <br />
            <b>Location of Birth</b>: Redacted, AMERICA.
            <br />
            <b>Nationality</b>: Filthy Conservative American.
            </p>
          <img
            className="col-3"
            src={Image1}
            style={{ height: "250px", width: "250px" }}
            alt="Drew Trumbaturi" 
          />
        

          <p className="vl small col-3">
            <span className="med bold">PATON, Michael</span>
            <br />
            <span className="xsmall">
              Front End Lead, Writer Lead and Production Dev.
            </span>
            <br /> <br />
            <b>Agent Name</b>: HOLY CHEESUS.
            <br />
            <b>D.O.B</b>: 01/12/1997.
            <br />
            <b>Sex</b>: Yes Please!
            <br />
            <b>Location of Birth</b>: Whakatane, NEW ZEALAND.
            <br />
            <b>Nationality</b>: Libtard NZ European.
            </p>
          <img
            className="col-3"
            src={Image2}
            style={{ height: "250px", width: "250px" }}
            alt="Michael Paton"
          />
          <div className="seperate hl"></div>
          <p className="small">
            <h4>About the SCP Foundation Team</h4>
            <span className="med">Mission Statement</span>
            <br />
            &nbsp;Operating clandestine and worldwide, the Foundation operates
            beyond jurisdiction, empowered and entrusted by every major national
            government with the task of containing anomalous objects, entities,
            and phenomena. Many of these anomalies pose a significant threat to
            global security by threatening either physical or psychological
            harm. All of them undermine the natural laws that the people of the
            world implicitly trust in.
            <br />
            <br />
            &nbsp;The Foundation maintains an extensive database of information
            regarding anomalies requiring Special Containment Procedures,
            commonly referred to as "SCPs". The primary database contains
            summaries of such anomalies and emergency procedures for maintaining
            or re-establishing safe containment in the case of a containment
            breach or other event.
            <br />
            <br />
            &nbsp;The Foundation operates to maintain normalcy, so that the
            worldwide civilian population can live and go on with their daily
            lives without fear, mistrust, or doubt in their personal beliefs,
            and to maintain human independence from extraterrestrial,
            extradimensional, and other extranormal influence.
            <br />
            <br />
            <span className="med">Our mission is three-fold:</span>
            <br />
            <span className="med">Secure</span>
            <br />
            &nbsp;The Foundation secures anomalies with the goal of preventing
            them from falling into the hands of civilian or rival agencies,
            through extensive observation and surveillance and by acting to
            intercept such anomalies at the earliest opportunity.
            <br />
            <br />
            <span className="med">Contain</span>
            <br />
            &nbsp;The Foundation contains anomalies with the goal of preventing
            their influence or effects from spreading, by either relocating,
            concealing, or dismantling such anomalies or by suppressing or
            preventing public dissemination of knowledge thereof.
            <br />
            <br />
            <span className="med">Protect</span>
            <br />
            &nbsp;The Foundation protects humanity from the effects of such
            anomalies as well as the anomalies themselves until such time that
            they are either fully understood or new theories of science can be
            devised based on their properties and behavior. The Foundation may
            also neutralize or destroy anomalies as an option of last resort, if
            they are determined to be too dangerous to be contained.
            <br />
            <br />
            Additional information will have been provided upon your joining us
            in pursuit of our primary missions. Welcome to the Foundation, and
            good luck.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
