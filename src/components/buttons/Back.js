import React from "react";
import { Link } from "react-router-dom";

function Back({ to, clickAction }) {
  return (
    <Link
      className='fixed bottom-0 left-0 px-2 py-1 my-4 ml-4 rounded-md bg-secondary hover:bg-tertiary'
      to={to}
      onClick={clickAction ?? null}
    >
      Back
    </Link>
  );
}

export default Back;
