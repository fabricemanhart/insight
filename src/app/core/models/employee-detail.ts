interface EmployeeDetail {
  BusinessPhone: string;
  Citizenship: string;
  Code: string;
  // Company:  {Id: 1, Name: "Zühlke Switzerland", Code: "ZCH"}
  Currency: string;
  DateOfBirth: Date;
  DdSystems: boolean;
  Description: string;
  Duration: string;
  EntryDate: Date;
  ExternalRate: number;
  FirstName: string;
  Freelancer: boolean;
  FullName: string;
  Graduation: string;
  Holidays: number;
  HomePhone: string;
  Id: number;
  InternalRate: number;
  IsManagement: boolean;
  IsOwner: boolean;
  JobProfile: JobProfile;
  LastName: string;
  LastUpdated: string;
  Location: string;
  Mail: string;
  MobilePhone: string;
  Office: Office;
  // OrganisationUnits  :  [{Id: 6480, Name: "ZCH", FullName: "ZCH ()", Type: 1,…},…]
  Overtime: number;
  Percentage: number;
  PrivateAddress: PrivateAddress;
  ProfileLink: string;
  // Profiles:  [{Name: "Leder Markus english",…},…]
  Qualification: Qualification;
  StartsIn: string;
  Superior: string;
  SuperiorCode: string;
  // Team:  {Id: 6600, Name: "SEC", Type: 0, Participants: 0, TypeText: "Job Profile"}
  TeamLeader: boolean;
  Title: string;
  VertecId: number;
  WorkHoursPerDay: number;
  LinkedInProfileUrl: string;
  XingProfileUrl: string;
  TwitterProfileUrl: string;
  GitHubUrl: string;
  BitBucketUrl: string;
  TwitterUrl: string;
  YammerUrl: string;
  StackoverflowProfileUrl: string;
}
