import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeContentService {

  private stateResults = [
    { state: 'IL', status: 'Compliant', violations: [] },
    { state: 'PA', status: 'Compliant', violations: [] },
    { state: 'NV', status: 'Compliant', violations: [] },
    { state: 'CA', status: 'Compliant', violations: [] },
    { state: 'MI', status: 'Compliant', violations: [] }
  ];

  private stateResults2 = [
    { state: 'IL', status: 'Compliant', violations: [] },
    { state: 'PA', status: 'Violation', violations: [{ code: 'PA-8.01.02', description: 'The word \'high\' is not permitted in PA communications per Provision 8.01.02' }] },
    { state: 'NV', status: 'Compliant', violations: [] },
    { state: 'CA', status: 'Compliant', violations: [] },
    { state: 'MI', status: 'Compliant', violations: [] }
  ];

  constructor() { }

  getStateResults(): { state: string, status: string, violations: { code: string, description: string }[] }[] {
    return this.stateResults;
  } 


  analyzeContent(content:string): { state: string, status: string, violations: { code: string, description: string }[] }[]{
    if(content.toLowerCase().includes('high')){
      console.log('PA violation');
      return(this.stateResults2);
    }else{
      return(this.stateResults);
    }
  }
}
