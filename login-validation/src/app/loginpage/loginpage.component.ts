import { Component,Input,ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: 'loginpage.component.html',
  styleUrls: ['loginpage.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})

export class LoginPageComponent {
  formdata;
  logindata;
  success=false;
  failed=false;
  @Input("jsonData") jsonData;

  ngOnInit() {
    this.formdata = new FormGroup({
      uname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(14)
      ])),
      pwd: new FormControl("", Validators.compose([
        Validators.required,
        this.passwordvalidation
      ]))
    })
  }
  passwordvalidation(data) {
    if (data.value.length <= 2) {
      return { "pwd": true };
    }
  }
  count:number;
  onClickSubmit(dataa) {
   
    
    for(let i=0;i < this.jsonData.length;i++){
      if(this.jsonData[i].name==dataa.uname && this.jsonData[i].pwd==dataa.pwd){
        this.count=1;
        break;
      }else{
        this.count++;
      }
    }
  if(this.count==1){
    this.logindata="Login success";
    this.success=true;
    this.failed=false;
     this.formdata = new FormGroup({
      uname: new FormControl(""),
      pwd: new FormControl("")
    });
  }else{
    this.logindata="Login Failed";
    this.success=false;
    this.failed=true;
  }
  }
}