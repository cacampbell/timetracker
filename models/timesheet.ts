export default interface Timesheet {
    id: string;
    userId?: string;
    lineitemIds?: string[];
    description: string;
    rate: number;
    totalTime: number;
    totalCost: number;
}