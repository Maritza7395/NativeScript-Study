import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular/router';
import { Routes } from '@angular/router'
import { AuthComponent } from './auth/auth.component'


const routes: Routes = [
    { path: '', component: AuthComponent },
    // { path: 'edit-challenge', component: challengeEditComponent, data:{ anyData: 'anyValue' } },
    {
        path: 'challenges',
        loadChildren: () =>
        import('./challenges/challenges.module').then(m => m.ChallengesModule)
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule{}
