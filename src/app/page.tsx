import { NextFetchEvent } from "next/server";
import prisma from "../lib/prisma";
import "../styles/tailwind.css";

async function getHello() {
  const link = await prisma.link.findFirst({
    where: {
      reference_url: "initial_commit",
    },
  });
  return link?.original_data;
}

export default async function Home() {
  const databaseItems = await getHello();

  console.log(databaseItems);

  return (
    <div>
      <h1 className="text-red-500">hello world</h1>
    </div>
  );
}
