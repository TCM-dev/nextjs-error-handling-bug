import { Metadata } from "next";
import React from "react";
import { get404 } from "../api/api";
// import { errorApi } from "../api/api";

// export async function generateMetadata(): Promise<Metadata> {
//   //   throw Error("unexpected error");
//   await errorApi();

//   return {
//     title: "test",
//   };
// }

const page = async () => {
  //   throw Error("unexpected error");
  //   await errorApi();
  await get404();

  return <div>Page is working</div>;
};

export default page;
