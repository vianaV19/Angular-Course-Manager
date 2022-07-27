import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "../error-404/error-404.component";
import { NavBarComponent } from "./component/navbar/navbar.component";


@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ], exports: [
        NavBarComponent
    ], imports: [
        RouterModule
    ]
})

export class CoreModule {}