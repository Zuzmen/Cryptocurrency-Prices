import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MailLogoComponent} from "../../main-logo/mail-logo.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {TopNavComponent} from "../../nav/components/top-nav.component";

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MailLogoComponent,
    RouterOutlet,
    RouterLink,
    TopNavComponent,
  ]
})
export class WelcomePageComponent {

  constructor() {}
}
