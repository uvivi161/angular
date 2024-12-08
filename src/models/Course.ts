export class Course{
    constructor(
        public idCourse: string,
        public NameCourse: string,
        public subjectCourse : subject
    ){}
}
export enum subject{designin, computerPrograming, teacher}