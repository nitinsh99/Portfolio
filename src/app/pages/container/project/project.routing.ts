import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProjectComponent } from './project.component';

export const routes: Routes = [
    {
        path: '',
        component: ProjectComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
