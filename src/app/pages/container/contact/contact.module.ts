import { NgModule } from '@angular/core';
import { routing } from './contact.routing';
import { ContactComponent } from './contact.component';


@NgModule({
    imports: [
        routing
    ],
    declarations: [
        ContactComponent
    ]
})
export class ContactModule { }