import { Injectable } from '@angular/core';
import { IEmployees} from './employee';


@Injectable()
export class ServiceService {

  getEmployees(): IEmployees[] {
    return [
      { code: 'Emp01', name: 'Mithun', gender: 'Male', salary: 99990 },
      { code: 'Emp02', name: 'Kumar', gender: 'Male', salary: 89090 },
      { code: 'Emp03', name: 'Lucky', gender: 'Male', salary: 79090 },
      { code: 'Emp04', name: 'Sha', gender: 'Female', salary: 99090 },
      { code: 'Emp05', name: 'Ashu', gender: 'Female', salary: 69090 }
    ];
  }

}
