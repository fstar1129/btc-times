import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
      private apiService: ApiService
  ) { }

  getFeaturedNews(): Observable<[Object]> {
    const params = new HttpParams()
      .set('featured', 'true');
    return this.apiService.get('news', params)
      .pipe();
  }
}
