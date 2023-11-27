import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AgGridModule} from "ag-grid-angular";
import {WelcomePageComponent} from "./components/welcome-page/components/welcome-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
    imports: [RouterOutlet, CommonModule, HttpClientModule, AgGridModule, WelcomePageComponent],
})

export class AppComponent {

  constructor() {
  }
}
