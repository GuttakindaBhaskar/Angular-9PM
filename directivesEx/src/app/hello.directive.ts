import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hello]'
})
export class HelloDirective {

  constructor(public templteRef:TemplateRef<any>,
              public _viewContainerRef:ViewContainerRef) { }

    @Input() set  hello(arg1:boolean){
        if(arg1){
          this._viewContainerRef.createEmbeddedView(this.templteRef);
        }else{
          this._viewContainerRef.clear();
        }
    };

}
