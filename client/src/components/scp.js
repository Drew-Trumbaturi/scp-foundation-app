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
        `https://scp-foundation-app.herokuapp.com/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      if (!records) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      if (response.ok) {
        setRecords(records);
        console.log(records);
      }
    }

    fetchData();

    return;
  }, [params.id, navigate, records.length]);

  const result = Object.keys(records).map((key) => {
    return { [key]: records[key] };
  });
  console.log(result);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`https://scp-foundation-app.herokuapp.com/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This following section will display the record of individual scps.
  return (
    <div className="container mt-5 bg-light p-1 text-light">
      <div className="container">
        <div className="container mt-3 bg-dark">
          <div className="">
            <img src={records.image} className="card-img" alt="scp-pictures" />
            <h3>Item #: {records.item}</h3>
            <h3>SCP Name: {records.name}</h3>
            <h3>SCP Objectclass: {records.objectclass}</h3>
            <hr />
            <h4>Description:</h4>
            <p>{records.description}</p>
            <hr />
            <h4>Containment:</h4>
            <p>{records.containment}</p>
            <p>
              <Link className="btn btn-link" to={`/edit/${records._id}`}>
                Edit
              </Link>{" "}
              |
              <button
                className="btn btn-link"
                onClick={() => {
                  deleteRecord(records._id);
                  navigate("/recordList");
                }}>
                Delete
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
