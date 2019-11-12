import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccessPermissionService {
  EndPoint = environment.API_ENDPOINT + `accesspermissions/`;
  UserEndPoint = environment.API_ENDPOINT + `userpermissions/`;

  constructor(private http: HttpClient) {}

  getAll(
    option: {
      name?: string;
      user_category_id?: string;
      searchTerm?: String;
      limit?: any;
      page?: any;
    } = {}
  ) {
    return this.http.get(
      `${this.EndPoint}?search_term=${option.searchTerm ||
        ''}&limit=${option.limit ||
        ''}&user_category_id=${option.user_category_id ||
        ''}&page=${option.page || ''}`
    );
  }

  getAllByUserCategory(userCategoryId: any, userId: any) {
    return this.http.get(
      `${
        this.EndPoint
      }?user_category_id=${userCategoryId}&user_id=${userId}&limit=${'all'}`
    );
  }

  getById(id: Number) {
    return this.http.get(`${this.EndPoint}${id}`);
  }

  create(payload: any): Observable<any> {
    return this.http.post(this.EndPoint, payload);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(this.EndPoint + id);
  }
  update(id: Number, payload: any): Observable<any> {
    return this.http.put(this.EndPoint + id, payload);
  }
}
