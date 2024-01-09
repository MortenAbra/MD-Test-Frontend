import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';
import { Rocket } from '../../components/rockets/rockets.component';


@Injectable()
export class RocketService {
  constructor(private http: HttpClient) {}

  getRockets(): Observable<Rocket[]> {
    // Retrieves all rockets and uses tap to do a side action (save to localStorage for faster lookup)
    return this.http.get<Rocket[]>(`http://127.0.0.1:8080/v1/rockets`).pipe(
      tap(rockets => {
        localStorage.setItem('rockets', JSON.stringify(rockets));
      })
    );
  }

  getRocketById(id: string): Observable<Rocket | null> {
    // Try to get the rocket from localStorage first
    const rocket = this.getRocketFromLocalStorage(id);
    if (rocket) {
      return of(rocket); // Return the found rocket as an observable
    }

    // If not in localStorage, fetch from the server
    return this.http.get<Rocket | null>(`http://127.0.0.1:8080/v1/rockets/${id}`);
  }

  private getRocketFromLocalStorage(rocketId: string): Rocket | null {
    const rocketsData = localStorage.getItem('rockets');
    if (rocketsData) {
      const rockets: Rocket[] = JSON.parse(rocketsData);
      return rockets.find(r => r.id === rocketId) || null;
    }
    return null;
  }

  updateRocket(rocket: Rocket): Observable<Response> {
    // Retrieve the rockets data from localStorage
    const rocketsData = localStorage.getItem('rockets');
    if (rocketsData) {
      const rockets: Rocket[] = JSON.parse(rocketsData);
  
      // Find and update the rocket with the same id
      const updatedRockets = rockets.map(r => r.id === rocket.id ? rocket : r);
  
      // Save the updated rockets array back to localStorage
      localStorage.setItem('rockets', JSON.stringify(updatedRockets));
    }
  
    // Continue with the HTTP request to update the rocket on the server
    return this.http.post<Response>(`http://127.0.0.1:8080/v1/rockets/${rocket.id}`, rocket);
  }

  createRocket(rocket: {name: string, mission: string, speed: number }): Observable<HttpResponse<any>> {
    return this.http.post<any>(`http://127.0.0.1:8080/v1/rockets`, rocket, {
      observe: 'response'
    })
  }

  deleteRocket(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`http://127.0.0.1:8080/v1/rockets/${id}`, {
      observe: 'response'
    })
  }
  

}
