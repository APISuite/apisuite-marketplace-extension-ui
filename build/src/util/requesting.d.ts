export interface ErrorReason {
    /** response status */
    status: number;
    /** response status text */
    statusText: string;
    /** response message */
    message: string;
}
export default function request(input: RequestInfo, init: RequestInit): Promise<any>;
