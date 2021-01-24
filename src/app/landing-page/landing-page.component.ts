import { Component, OnDestroy, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs/operators';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    if (this.visibleTipTimer){
      clearInterval(this.visibleTipTimer)
    }
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.visibleTip=true
      this.visibleTipTimer = setInterval(()=>this.visibleTip=!this.visibleTip, 500)
    }, 4000)
  }

  public visibleTip = false
  public visibleTipTimer = null

  preventDefault(event: Event, url){
    window.open(url, '_blank');
    event.stopPropagation()
    return false
  }
}
