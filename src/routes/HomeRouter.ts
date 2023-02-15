import express, { Request, Response } from "express";
import { HomeController } from "../controller/HomeController";
import { LogInfo } from "../utils/logger";

//Router from Express
let homeRouter = express.Router();

// http://localhost:8080/api/home?name=Manuel/
homeRouter.route('/')
    .get( async (req: Request, res: Response) => {
        //Obtain a Query Param
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);
        //Controller Instance to excute method
        const controller: HomeController = new HomeController();
        //Obtain response
        const response = await controller.getMessage(name);
        // Send to the client the response
        res.send(response);

    })

    export default homeRouter;
