import React, { useState } from "react";
import { useNavigate } from "react-router";
import FileBase64 from "react-file-base64";

export default function Create() {
  const [form, setForm] = useState({
    item: "",
    name: "",
    objectclass: "",
    image: "",
    description: "",
    containment: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      item: "",
      name: "",
      objectclass: "",
      image: "",
      description: "",
      containment: "",
    });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className="container text-light">
      <h3>Create New SCP Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="item">Item #</label>
          <input
            type="text"
            className="form-control"
            id="item"
            value={form.item}
            onChange={(e) => updateForm({ item: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name">SCP Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="objectclass">SCP Objectclass</label>
          <input
            type="text"
            className="form-control"
            id="objectclass"
            value={form.objectclass}
            onChange={(e) => updateForm({ objectclass: e.target.value })}
          />
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

        <FileBase64
          multiple={false}
          onDone={({ base64 }) => updateForm({ image: base64 })}
        />

        <div className="form-group mt-3">
          <input
            type="submit"
            value="Create person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
