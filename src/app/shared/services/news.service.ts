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
    // const params = new HttpParams()
    //   .set('_limit', '100');
    
    return this.apiService.get('news')
      .pipe();
  }

  getPressReleases(): Observable<[Object]> {
    const params = new HttpParams()
      .set('_limit', '7');

    return this.apiService.get('pressreleases', params)
      .pipe();
  }
}
