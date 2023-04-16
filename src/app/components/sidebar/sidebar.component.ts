import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public menus = [
    {
      name: 'Dashboard',
      icon: 'bx bxs-dashboard',
      redirectTo: 'dashboard'
    },
    {
      name: 'Jobs',
      icon: 'bx bxs-directions',
      redirectTo: 'jobs'
    },
    {
      name: 'Notification',
      icon: 'bx bxs-bell',
      redirectTo: 'notifications'
    }
  ]
  constructor(private router: Router) {}
  ngOnInit() {}
  navigate(redirectTo: string) {
    this.router.navigate([redirectTo]);
  }

}
