import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecordList() {
  document.title = "SCP Foundation | SCP Record Catalog";
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `https://scp-foundation-app.herokuapp.com/record/`
        );
      

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will map out the records on the table
  function recordList() {
    return records.map((scp) => {
      return (
        <div key={scp._id} className="col-6 p-2 bg-light">
          <div className="card bg-dark text-light">
            <Link to={`/scp/${scp._id}`}>
              <img
                src={`../images/${scp.image}`}
                className="card-img-top CatalogImages"
                alt="scp-pictures"
              />
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
              <Link className="text-decoration-none" to={`/scp/${scp._id}`}>
                <button type="button" className="the-button">
                  More info
                </button>
              </Link>
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

      <div className="p-3">
        <div className="row mt-3 mb-3">{recordList()}</div>
      </div>
    </div>
  );
}
