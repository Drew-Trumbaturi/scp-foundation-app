import { Link } from "react-router-dom";
import "./Decor.css";
import Image from "./images/Logo.png";

function Nav() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-xl navbar-dark navnav justify-content-center">
        <div className="row container-fluid">
          <div className="col-4" style={{ padding: 3 }}>
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
            className="col-8 justify-content-start collapse navbar-collapse"
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
                    <Link
                      to="/scp/62aa8a1b06211237617e2db1"
                      className="text-decoration-none">
                      <li className="dropdown-item nav-item" xhref="#">
                        SCP-169
                      </li>
                    </Link>
                    <Link
                      to="/scp/62aa8af506211237617e2db2"
                      className="text-decoration-none">
                      <li className="dropdown-item nav-item" xhref="#">
                        SCP-420
                      </li>
                    </Link>
                    <Link
                      to="/scp/62aa8dfb06211237617e2db3"
                      className="text-decoration-none">
                      <li className="dropdown-item nav-item" xhref="#">
                        SCP-957
                      </li>
                    </Link>
                    <Link
                      to="/scp/62aa8e8606211237617e2db4"
                      className="text-decoration-none">
                      <li className="dropdown-item nav-item" xhref="#">
                        SCP-999
                      </li>
                    </Link>
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
