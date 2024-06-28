import React from "react";

const SingleUser = ({ avatar_url, login }) => {
  return (
    <>
      <div className="col-lg-3">
        <div className="card border-0 my-1 p-5 shadow rounded-0">
          <img src={avatar_url} width={"100%"} alt="" />
          <h5 className="text-center">{login}</h5>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
