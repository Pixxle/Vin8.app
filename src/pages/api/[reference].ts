import { NextApiRequest, NextApiResponse } from "next";
import { LinkResponse } from "../../lib/LinkType";
import prisma from "../../lib/prisma";

export default async function GetByReference(req: NextApiRequest, res: NextApiResponse){
    const reference = req.query["reference"];

    if (!reference || typeof reference !== "string"){
        return res.status(404).json({ error: "Missing or invalid referer" } as LinkResponse);
    }

    const data = await prisma.link.findFirst({
        where: {
            reference_url: reference,
        }
    });

    if (!data){
        return res.status(404).json({ error: "No data found" } as LinkResponse);
    }

    return res.status(200).json({"link_type": data?.link_type, "original_data": data?.original_data} as LinkResponse);
}