import { useQuery, gql } from "@apollo/client";
import React, { useEffect } from "react";
import { loadUsers } from "../GraphQL/Queries";

const GetQuery = () => {
  const [users, setUsers] = React.useState([]);

  const { error, loading, data } = useQuery(loadUsers);
  useEffect(() => {
    console.log(data);
    if (data) {
        console.log('data', data.getAllUsers)
      setUsers(data.getAllUsers);
    }
  }, [data]);
  return (
    <div>
      {users.length > 0 &&
        users.map((item,index) => {
          return <div key={item.first_name+index}>{item.first_name}</div>;
        })}
    </div>
  );
};

export default GetQuery;
