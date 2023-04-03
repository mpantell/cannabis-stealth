export interface stateResult{
    state: string;
    status: string;
    violations: violation[];
  
}
  
export interface violation {
    code: string;
    description: string;
}