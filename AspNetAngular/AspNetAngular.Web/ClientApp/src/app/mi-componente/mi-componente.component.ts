import { Component} from "@angular/core";
import {CONSTRUCTOR} from "@angular/compiler-cli/ngcc/src/host/esm2015_host";


@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html'
})
export class MiComponente{
  public tit = 'Meyquel Garcia title';
 public items = ['meyquel', 'yanet', 'Diana', 'Elisabet'];


 constructor(){
}

sayHellow(it){
   alert('Hola a todos' + it);
}

addPerson(it){
   this.items.push(it.value);
return false;
}


}
