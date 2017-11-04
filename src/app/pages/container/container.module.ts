import { NgModule } from '@angular/core';
import { routing } from './container.routing';
import { ContainerComponent } from './container.component';
import { MatTabsModule } from '@angular/material';


@NgModule({
    imports: [
        routing,
        MatTabsModule
    ],
    declarations: [
        ContainerComponent
    ]
})
export class ContainerModule { }
