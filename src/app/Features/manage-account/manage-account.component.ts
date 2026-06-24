// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatIconModule } from '@angular/material/icon';
// 
// interface ActionItem {
  // id: 'change_tune' | 'unsubscribe' | 'plan';
  // label: string;
  // icon: string;
// }
// 
// @Component({
  // selector: 'app-manage-account',
  // standalone: true,
  // imports: [CommonModule, MatIconModule],
  // templateUrl: './manage-account.component.html',
  // styleUrls: ['./manage-account.component.scss']
// })
// export class ManageAccountComponent {
// 
  // ✅ popup control (important part)
  // showPopup = false;

  // optional: track selected action
  // selectedAction: ActionItem | null = null;
// 
  // actions: ActionItem[] = [
    // {
      // id: 'change_tune',
      // label: 'Change Tune',
      // icon: 'music_note'
    // },
    // {
      // id: 'unsubscribe',
      // label: 'Unsubscribe',
      // icon: 'cancel'
    // },
    // {
      // id: 'plan',
      // label: 'View Plan',
      // icon: 'subscriptions'
    // }
  // ];

  // ✅ when user clicks any option
  // handleAction(item: ActionItem) {
    // console.log('Clicked:', item);

    // this.selectedAction = item;
    // this.showPopup = true; // popup open kar diya
// 
    // switch (item.id) {
      // case 'change_tune':
        // this.changeTune();
        // break;

      // case 'unsubscribe':
        // this.unsubscribe();
        // break;

      // case 'plan':
        // this.viewPlan();
        // break;
    // }
  // }
  // ✅ close popup
  // closePopup() {
    // this.showPopup = false;
    // this.selectedAction = null;
  // }
// 
  // changeTune() {
    // console.log('Change Tune clicked');
  // }

  // unsubscribe() {
    // console.log('Unsubscribe clicked');
  // }

  // viewPlan() {
    // console.log('View Plan clicked');
  // }
// }