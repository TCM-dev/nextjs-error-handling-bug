import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  notFound();

  return {
    title: "test",
  };
}

const page = async () => {
  notFound();

  return <div>Page is working</div>;
};

export default page;
