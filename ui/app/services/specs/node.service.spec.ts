/**
 * Created by appel on 12/16/2016.
 */
import {TestBed} from "@angular/core/testing";

import {NodeService} from "../node.service";
import {Node} from "../../models/node";

let nodServ: NodeService;

beforeEach(()=>{
  //TestBed.overrideModule(new { providers: [NodeService]});
  nodServ = new NodeService();
});

describe("GetNodes() returns a non-empty array of nodes", () => {

  it("GetNodes() call returns truthy", () => {
    var nods = nodServ.GetNodes();
    expect(nods).toBeTruthy()
  });

  it("GetNodes() is array", () => {
    var nods = nodServ.GetNodes();
    expect(Array.isArray(nods)).toBe(true)
  });

})

//describe("first test", () => {it("is true", () => expect(true).toBe(true))})
