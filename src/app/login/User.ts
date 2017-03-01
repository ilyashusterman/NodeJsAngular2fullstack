/**
 * Created by Radu on 1/13/2017.
 */
export class User{

  id: String;
  username: string;
  password: string;
  permissions: string [] ;
  constructor(){}
  toString(){
    return "User {'username':"+this.username+" 'password':"+this.password+" id:"+this.id+" }";
  }

}
