/**
 * Created by Radu on 1/13/2017.
 */
export class User{

  id: string;
  name: string;
  username: string;
  password: string;
  permissions: string [] ;
  constructor( id,name, username,password,permissions){
    this.id=id;
    this.name=name;
    this.username=username;
    this.password=password;
    this.permissions=permissions;
  }

  toString(){
    return "User {'name:':"+this.name+"'username':"+this.username+" 'password':"+this.password+" id:"+this.id+" }";
  }

}
