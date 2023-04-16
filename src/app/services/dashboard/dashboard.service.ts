import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

// interface
import { Jobs, JobsResponseInterface, StatusInterface, StatusResponseInterface } from 'src/app/Interfaces/status.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URL = '../assets/data/mockData.json';
  
  constructor(private http: HttpClient) { }

  getProductStatus(): Observable<StatusResponseInterface[]> {
    return this.http.get<StatusInterface>(this.URL).pipe<StatusResponseInterface[]>(map((response) => {
     return  Object.keys(response.status).map((x) => {
        return { name: x, count: response.status[x].count, icon: response.status[x].icon, color: response.status[x].color}
      })
    }));
  }

  getProductsByStatus(status: string | null, search: string = '', startRow: number = 0, endRow: number = 10, rowPerPage: number = 10): Observable<{count: number, jobs: JobsResponseInterface[]}> {
    return this.http.get<StatusInterface>(this.URL).pipe<{count: number, jobs: JobsResponseInterface[]}>(map((response) => {
      return { count: response.jobs.filter(job => job.status === status).length, 
        jobs: response.jobs
      .filter(job => status ? job.status === status && this.jobSearch(job, search.toLowerCase()): job.status !== null && this.jobSearch(job, search))
      .slice(startRow, endRow)
      .map((job) => {
        return { sno: job.sno, id: job.id, jobID: job.JobID, jobTitle: job.jobTitle, company: job.company, applierName: job.applierName, status: job.status }
      })
      }
    }))
  }

  getStatus(): Observable<{name: string}[]> {
    return this.http.get<StatusInterface>(this.URL).pipe<{name: string,}[]>(map((response) => {
      return  Object.keys(response.status).map((x) => {
         return { name: x }
       })
    }));
  } 
  
  jobSearch(jobs: Jobs, search: string): boolean {
    if (search.length) {
      return jobs.applierAddress.toLowerCase().includes(search) 
      || jobs.applierName.toLowerCase().includes(search) 
      || jobs.company.toLowerCase().includes(search) 
      || jobs.jobTitle.toLowerCase().includes(search) 
      || jobs.status.toLowerCase().includes(search);
    } else {
      return true;
    }
  }


  getJobById(): Observable<Jobs[]> {
    return this.http.get<StatusInterface>(this.URL).pipe<Jobs[]>(map((response: StatusInterface) => {
      return response.jobs
    }));
  }
}
