import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthenticatedGuard} from './guards/authenticated.guard';
import {NotAuthenticatedGuard} from './guards/not-authenticated.guard';

const routes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module')
            .then(m => m.AuthPageModule),
        canActivate: [AuthenticatedGuard]
    },
    {
        path: 'public',
        loadChildren: () => import('./pages/public/public.module')
            .then(m => m.PublicPageModule),
        canActivate: [NotAuthenticatedGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
