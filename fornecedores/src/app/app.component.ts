import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fornecedores';
  form!: FormGroup;

constructor(  private fb: FormBuilder,) {
  this.form = this.fb.group({
    id: [null],
    name: [null],
    lastName: [null],
    nationality: [null],
    zipCode: [null],
    state: [null],
    city: [null],
    address: [null],
    email: [null],
    phone: [null],
    federalId: [null],
  });

}
  
  get formControls() {
    return this.form.controls;
}

}
