import { Component, EventEmitter, Input, Output } from '@angular/core';
import { state } from 'src/models/states.model';
import { StatesService } from 'src/app/services/states.service';


@Component({
  selector: 'app-state-selector',
  templateUrl: './state-selector.component.html',
  styleUrls: ['./state-selector.component.scss']
})
export class StateSelectorComponent {
  @Output() selectedStatesChange = new EventEmitter<string[]>();
  @Input() preselectedStates?: string[];

  constructor(private stateService:StatesService){}

  availableStates:string[] = [];
  selectedStates: string[] = [];

  ngOnInit():void {
    const recreationalStates:state[] = this.stateService.getRecreationalStates();
    this.availableStates = recreationalStates.map((state:state) => {
      return state.abbreviation;
    });
    if(this.preselectedStates){
      this.preselectedStates.map(state =>{
        this.addState(state);
      })
    }
  }

  addState(state: string) {
    const index = this.availableStates.indexOf(state);

    if (index !== -1) {
      this.availableStates.splice(index, 1);
      this.selectedStates.push(state);
      this.selectedStatesChange.emit(this.selectedStates);
    }
  }

  removeState(state: string) {
    const index = this.selectedStates.indexOf(state);

    if (index !== -1) {
      this.selectedStates.splice(index, 1);
      this.availableStates.push(state);
      this.selectedStatesChange.emit(this.selectedStates);
    }
  }
}
