import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('animateDestroy', [
      state('void', style({ transform: 'translateY(100%)' })),
      transition('* => void', animate('500ms ease-in-out')),
    ]),
  ],
})
export class LoadingComponent {
  @Input() message: string = 'LOADING';
  @Input() destroy$ = new Observable<any>();
  @Input() bootAnimation = true;
}
