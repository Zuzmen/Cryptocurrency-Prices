import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {PeriodicElement} from "../cryptocurrency-prices/components/crypto-currency-prices.component";

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrl: './dialog-details.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatFormFieldModule, MatDialogContent, MatDialogActions, MatButtonModule, MatInputModule],
})
export class DialogDetailsComponent{
  public iconUrl: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
    public dialogRef: MatDialogRef<DialogDetailsComponent>,
  ) {
    this.iconUrl = "../../../assets/color/" + data.symbol.toLowerCase() + ".svg";
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}



