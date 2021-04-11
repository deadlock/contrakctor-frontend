declare type Phone = {
  ddd: number;
  number: number;
};

declare type Part = {
  name: string;
  secondName: string;
  email: string;
  document: string;
  phone: Phone;
};

declare type PartResponse = {
  id: string;
  name: string;
  secondName: string;
  email: string;
  document: string;
  phone: {
    ddd: string;
    number: string;
  };
};

declare type Contract = {
  title: string;
  startDate: string;
  expiration: string;
  file: string;
  parts?: Part[];
};

declare type ContractResponse = Contract & {
  id: string;
};

declare type AssociatePart = {
  contractTitle: string;
  partDocument: string;
};
