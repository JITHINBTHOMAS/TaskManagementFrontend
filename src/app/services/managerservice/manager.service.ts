import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../../models/manager';
import { Project } from '../../models/project';
import { Task } from '../../models/Task';
import { AuthService } from '../authenticationservice/authenticationservice.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  deleteEmployee(employeeid: any) {
    throw new Error('Method not implemented.');
  }
 

 



  private apiUrl = 'http://localhost:9093/api/v1/manager';



  constructor(private http: HttpClient,private authservice:AuthService) {}

  registerManager(managerData: Manager): Observable<Manager> {
    console.log(managerData)
    return this.http.post<Manager>(`${this.apiUrl}`+"/register", managerData);
  }


  
  getManagerDetails(managerId: string): Observable<Manager> {
    return this.http.get<Manager>(`${this.apiUrl}/viewManagerDetails/${managerId}`,{headers:this.authservice.getHeaders()});
  }





  // getTasksByProjectId(projectId: string) {
   
  //   return this.http.get<Task[]>(`${this.apiUrl1}/getTaskByProjectId/${projectId}`);
  // }

}


