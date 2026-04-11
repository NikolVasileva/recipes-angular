import { Component, inject} from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  private notifService = inject(NotificationService);

  notification = this.notifService.notification;

}
