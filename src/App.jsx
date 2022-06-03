import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { ME } from "./graphql/queries";

function App() {
  const { error, loading, data } = useQuery(ME);

  useEffect(() => {
    
  }, [data]);
  console.log(data, "data", error);

  return (
    <div className="App">
      <div className="container-sm">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
