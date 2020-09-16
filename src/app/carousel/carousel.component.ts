import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarouselComponent {
  public imagePath = interval(5000).pipe(startWith(0),
    map((i) => `url('assets/background/random/${(i % 21) + 1}_foto_H.jpg')`)
  );
}
