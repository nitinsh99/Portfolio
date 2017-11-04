import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ContainerComponent } from './container.component';

export const routes: Routes = [
    {
        path: 'container',
        component: ContainerComponent,
        children: [
            { path: '', redirectTo: 'about', pathMatch: 'full' },
            { path: 'about', loadChildren: 'app/pages/container/about/about.module#AboutModule' },
            { path: 'project', loadChildren: 'app/pages/container/project/project.module#ProjectModule' },
            { path: 'blog', loadChildren: 'app/pages/container/blog/blog.module#BlogModule' },
            { path: 'contact', loadChildren: 'app/pages/container/contact/contact.module#ContactModule' }
        ]
    }
]


export const routing: ModuleWithProviders = RouterModule.forChild(routes);