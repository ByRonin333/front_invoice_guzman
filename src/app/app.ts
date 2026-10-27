import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Logger} from './components/logger/logger';

@Component({
  imports: [RouterOutlet, Logger],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('invoice');
}
