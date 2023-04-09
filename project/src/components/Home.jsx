import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function Home() {
  const { isLoading, error, data, refetch } = useQuery(["advice"], async () => {
    console.log("started fetching")
    return await Axios.get("https://api.adviceslip.com/advice").then(
      (res) => res.data
    ).catch(() => console.log("error"));
  });
  console.log("fetching done")
  if (isLoading) {
    return (
      <div className="card">
        <div class="card__wrapper">
          <h1>Advice #?</h1>
          <p>Loading...</p>
          <div className="pattern__divider"></div>
          <div class="card--button" onClick={refetch}>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <div class="card__wrapper">
          <h1>Advice #?</h1>
          <p>Something Went Wrong</p>
          <div className="pattern__divider"></div>
          <div class="card--button" onClick={refetch}>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div class="card__wrapper">
        <h1>Advice #{data?.slip.id}</h1>
        <p>"{data?.slip.advice}"</p>
        <div className="pattern__divider"></div>
        <div class="card--button" onClick={refetch}>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Home;
