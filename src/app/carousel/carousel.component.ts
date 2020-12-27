import { BACKGROUND_CONTEXTS } from './constants';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent {

  injectLinkPrefetchIn4g(imageUrl) { 
    const connectionInformation = window.navigator['connection']
    if (!connectionInformation || connectionInformation.effectiveType === '4g') { 
      //generate link prefetch tag 
        const id = `linkToPrefetch${imageUrl}`
        if (!document.getElementById(id)){
          const linkTag = document.createElement('link'); 
          linkTag.rel = 'prefetch'; 
          linkTag.href = imageUrl; 
          linkTag.id = id; 
          linkTag.as = 'image'; 
          //inject tag in the head of the document 
          document.head.appendChild(linkTag); 
    } 
  }
}

  @Input() set selectedBackgroundContext(selectedBackgroundContext){
    this._selectedBackgroundContext=selectedBackgroundContext
    this.imagePath = interval(5000).pipe(startWith(0),
    tap(i=>this.injectLinkPrefetchIn4g(`assets/background/${this._selectedBackgroundContext}/${((i+1) % BACKGROUND_CONTEXTS[this._selectedBackgroundContext].numberOfImages) + 1}.jpg`)),
    map((i) => `url('./assets/background/${this._selectedBackgroundContext}/${(i % BACKGROUND_CONTEXTS[this._selectedBackgroundContext].numberOfImages) + 1}.jpg')`)
    );
  }
  private _selectedBackgroundContext: string = 'sede-social'
  public imagePath = interval(5000).pipe(startWith(0),
    map((i) => `url('./assets/background/${this._selectedBackgroundContext}/${(i % BACKGROUND_CONTEXTS[this._selectedBackgroundContext].numberOfImages) + 1}.jpg')`)
  );
}
