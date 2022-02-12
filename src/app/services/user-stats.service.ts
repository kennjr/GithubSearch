import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  constructor() { }

  promise:Promise<any> = new Promise(function(resolve, reject) { 
    const x = "Favour"; 
    const y = "Vivian"
    // if(x == y) { 
    //   resolve(); 
    // } else { 
    //   reject(); 
    // } 
    }). 
    then(function () { 
      console.log('Success, You are Favour'); 
    }). 
    catch(function () { 
      console.log('Some error has occured'); 
    });
}
