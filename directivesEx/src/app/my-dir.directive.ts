import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  constructor(public el:ElementRef) { }

  @Input() var_one:string;
  @Input() var_two:string;

  changeColor(arg1){
    this.el.nativeElement.style.backgroundColor=arg1;
  }

  @HostListener("mouseenter") onmouseenter(){
    this.changeColor(this.var_one); 
  }

  @HostListener("mouseleave") onmouseleave(){
    this.changeColor(this.var_two);
  };

}
