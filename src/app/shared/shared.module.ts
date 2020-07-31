import { NgModule } from "@angular/core";
import { ActionBarComponent } from "./ui/action-bar/action-bar.component";
import { NativeScriptCommonModule } from "@nativescript/angular/common";
import { NativeScriptRouterModule } from "@nativescript/angular/router"

@NgModule({
    declarations: [
        ActionBarComponent
    ],
    exports: [
        ActionBarComponent
    ],
    imports:[
        NativeScriptCommonModule,
        NativeScriptRouterModule
    ]
})

export class SharedModule {}
