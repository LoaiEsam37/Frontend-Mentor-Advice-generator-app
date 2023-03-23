import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function Home() {
  const { isLoading, error, data, refetch } = useQuery(["advice"], async () => {
    return await Axios.get("https://api.adviceslip.com/advice").then(
      (res) => res.data
    );
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.slip.advice}
      <button onClick={refetch}>X</button>
    </div>
  );
}

export default Home;
