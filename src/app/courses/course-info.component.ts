import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./Course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{

    courseId!:number;

    course!:Course;

    constructor(private activedRoute:ActivatedRoute, private courseService:CourseService){
    }

    ngOnInit(): void {
        this.courseId = +this.activedRoute.snapshot.paramMap.get('id')!

        this.courseService.retrieveById(this.courseId).subscribe(
            (data:Course[]) => this.course = data[0]
        );
    }
    
    save(){

        const response = this.courseService.save(this.course);

        if(response != null){
            response.subscribe()
        }
    }
}