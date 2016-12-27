/**
 * Created by appel on 12/21/2016.
 */
import {Component, Input} from "@angular/core";

@Component({
  selector: "connection-form",
  templateUrl: "./templates/connection-form.html",
  moduleId: module.id
})

export class ConnectionFormComponent{
  descPlaceHolder: string = "Add a Description";
  namePlaceHolder: string = "Add a Name";
  conDescLabel: string = "Description";
  conNameLabel: string = "Name";
  addHeader: string = "Add a Connection";
  editHeader: string = "Edit a Connection";
  saveBtn: string = "Save";
  resetBtn: string = "Reset";

  /*@Input()
  isAdd: boolean;

  constructor(add: boolean){
    this.isAdd = add;
  }*/

  conName: string;
  conDescript: string;

  connectionAdd(){

  }
}
