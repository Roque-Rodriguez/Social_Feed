import { useState } from "react";

const DisplayEntriesForm = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
      name: name,
      message: message,
    };
    console.log(newEntry);
    props.addNewEntryProperty(newEntry);

    setName("");
    setMessage("");
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Post:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    maxLength={300}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayEntriesForm;
