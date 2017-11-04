import { NgModule } from '@angular/core';
import { routing } from './blog.routing';
import { BlogComponent } from './blog.component';


@NgModule({
    imports: [
        routing
    ],
    declarations: [
        BlogComponent
    ]
})
export class BlogModule { }