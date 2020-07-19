import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { CurrentChallengeComponent } from "./Challenges/current-challenge/current-challenge.component"
import { AppComponent } from "./app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "@nativescript/angular/forms";
import { StackComponent } from './layouts/stack/stack.component';
import { FlexboxComponent } from './layouts/flexbox/flexbox.component'

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        StackComponent,
        FlexboxComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
