import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { Job } from '../Models/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private apiUrl = '';

  constructor(private http: HttpClient) { }

  getAllJobs(filed:string): Observable<Job[]> {

    this.apiUrl = `https://localhost:7178/api/Jobs/filed?filed=${filed}`;

    return this.http.get<Job[]>(this.apiUrl);
  }
}
