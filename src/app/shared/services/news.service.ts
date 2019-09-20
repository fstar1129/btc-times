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
      .set('featured', 'true')
      .set('_limit', '1');
    
    return this.apiService.get('news', params)
      .pipe();
  }

  getFeaturedNewsItems(): Observable<[Object]> {
    const params = new HttpParams()
      .set('featured', 'true')
      .set('id_nin', '${featured_id}');
    
    return this.apiService.get('news', params)
      .pipe();
  }

  getLatestNews(): Observable<[Object]> {
    const params = new HttpParams()
      .set('featured', 'false')
      .set('_limit', '9');
    
    return this.apiService.get('news', params)
      .pipe();
  }

  getPressReleases(): Observable<[Object]> {
    return this.apiService.get('pressreleases')
      .pipe();
  }
}
