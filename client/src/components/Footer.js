import { Link } from "react-router-dom";
import Image from "./images/Logo.png";

function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <Link to="/" className="nav-item text-decoration-none">
            <li className="nav-link px-2 text-muted">Home</li>
          </Link>
          <Link to="/recordList" className="nav-item text-decoration-none">
            <li className="nav-link px-2 text-muted">Catalog</li>
          </Link>
          <Link to="/Create" className="nav-item text-decoration-none">
            <li className="nav-link px-2 text-muted">Submit SCPs</li>
          </Link>
          <Link to="/Contact" className="nav-item text-decoration-none">
            <li className="nav-link px-2 text-muted">Contact</li>
          </Link>
          <Link to="/AboutUs" className="nav-item text-decoration-none">
            <li className="nav-link px-2 text-muted">About</li>
          </Link>
          <li>
            <a
              href="https://scp-wiki.wikidot.com/"
              className="nav-link px-2 text-muted"
              target="_blank"
              rel="noreferrer">
              Big Brother Site
            </a>
          </li>
        </ul>
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <img
                src={Image}
                style={{ height: "50px", width: "50px" }}
                alt="scp logo"
              />
            </Link>
          </div>
          <div className="col-md-4">
            <p className="text-center text-muted">
              <small>Developed by Drew Trumbaturi & Michael Paton</small>
            </p>
            <p className="text-center text-muted">
              © 2022 Doobleton productions
            </p>
          </div>
          <div className="col-md-4">
            <ul className="nav justify-content-end list-unstyled d-flex">
              <li className="ms-3 text-light">
                <a
                  className="text-muted"
                  href="https://twitter.com/scpwiki?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://www.instagram.com/scpfoundationwiki/?hl=en">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://www.facebook.com/scpfoundation/">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
