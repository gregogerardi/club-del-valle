import { Component } from '@angular/core';

@Component({
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.scss']
})
export class SociosComponent {
  public sendContactEmail(){
    window.open('mailto:delvallenecochea@hotmail.com?subject=Quiero%20ser%20socio&body=Apellido%20y%20Nombre%3A%0D%0AFecha%20de%20Nacimiento%20(dd%2Fmm%2Faaaa)%3A%0D%0ATipo%20de%20documento%3A%0D%0AN%C3%BAmero%20de%20documento%3A%0D%0ANumero%20de%20telefono%2Fcelular%3A%0D%0ADomicilio%20(calle%20-%20numero)%3A%0D%0ACiudad%3A', '_blank');
  }
}
