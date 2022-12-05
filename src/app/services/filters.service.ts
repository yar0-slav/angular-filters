import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class FiltersService {

  readonly ROOT_URL = 'https://br-fe-assignment.github.io/customer-events/events.json';

  constructor(private http: HttpClient) { }

  getFiltersData() {
    return this.http.get(this.ROOT_URL);
  }

  // getFiltersData() {
  //   this.data = this.http
  //   .get<any[]>(this.ROOT_URL)
  //   .map(data => data.json());
  // }
}
