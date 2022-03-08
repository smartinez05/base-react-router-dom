import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function UserPage() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Layout>User {params.id}</Layout>
    </>
  );
}
