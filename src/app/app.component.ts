import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    submitRealizado=false
   @ViewChild ('F')objetoForm:NgForm
   preguntaUsuario='Mascota'
   respuesta=''
   entrada=''
   genero=['Hombre','Mujer']

   Usuario={
     NombreUsuario:'',
     email:'',
     PalabraSecreta:'',
     respuesta:'',
     genero:''

     
   }

  SugerirNombreUsuario() {
    const sugerirNombre = 'thewillbor';
    
    // this.objetoForm.setValue({//Llenar el objeto del formulario por defecto
    //   DatosUsuario:{
    //     NombreUsuario:suggestedName,
    //     email:'willbor88@hotmail.com',
    //      },
    //      PalabraSecreta:'Mascota',
    //      respuesta:'',
         
    //      generos:'Hombre'
    // })
//Asignar los campos que dese por defecto
    this.objetoForm.form.patchValue({
      DatosUsuario:{
        NombreUsuario:sugerirNombre
        
      }
    })
  }

  Submit(form:NgForm){
    this.submitRealizado=true
    this.Usuario.NombreUsuario = this.objetoForm.value.DatosUsuario.NombreUsuario
    this.Usuario.email = this.objetoForm.form.value.DatosUsuario.email
    this.Usuario.PalabraSecreta = this.objetoForm.form.value.PalabraSecreta
    this.Usuario.respuesta = this.objetoForm.form.value.respuesta
    this.Usuario.genero = this.objetoForm.form.value.generos
    

    console.log(form)//Objeto con todo el estado del formulario
  //console.log(this.objetoForm)

  }
  
}
