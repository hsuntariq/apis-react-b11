import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import { ProgressBar } from "react-loader-spinner";

const Apis = () => {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <ProgressBar
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {users?.map((item, index) => {
            return <SingleUser {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Apis;
