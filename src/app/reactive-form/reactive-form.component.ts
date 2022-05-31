import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm: any;
  postData:any = {};
  
  constructor(private formBuilder: FormBuilder, private usersServices: UsersService ) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      contact: ['',Validators.required],
      status: ['',Validators.required],
      password: ['',Validators.required],
      dateCreated: [''],
      DateModified: [''],
      userId: [''],
      pincode: ['',Validators.required],
      id: [''],
      description: ['',Validators.required],
      taskStatus: ['',Validators.required],
      taskcreatedDate: [''],
      datecreated: [''],
      datemodified: [''],
    });

  }

   

  // ---------------------------------------post --------template form data ----------------------------------------  
submitForm(form : NgForm){ 
  let data = form.value
  console.log("form",form);

  console.log("All data",data);


  let userData= {     
    
    username: data.username,
    email: data.email,
    contact: data.contact,
    status: data.status,
    password:data.password,
    pincode:data.pincode,
    task:[{
      
      description:data.description,
      status:data.taskStatus   
  }]

  };

  console.log("userData",userData);


  this.usersServices.postData('/api/v2/adduser', userData).subscribe(

    (res:any)=>{
      console.log(res);
      if(res.success === true){

        this.ResetForm(form)
      }
    },
    (err: any)=>{
      console.log(err);
    }
  )
};


ResetForm(form : any){
form.reset();
form.submitted = false
}

}
