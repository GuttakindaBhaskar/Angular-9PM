import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector:"child",
    templateUrl:"./child.component.html"
})
export class childComponent{
    @Input() p_id;
    @Input() p_name;
    @Input() p_cost;

    @Output() my_var:EventEmitter<any> = new EventEmitter();

    clickMe():any{
        this.my_var.emit(`${this.p_id}....${this.p_name}....${this.p_cost}`);
    }
};