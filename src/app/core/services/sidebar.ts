import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Sidebar {
  private collapsed = new BehaviorSubject<boolean>(false);
  sidebarCollapsed$ = this.collapsed.asObservable();

  toggleSidebar() {
    this.collapsed.next(!this.collapsed.value);
  }

  get isCollapsed(): boolean {
    return this.collapsed.value;
  }
}
