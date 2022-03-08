import React from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function Homepage() {
  const params = useParams();
  params.id = 10;
  return (
    <>
      <Layout>
        <h1>Homepage</h1>

        <Link to={`/users/${params.id}`}>About</Link>
      </Layout>
    </>
  );
}
