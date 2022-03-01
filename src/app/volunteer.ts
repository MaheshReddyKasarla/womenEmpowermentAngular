export class volunteer
{
    category:string="";
    firstName:string="";
    lastName:string="";
    email:string="";
    contact:number=0;
    gender:string="";
    dob:Date;

    constructor(category:string,firstName:string,lastName:string,email:string,contact:number,gender:string,dob:Date)
    {
        this.category = category;
        this.firstName =firstName;
        this.lastName = lastName;
        this.email= email;
        this.contact=contact;
        this.gender=gender;
        this.dob=dob;
    }
}