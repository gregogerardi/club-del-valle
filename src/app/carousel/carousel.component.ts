import { BACKGROUND_CONTEXTS } from './constants';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent {
  @Input() set selectedBackgroundContext(selectedBackgroundContext){
    this._selectedBackgroundContext=selectedBackgroundContext
    this.imagePath = interval(5000).pipe(startWith(0),
    map((i) => `url('assets/background/${this._selectedBackgroundContext}/${(i % BACKGROUND_CONTEXTS[this._selectedBackgroundContext].numberOfImages) + 1}.jpg')`)
    );
  }
  private _selectedBackgroundContext: string = 'sede-social'
  public imagePath = interval(5000).pipe(startWith(0),
    map((i) => `url('assets/background/${this._selectedBackgroundContext}/${(i % BACKGROUND_CONTEXTS[this._selectedBackgroundContext].numberOfImages) + 1}.jpg')`)
  );
}
