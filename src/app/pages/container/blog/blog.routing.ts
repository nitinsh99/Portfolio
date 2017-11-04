import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BlogComponent } from './blog.component';

export const routes: Routes = [
    {
        path: '',
        component: BlogComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
