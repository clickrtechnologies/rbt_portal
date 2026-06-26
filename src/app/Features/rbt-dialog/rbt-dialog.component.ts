import { Component, Inject, OnDestroy } from '@angular/core';
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
export class RbtDialogComponent implements OnDestroy {

  selectedPack: string = '';

  constructor(
    private dialogRef: MatDialogRef<RbtDialogComponent>,
    private rbtService: RbtService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close() {
    this.cleanupDialog();
    this.dialogRef.close();
  }

  activate() {
    if (!this.selectedPack) {
      alert('Please select subscription pack');
      return;
    }

    this.rbtService.setRbt({
      name: this.data.name,
      plan: this.selectedPack,
      validity: '30 Days'
    });

    alert('RBT Activated Successfully');

    this.cleanupDialog();  
    this.dialogRef.close({ success: true });
  }

  ngOnDestroy(): void {
    this.cleanupDialog();
  }
 
  cleanupDialog() {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    document.documentElement.style.overflow = 'auto';

    document.body.classList.remove('cdk-global-scrollblock');

    const overlays = document.querySelectorAll('.cdk-overlay-backdrop');
    overlays.forEach((overlay: any) => overlay.remove());
  }
}