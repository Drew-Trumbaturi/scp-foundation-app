import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  document.title = "SCP Foundation | SCP Edit";
  const [form, setForm] = useState({
    item: "",
    name: "",
    objectclass: "",
    image: "",
    description: "",
    containment: "",

    records: [],
  });
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

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();
    navigate("/recordList");

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      item: form.item,
      name: form.name,
      objectclass: form.objectclass,
      image: form.image,
      description: form.description,
      containment: form.containment,
    };

    // This will send a post request to update the data in the database.
    await fetch(
      `https://scp-foundation-app.herokuapp.com/update/${params.id}`,
      {
        method: "POST",
        body: JSON.stringify(editedPerson),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    navigate(`/scp/${params.id}`);
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div className="container p-3 bg-light text-light mt-3 mb-3">
      <div className="container p-3 bg-dark">
        <h3>Update Record</h3>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group mb-3">
                <label htmlFor="item">Item #</label>
                <input
                  type="text"
                  className="form-control shortTextArea"
                  id="item"
                  value={form.item}
                  onChange={(e) => updateForm({ item: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group mb-3">
                <label htmlFor="name">SCP Name</label>
                <input
                  type="text"
                  className="form-control shortTextArea"
                  id="name"
                  value={form.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group mb-3">
                <label htmlFor="objectclass">SCP Objectclass</label>
                <input
                  type="text"
                  className="form-control shortTextArea"
                  id="objectclass"
                  value={form.objectclass}
                  onChange={(e) => updateForm({ objectclass: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description">SCP Description</label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              value={form.description}
              onChange={(e) => updateForm({ description: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="containment">SCP Containment</label>
            <textarea
              type="text"
              className="form-control"
              id="containment"
              value={form.containment}
              onChange={(e) => updateForm({ containment: e.target.value })}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Update Record" className="the-button" />
          </div>
        </form>
      </div>
    </div>
  );
}
