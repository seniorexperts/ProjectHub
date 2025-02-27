import mongooseconnect from "@/lib/mongoose";
import {Project} from "@/models";
import { NextApiResponse, NextApiRequest } from "next";

const NewProject = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    await mongooseconnect();

    if (method === "GET") {
        const approved_projects = res.json(await Project.find({approved: true}).sort({createdAt: -1}));
        console.log(approved_projects);
    }

    if (method === "POST") {
        const { title, description ,image,github,name} = req.body;
        const NewProduct = await Project.create({
            title,
            description,
            image,
            github,
            name
        },
        );
        console.log(NewProduct);
        return res.status(201).json({ success: true, data: NewProduct });    
    }    
};

export default NewProject;
