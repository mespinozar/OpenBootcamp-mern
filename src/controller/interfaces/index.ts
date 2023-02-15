import { BasicResponse } from "../types";

export interface IHomeController {
    getMessage(name?: string): Promise<BasicResponse>
}