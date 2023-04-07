import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Moment } from 'src/app/interfaces/Moment'
import { environment } from 'src/enviroments/environment'
import { Response } from 'src/app/interfaces/Response'

@Injectable({
  providedIn: 'root'
})
export class MomentService {
	private baseApiUrl = environment.baseApiUrl
	private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>> {
		return this.http.get<Response<Moment[]>>(this.apiUrl)
  }

  getMoment(id: number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Response<Moment>>(url)
  }

  createMoment(formData: FormData): Observable<FormData> {
  	return this.http.post<FormData>(this.apiUrl, formData)
  }

  updateMoment(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`
    return this.http.put<FormData>(url, formData)
  }

  deleteMoment(id: number) {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url)
  }
}
