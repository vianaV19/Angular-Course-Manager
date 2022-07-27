import { Component, OnInit } from '@angular/core';
import { Course } from './Course';
import { CourseService } from './course.service';


@Component({
    // selector: 'app-course-list',
    templateUrl: './courses-list.component.html'
})

export class CourseListComponent implements OnInit {

    _courses: Course[] = [];

    filteredCourses: Course[] = [];

    _filterBy!: string;

    constructor(private courseService: CourseService) { }

    //retrieveAll Data
    ngOnInit(): void {
        this.retrieveAll();

        this.filteredCourses = this._courses;
    }

    //retrieve database informations 
    async retrieveAll() {
        this.courseService.retrieveAll().subscribe(
            (data:Course[]) =>{ 
                this._courses = data
                this.filteredCourses = this._courses
                console.log(this.filteredCourses)
            }
        );
    }

    //delete information from bd
    async deleteById(id:number){
        await this.courseService.deleteById(id).subscribe()

        await this.retrieveAll()
    }
    
    set filter(value: string) {

        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().includes(this._filterBy.toLowerCase()))
    }

    get filter() {
        return this._filterBy;
    }


}