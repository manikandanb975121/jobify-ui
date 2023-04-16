import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Interface
import { JobsResponseInterface } from 'src/app/Interfaces/status.interface';

// Services
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public jobs: JobsResponseInterface[] = [];
  public jobsColumns: string[] = [];
  public status: { name: string, value: string }[]  = [];
  public selectedStatus: string = '';
  public searchText: string = '';
  public pages: number[] = [];
  public currentPage: number = 1;
  public count: number = 0;

  constructor(
    private dashboardServices: DashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.queryParamMap
    .subscribe((params) => {
      this.getProducts(params.get('status'))
      this.getStatus(); 
      this.selectedStatus = params.get('status') || '';
    });
  }

  getProducts(status: string| null, search = '', startRow=0, endRow=10) {
    this.dashboardServices.getProductsByStatus(status, search, startRow, endRow).subscribe((response) => {
      this.jobs = response.jobs;
      this.count = Math.ceil(response.count/10);
      this.pages = Array(Math.ceil(response.count/10)).fill([]).map((x,i) => i+1);
      this.jobsColumns = Object.keys(response.jobs[0]).filter(x => x !== 'id');
    })
  }

  getStatus(): void {
    this.dashboardServices.getStatus().subscribe((status) => {
      this.status = status.map((value) => { return { name: value.name.split('_').join(' ').toUpperCase(), value: value.name }});
    })
  }

  onChange(event: Event): void {
    this.selectedStatus = (event.target as HTMLInputElement).value;
    this.currentPage = 1;
    this.getProducts((event.target as HTMLInputElement).value);
  }

  searchOnChange(event: string): void {
    this.getProducts(this.selectedStatus, event);
  }

  navigate(page: number, direction: string | null): void {
    if (direction === 'forward') {
      page = page + 1
    } else if (direction === 'back') {
      page = page - 1
    }

    if (page <= this.count && page > 0) {
      this.currentPage = page;
      const startRow = (page - 1) * 10;
      const endRow = page * 10;
      this.getProducts(this.selectedStatus, '', startRow, endRow)
    } else {
      return;
    }
  }
  navigateToJobDetails(id: string): void {
    this.router.navigate(['jobs', id]);
  }
}
