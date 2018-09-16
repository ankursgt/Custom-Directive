import { Directive, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGenerate]'
})
export class GenerateDirective {

  private hasView = false;

  constructor(private renderer: Renderer2) { }

  @Input() set appGenerate(inv: number){
    if(inv==1){
      var newElement = document.createElement("INPUT");
      newElement.setAttribute('id', "in");
      this.renderer.appendChild(document.body,newElement)
     
      
    }
    else if(inv==2){
      var newElement = document.createElement("SELECT");
      newElement.setAttribute('id', "se");
      var optionSelect=document.createElement("option");
      optionSelect.text="Select";
      newElement.appendChild(optionSelect)
      this.renderer.appendChild(document.body,newElement)
    }
    else {
      if(document.getElementById("in")){
        document.body.removeChild(document.getElementById("in"));
      }
      else if(document.getElementById("se")){
        document.body.removeChild(document.getElementById("se"));
      }
      else return;
      
      
    }
  }

}
