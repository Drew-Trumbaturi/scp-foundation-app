import { Link } from "react-router-dom";
import "./Decor.css";
import Image from "./images/Logo.png";

function Nav() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-xxl navbar-dark navnav justify-content-center">
        <div className="row container-fluid">
          <div className="col-2">
            <div id="wrapper">
              <Link to="/" className="text-white text-decoration-none">
                <div className="row">
                  <div className="col-sm-1">
                    <img src={Image} alt="Logo" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <button
            className="navbar-toggler navbar-toggler-icon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"></button>
          <div
            className="col-4 justify-content-end collapse navbar-collapse"
            id="navbarSupportedContent">
            <div className="d-flex position-relative">
              <ul className="nav">
                <Link to="/" className="nav-item">
                  <li className="nav-link text-light">Home</li>
                </Link>
                <Link to="/AboutUs" className="nav-item">
                  <li className="nav-link text-light">About</li>
                </Link>
                <Link to="/Create" className="nav-item">
                  <li className="nav-link text-light">Submit SCP</li>
                </Link>
                <li className="nav-item dropdown">
                  <li
                    className="nav-link dropdown-toggle text-decoration-none text-light"
                    xhref="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Catalog
                  </li>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDropdown">
                    <label className="dropdown-item disabled">
                      Our Top Five Picks
                    </label>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <Link
                      to="/scp/629ed30f548c12b728568243"
                      className="text-decoration-none">
                      <li className="dropdown-item nav-item" xhref="#">
                        SCP-049
                      </li>
                    </Link>
                    <li className="dropdown-item nav-item" xhref="#">
                      SCP-169
                    </li>
                    <li className="dropdown-item nav-item" xhref="#">
                      SCP-420
                    </li>
                    <li className="dropdown-item nav-item" xhref="#">
                      SCP-957
                    </li>
                    <li className="dropdown-item nav-item" xhref="#">
                      SCP-999
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <Link className="text-decoration-none" to="/recordList">
                      <li className="dropdown-item nav-item">All SCPs</li>
                    </Link>
                    <li className="dropdown-item nav-item" xhref="#">
                      Random SCP
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-6 d-flex mx-3">
              <div id="wrapper" className="d-flex justify-content-end">
                <div className="row g-2">
                  <div className="col-10 searchBox">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                  <div className="col-2">
                    <button
                      type="submit"
                      className="btn btn-danger btn-outline-light">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
