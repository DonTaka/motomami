import { Component, OnInit } from '@angular/core';
import { StorageService } from '../servicios/storage.service';
import { AtenticacionService } from '../servicios/autenticacion.service';
@Component({
  selector: 'app-tom-viaje',
  templateUrl: './tom-viaje.page.html',
  styleUrls: ['./tom-viaje.page.scss'],
})
export class TomViajePage implements OnInit {

  constructor(private storage: StorageService, private autenticacion: AtenticacionService) { }
  mostrarDestinos: { [key: string]: any } = [];
  ngOnInit() {
    this.mostrarDestinos = this.storage.mostrarDestinos();
    console.log(this.mostrarDestinos);
  }
}

  
  
  
  


