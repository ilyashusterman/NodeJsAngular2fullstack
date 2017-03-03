/**
 * Created by Radu on 1/13/2017.
 */
export class User{

  id: string;
  username: string;
  password: string;
  permissions: string [] ;
  constructor( id, username,password,permissions){
    this.id=id;
    this.username=username;
    this.password=password;
    this.permissions=permissions;
  }
 // constructor(){}
  toString(){
    return "User {'username':"+this.username+" 'password':"+this.password+" id:"+this.id+" }";
  }

}
