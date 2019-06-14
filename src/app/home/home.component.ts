import { Component, OnInit } from '@angular/core';
import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Mastermind';
  startGameButton = 'Start game';

  constructor() { }

  ngOnInit() {
  }

  loaded(args: EventData) {
    let page = <Page>args.object;
    page.actionBarHidden = true
  }

  startGame() {
    console.log("startgame")
  }
}
