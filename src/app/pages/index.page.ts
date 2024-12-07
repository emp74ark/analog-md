import { Component } from '@angular/core';
import { TuiAppearance, TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiPin } from '@taiga-ui/kit';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TuiInputModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TuiCardLarge, TuiAppearance, TuiButton, TuiIcon, TuiInputModule, TuiPin],
  templateUrl: `./index.component.html`,
  styles: `:host {
    display: flex;
    gap: 40px;
    flex-direction: column;
    padding: 0 40px;
  }`,
})
export default class HomeComponent {}
