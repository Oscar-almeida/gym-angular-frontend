import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Rutina } from '@core/models';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class RutinasComponent implements OnInit {

  rutinas: Rutina

  constructor() { }

  ngOnInit(): void {
  }

}
