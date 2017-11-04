import { NgModule } from '@angular/core';
import { routing } from './project.routing';
import { ProjectComponent } from './project.component';


@NgModule({
    imports: [
        routing
    ],
    declarations: [
        ProjectComponent
    ]
})
export class ProjectModule { }