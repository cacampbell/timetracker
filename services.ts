import timesheetController from "./services/timesheet";
import lineitemController from "./services/timesheet";
import userController from "./services/user";
import authController from "./services/auth";

export const Services = {
    timesheet: timesheetController,
    lineitem: lineitemController,
    user: userController,
    auth: authController
}