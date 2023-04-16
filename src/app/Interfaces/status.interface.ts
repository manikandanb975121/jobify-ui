export interface Status {
    [key: string]: {
        count: number,
        icon: string,
        color: string
    };
}
export interface StatusInterface {
    status: Status;
    jobs: Jobs[];
}
export interface StatusResponseInterface {
    name: string;
    count: number;
    icon: string;
    color: string;
}
export interface Jobs {
    sno: number;
    id: string;
    jobTitle: string;
    JobID: string;
    jobDescription: string;
    company: string;
    status: string;
    applierName: string;
    applierAddress: string;
    contactNo: string;
    appliedDate: string;
}
export interface JobsResponseInterface {
    sno: number;
    id: string;
    jobID: string;
    jobTitle: string;
    company: string;
    status: string;
    applierName: string;
}