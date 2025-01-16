import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-reponse.interface';
import { AppLocation } from '../types/location.interface';

@Injectable({
  providedIn: 'root'
})

export class GetUnitsService {
  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  private allUnitsSubject: BehaviorSubject<AppLocation[]> = new BehaviorSubject<AppLocation[]>([]);
  private allUnits$: Observable<AppLocation[]> = this.allUnitsSubject.asObservable();
  private filteredUnits: AppLocation[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<UnitsResponse>(this.apiUrl).subscribe(data => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    });
  }

  getAllUnits(): Observable<AppLocation[]> {
    return this.allUnits$;
  }

  getFilteredUnits() {
    return this.filteredUnits;
  }

  setFilteredUnits(value: AppLocation[]) {
    this.filteredUnits = value;
  }
}
