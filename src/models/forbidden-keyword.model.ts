export interface ForbiddenKeyword {
  id: string;
  keyword: string;
  category: string;
  states: string[];
  provisions?: string[];
}

export class ForbiddenKeywordHeaderKey {
  id:string = "id";
  keyword:string = "Keyword";
  category:string = "Category";
  states:string = "State(s)";
  provisions:string = "Provisions"
}