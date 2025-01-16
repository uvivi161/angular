export class User{
    constructor(
        public id: number,
        public userCode: string,                                                                  
        public firstName: string,                                                                                           
        public lastName: string,                                                                                                 
        public city: string,                                                                                          
        public adress: string,                                                                                  
        public numHouse: number,                                                                                   
        public phone: string,                                                                                        
        public status: boolean  
    ){}
}