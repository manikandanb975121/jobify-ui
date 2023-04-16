import { Component } from '@angular/core';
import { Observable, map, of } from 'rxjs';

// Services
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { Status, StatusResponseInterface } from 'src/app/Interfaces/status.interface';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent {

  public status$: Observable<StatusResponseInterface[]> = of([]);

  constructor(
    private dashboardServices: DashboardService
  ) {}
  ngOnInit(): void {
    this.status$ = this.dashboardServices.getProductStatus();
  }

}
