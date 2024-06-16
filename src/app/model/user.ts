export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public birthDate: Date,
        public password: string,
        public confirmPassword: string,
        public topic: string,
        public timePreferance: string,
        public subscribe: boolean,


    ) {}
}
