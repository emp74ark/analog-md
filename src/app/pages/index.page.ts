import { Component, signal } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MarkdownComponent ],
  template: `
    <div class="read-the-docs">
      <h1>MarkDown:</h1>
      <div>
        <analog-markdown [content]="mdContent()"></analog-markdown>
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
  constructor() {
    injectContent({
      customFilename: 'test',
    })
    .pipe(
      tap((data) => {
        console.log(data.content);
        if (typeof data?.content === 'string') {
          this.mdContent.set(data.content)
        }
      }),
    )
    .subscribe();
  }
  mdContent = signal<string>('');
}
