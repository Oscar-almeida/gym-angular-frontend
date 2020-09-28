import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EjercicioLectura } from '@core/models/Ejercicio/EjercicioLectura';
import { fuseAnimations } from '@fuse/animations';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class EjercicioComponent implements OnInit {

  ejercicio: EjercicioLectura;
  pageType: string;
  ejercicioForm: FormGroup;

  private _unsubscribeAll: Subject<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
