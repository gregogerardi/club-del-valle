import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, TemplateRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public selectedMenu: string = 'sede-social';
  public isHandset = false
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(),
      tap(isHandset=>this.isHandset=isHandset)
    );
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private activatedRoute:ActivatedRoute) {}
  public selectMenu(selectedMenu: string, drawer: MatSidenav): void {
    this.selectedMenu = selectedMenu;
    this.isHandset && drawer.toggle()
    this.router.navigate([`pages/${selectedMenu}`]);
  }
}
