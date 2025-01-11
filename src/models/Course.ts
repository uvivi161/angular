export class Course{
    constructor(
        public idCourse: string,
        public NameCourse: string,
        public subjectCourse : subject,
        public clabus: string[],
        public long :number
    ){}
}
export enum subject{designin, computerPrograming, teacher}