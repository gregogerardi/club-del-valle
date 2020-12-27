import { FIRST_IMAGES } from './contants';
import { Component, OnInit } from '@angular/core';

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
    if (
      !connectionInformation ||
      connectionInformation.effectiveType === '4g'
    ) {
      //generate link prefetch tag
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
    }
  }

  title = 'club-del-valle';
}
