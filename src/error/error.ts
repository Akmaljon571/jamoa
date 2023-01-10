export class ErrorHandle {
    public readonly message: string
    public readonly status: number

    constructor(message: string, status: number) {
        this.status = status,
        this.message = message
    }
}