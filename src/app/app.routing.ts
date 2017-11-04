import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


export const routes: Routes = [
    { path: '', redirectTo: 'container', pathMatch: 'full' },
    { path: '**', redirectTo: 'container' }
]


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });