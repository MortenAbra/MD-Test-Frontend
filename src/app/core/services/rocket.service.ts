import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rocket } from '../../components/rockets/rockets.component';


@Injectable()
export class RocketService {
  constructor(private http: HttpClient) {}

  getRockets(): Observable<Rocket[]> {
    return this.http.get<Rocket[]>(`http://127.0.0.1:8080/v1/rockets`);
  }

}
