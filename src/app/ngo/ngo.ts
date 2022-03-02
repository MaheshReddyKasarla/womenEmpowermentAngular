export class ngo {
  ngoId: number = 0;
  ngoName: string = '';
  address: string = '';
  contactNo: number = 0;
  emailId: string = '';

  constructor(
    ngoId: number,
    ngoName: string,
    address: string,
    contactNo: number,
    emailId: string
  ) {
    this.ngoId = ngoId;
    this.ngoName = ngoName;
    this.address = address;
    this.contactNo = contactNo;
    this.emailId = emailId;
  }
}
