interface Capability {
  CapabilityGroup: string;
  CommittedInvestmentDays: number;
  CommittedPercentage: number;
  Depth: number;
  Description: string;
  Id: number;
  Investment: number;
  InvestmentText: string;
  IsVisible: boolean;
  Name: string;
  // Owners: [{VertecId: 0, Code: "alb", FirstName: "Alex", LastName: "Bögli", FullName: "Alex Bögli",…},…]
  PlannedInvestmentDays: number;
  ShortDescription: string;
  ShowRadar: boolean;
  SortOrder: number;
}
