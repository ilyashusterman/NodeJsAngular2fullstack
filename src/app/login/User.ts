/**
 * Created by Radu on 1/13/2017.
 */
export class User{

  email: string;
  password: string;
  permissions: {} ;
  constructor(){}
  toString(){
    return "User {'username':"+this.email+" 'password':"+this.password+" }";
  }

}
