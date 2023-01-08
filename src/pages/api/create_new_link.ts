import { NextApiRequest, NextApiResponse } from "next";
import { LinkResponse } from "../../lib/LinkType";
import prisma from "../../lib/prisma";

export default async function CreateNewLink(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only supports POST requests" } as LinkResponse);
    }
}