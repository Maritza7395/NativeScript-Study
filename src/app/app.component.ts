import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    enteredChallenge = '';

    onChallengeInput(challengeDescription: string){
        this.enteredChallenge = challengeDescription
    }
 }
