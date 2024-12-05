import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MarkdownComponent, AsyncPipe ],
  template: `
    <div class="read-the-docs">
      <h1>MarkDown:</h1>
      <div>
        <analog-markdown
          [content]="(mdContent | async)?.content"></analog-markdown>
      </div>
    </div>
  `,
  styles: `
    .read-the-docs > * {
      color: #fff;
    }
  `,
})
export default class HomeComponent {
  mdContent = injectContent({
    customFilename: 'test',
  })
}
