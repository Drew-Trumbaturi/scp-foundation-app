import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function ScpRecord() {
  const [records, setRecords] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      const records = await response.json();
      setRecords(records);
      console.log(records);
    }

    fetchData();

    return;
  }, [params.id, navigate, records.length]);

  function scpRecord() {
    return records.map((scp) => {
      return (
        <div className="col-6">
          <div key={scp._id} className="mb-2">
            <div className="card bg-dark text-light">
              <Link to={`/scp/${scp._id}`}>
                <img src={scp.image} className="card-img-top p-1" alt="scp" />
              </Link>
              <hr />
              <div className="card-body p-2">
                <h4 className="card-title">{scp.name}</h4>
                <p className="card-title">Item #: {scp.item}</p>
                <p className="card-text">Objectclass: {scp.objectclass}</p>
                <hr />
                <p className="card-text">
                  Description:{" "}
                  {scp.description.length > 250
                    ? `${scp.description.substring(0, 200)}...`
                    : scp.description}
                </p>
                <Link to={`/scp/${scp._id}`}>
                  <button
                    type="button"
                    className="text-light btn btn-primary btn-outline-secondary">
                    More info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div className="container text-light">
      <h3>SCP Catalog List</h3>
      <div className="row">{scpRecord()}</div>
    </div>
  );
}
