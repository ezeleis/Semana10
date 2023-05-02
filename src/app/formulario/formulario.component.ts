import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  userName: string = "";
  cpf: string = "";
  birthDate: string = "";
  password: string = "";

  onSubmit() {
    console.log("User Name: " + this.userName);
    console.log("CPF: " + this.cpf);
    console.log("Birth Date: " + this.birthDate);
    console.log("Password: " + this.password);
  }
}
