export class Student{
    constructor(
        public ID: number,
        public fName: string,
        public adress: string,
        public phone: string,
        public active: boolean,
        public Date: Date,
        public markAvg:number,
        public pay : boolean,
        public show : boolean = false
    ){}
}
