import { Component, Input } from '@angular/core';
import { StatusResponseInterface } from 'src/app/Interfaces/status.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent {

  @Input() status: StatusResponseInterface = { name: '', count: 0,icon: '', color: ''};

  constructor(
    private router: Router
  ) {}
  navigateToProduct(status: string): void {
    this.router.navigate(['/jobs'], { queryParams: {status} })
  }
}
