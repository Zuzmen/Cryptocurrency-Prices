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
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";

@Component({
	selector: 'tcp-top-nav',
	templateUrl: './top-nav.component.html',
	styleUrls: ['./top-nav.component.scss'],
  standalone: true,
	changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MailLogoComponent,
    RouterOutlet,
    RouterLink,
    MatMenuModule,
  ],
	animations: [],
})
export class TopNavComponent {

	constructor() {}
}
