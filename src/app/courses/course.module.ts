import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../shared/pipe/replacePipe/replace.pipe";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./courses-list.component";
import { StarModule } from "../shared/component/star/start.module";
import { AppPipeModule } from "../shared/pipe/replacePipe/app-pipe.module";

@NgModule({
    declarations: [
        CourseInfoComponent,
        CourseListComponent,
    ], imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            },
            {
                path: 'courses', component: CourseListComponent
            },
        ])
    ]
})

export class CourseModule {

}