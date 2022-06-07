import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const Record = (props) => (
//   <div>
//     <p>{props.record.item}</p>
//     <p>{props.record.name}</p>
//     <p>{props.record.objectclass}</p>
//     <p>{props.record.image}</p>
//     <p>{props.record.description}</p>
//     <p>{props.record.containment}</p>
//     <p>
//       <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
//         Edit
//       </Link>{" "}
//       |
//       <button
//         className="btn btn-link"
//         onClick={() => {
//           props.deleteRecord(props.record._id);
//         }}>
//         Delete
//       </button>
//     </p>
//   </div>
// );

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

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

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((scp) => {
      return (
        <div key={scp._id} className="col-6">
          <div className="mb-2">
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
      <div className="row">{recordList()}</div>
    </div>
  );
}
