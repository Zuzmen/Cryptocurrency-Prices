import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mail-logo',
  templateUrl: './mail-logo.component.html',
  styleUrl: './mail-logo.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})

export class MailLogoComponent {

}
