import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from 'src/app/Interfaces/status.interface';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {
  public jobId: string | null =  '';
  public job: Jobs | undefined = undefined;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id');
    this.dashboardService.getJobById().subscribe((response) => {
      this.job = response.find((job) => job.id === this.jobId);
    });
  }
}
