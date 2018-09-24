import { Directive, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGenerate]'
})
export class GenerateDirective {

  constructor(private renderer: Renderer2) { }

  @Input() set appGenerate(inv){
    switch(parseInt(inv)){
      case 1:
        var newElement = document.createElement("INPUT");
        newElement.setAttribute('id', "in");
        this.renderer.appendChild(document.body,newElement)
        break;
        
      case 2:
        var newElement = document.createElement("SELECT");
        newElement.setAttribute('id', "se");
        var optionSelect=document.createElement("option");
        optionSelect.text="Select";
        newElement.appendChild(optionSelect)
        this.renderer.appendChild(document.body,newElement);
        break;
        
      default:
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
