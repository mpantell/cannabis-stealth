import { Injectable } from '@angular/core';
import { states, state } from 'src/models/states.model';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  stateList:state[];
  states = new states();
  constructor() { 
    this.stateList = this.states.stateList;
  }

  getRecreationalStates(): state[] {
    return this.stateList.filter(state => state.recreational==='Y');
  }

  getMedicalStates():state[] {
    return this.stateList.filter(state => state.medical==='Y');
  }
}
