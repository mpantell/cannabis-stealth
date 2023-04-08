import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {

  constructor() { }

  removeFirebase(errorMessage:string){
    return errorMessage.replace("Firebase: ", "");
  }

}
