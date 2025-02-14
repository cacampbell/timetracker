export default interface Timesheet {
    id?: string;
    UserId?: string;
    description: string;
    rate: number;
    totalTime: number;
    totalCost: number;
}