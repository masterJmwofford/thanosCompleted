import React from "react";
import Note from "./Note";

function Index({ info, deleteFunc, editFunc }) {
  return (
    <>
      {info.map((note) => {
        return (
          <Note
            key={note._id}
            data={note}
            deleteFunc={deleteFunc}
            editFunc={editFunc}
          />
        );
      })}
    </>
  );
}

export default Index;
