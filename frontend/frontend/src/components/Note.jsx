import React from "react";

function Note({ data, deleteFunc, editFunc }) {
  return (
    <>
      <div className="container">
        <h2 className="titler">{data.title}</h2>
        <p className="body">{data.body}</p>

        <div className="btnWrapper">
          <button
            onClick={() => {
              editFunc(data);
            }}
          >
            Edit{" "}
          </button>
          <button
            onClick={() => {
              deleteFunc(data._id);
            }}
          >
            Delete{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Note;
