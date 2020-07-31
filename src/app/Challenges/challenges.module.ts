import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular/common'
import { ChallengesRoutingModule } from  "./challenges-routing.module";
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { TodayComponent } from './today/today.component';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ChallengesRoutingModule,
        SharedModule
    ],
    declarations: [
        CurrentChallengeComponent,
        ChallengeEditComponent,
        TodayComponent,
        ChallengeTabsComponent
    ],
})

export class ChallengesModule {}
