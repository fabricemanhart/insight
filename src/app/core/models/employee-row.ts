export class EmployeeRow {
  fullName: string;
  code: string;
  title: string;
  organisationUnit: string;
  location: string;
  privateAddressZip: number;
  privateAddressCity: string;

  constructor(e: Employee) {
    this.fullName = e.FullName;
    this.code = e.Code;
    this.title = e.Title;
    this.organisationUnit = e.OrganisationUnit;
    this.location = e.Location;
    this.privateAddressZip = e.PrivateAddressZip;
    this.privateAddressCity = e.PrivateAddressCity;
  }
}
