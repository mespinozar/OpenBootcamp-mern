import { BasicResponse } from "./types";
import { IHomeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class HomeController implements IHomeController {

    public async getMessage(name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/home] Get Request');

        return {
            message: `Hello ${name || "Anonimus"}`
        }
    } 
}