import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Los tipos de datos separados por componentes
  // value: string | undefined;
  formLogin : FormGroup = new FormGroup({});


// cuando se crea la instacncia de la clase.
// instanciar una clase a traves de un contructor
  constructor(
    private fb: FormBuilder,
    
    )
  {}
  // es un hook o función que se llama una vez que el componente 
  // ya está inicializado y ya podemos tener acceso al HTML.
  ngOnInit():void{
    this.formLogin = this.fb.group({

      username:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required],


      
    }
     
    );
  }

  login(){
    // validacion basica
    if(this.formLogin.invalid){
      this.formLogin.markAllAsTouched();
    }
    for( const key in this.formLogin.controls){
      this.formLogin.controls[key].markAsDirty();
    }
    return;
    // console.log(this.formLogin);
    
  }


}

