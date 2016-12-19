/**
 * Created by appel on 12/13/2016.
 */

export class Node implements Nod{

  // Name: string;
  // Description: string

  constructor(public Name: string, public Description: string){
  }
 }

interface Nod{
  Name: string;
  Description: string

}
