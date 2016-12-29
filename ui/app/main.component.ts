/**
 * Created by appel on 12/27/2016.
 */
import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "main-content",
  templateUrl: "./templates/main.html"
})

export class MainComponent{

  currentTab: Symbol;
  LIST_VIEW: Symbol = Symbol();
  MAP_VIEW: Symbol = Symbol();

  //labels
  mapLabelText: string = "Map";
  listLabelText: string =  "List";
}
