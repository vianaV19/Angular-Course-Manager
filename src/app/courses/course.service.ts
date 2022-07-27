import { Course } from './Course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class CourseService {

    BASE_URL: string = 'http://localhost:8080/api/courses'

    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Course[]> {
        const url = this.BASE_URL + '/list';

        return this.httpClient.get<Course[]>(url)
    }

    retrieveById(id: number): Observable<Course[]> {
        const url = this.BASE_URL + '/list/' + id

        return this.httpClient.get<Course[]>(url);
    }

    deleteById(id: number): Observable<unknown> {
        const url = `${this.BASE_URL}/delete/${id}`

        return this.httpClient.delete(url);
    }

    save(course: Course) {

       
        if (course) {

            const url = `${this.BASE_URL}/update`;

            return this.httpClient.put(url, course);
        }

        return null;
    }

}
