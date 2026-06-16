import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RbtService } from '../../services/rbt.service';

@Component({
  selector: 'app-rbt-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rbt-dialog.component.html',
  styleUrls: ['./rbt-dialog.component.scss']
})
export class RbtDialogComponent {

  selectedPack: string = '';

  constructor(
    private dialogRef: MatDialogRef<RbtDialogComponent>,
    private rbtService: RbtService,   // ✅ ADD THIS
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
close() {
  this.dialogRef.close();
}


  activate() {

    if (!this.selectedPack) {
      alert('Please select subscription pack');
      return;
    }

    // ✅ send data to music page
    this.rbtService.setRbt({
      name: this.data.name,
      plan: this.selectedPack,
      validity: '30 Days'
    });

    alert('RBT Activated Successfully');

    this.dialogRef.close(true);
  
  }
}