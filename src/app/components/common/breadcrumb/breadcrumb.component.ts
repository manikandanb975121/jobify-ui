import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  public routes: {path: string | undefined }[] = []
  public mainRoute: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.route.url.subscribe((response) => { 
      this.mainRoute = response[0].path;
      this.routes = response.map((info) => {
        return {path: info.path}
      })
      if (this.routes.length == 2) {
        this.dashboardService.getJobById().subscribe((jobResponse) => {
          const data = jobResponse.find((job) => job.id === this.routes[1].path);
          this.routes[1].path = data?.jobTitle
        })
      }
    });
  }
}
