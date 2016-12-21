/**
 * Created by appel on 12/20/2016.
 */
import {ComponentFixture, TestBed, async} from "@angular/core/testing";

import {AddNodeComponent} from "../add-node.component";
import {Node} from "../models/node";
import {NodeService} from "../services/node.service";

describe(
  "AddNodeComponent", () => {

    let compFix: ComponentFixture<AddNodeComponent>;
    const nodeServiceMock = new NodeService();

    beforeEach(async() => {
      TestBed.configureTestingModule({
        declarations:[AddNodeComponent],
        providers: [{provide: NodeService, useValue: nodeServiceMock}]
      }).compileComponents()
    });

    beforeEach(() => compFix = TestBed.createComponent(AddNodeComponent));

    it("Has Node prop", () => {expect(compFix.componentInstance.newNod ).toBeUndefined()});
  }
)
