import { FIRST_IMAGES } from './contants';
import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.injectLinkPrefetchIn4g();
  }

  injectLinkPrefetchIn4g() {
    const connectionInformation = window.navigator['connection'];
    //generate link prefetch tag
    const generateTags = () =>
      FIRST_IMAGES.forEach((imageUrl) => {
        const id = `linkToPrefetch${imageUrl}`;
        if (!document.getElementById(id)) {
          const linkTag = document.createElement('link');
          linkTag.rel = 'prefetch';
          linkTag.href = imageUrl;
          linkTag.id = id;
          linkTag.as = 'image';
          //inject tag in the head of the document
          document.head.appendChild(linkTag);
        }
      });
    if (connectionInformation.effectiveType === '4g') {
      generateTags();
    } else {
      setTimeout(generateTags, 5000);
    }
  }

  title = 'club-del-valle';
}
