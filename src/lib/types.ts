export interface AgreementClause {
  id: string;
  number: string;
  text: string;
}

export interface AgreementSigneeField {
  label: string;
  placeholder?: string;
}

export interface AgreementSignee {
  role: string;
  fields: AgreementSigneeField[];
}

export interface AgreementSection {
  id: string;
  number: number;
  title: string;
  contentLead?: string;
  clauses?: AgreementClause[];
  bullets?: string[];
  notes?: string[];
  signees?: AgreementSignee[];
}
