class Info {
    public count: number;
    public pages: number;
    public next: string;
    public prev: string;
}

export class ApiResponse <T> {
    public info: Info;
    public results: T;
}
