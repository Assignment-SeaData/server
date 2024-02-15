import SQLConnection from "../domain/SQLConnection.mjs";
import UserService from "./UserService.mjs";

export const service = new UserService(new SQLConnection('localhost', 'root', 'artar', 'exam'))