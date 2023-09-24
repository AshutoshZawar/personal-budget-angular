import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = [];
  private dataLoaded = false;

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any[]> {
    if (this.dataLoaded) {
      return new Observable<any[]>(observer => {
        observer.next(this.data);
        observer.complete();
      });
    } else {
      return this.http.get<any[]>('http://localhost:3000/data')
        .pipe(
          tap(data => {
            this.data = data;
            this.dataLoaded = true;
          })
        );
    }
  }

  getData(): any[] {
    return this.data;
  }

  setData(data: any[]): void {
    this.data = data;
  }
}
function tap(arg0: (data: any) => void): import("rxjs").OperatorFunction<any[], any[]> {
  throw new Error('Function not implemented.');
}

