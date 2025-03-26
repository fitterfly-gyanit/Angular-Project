import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';
import { NgFor } from '@angular/common';
import { UsersService } from './services/users.service';
import { user } from './interfaces/user';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  productList:any;

  userList:user[]=[];

  selectedUser:user|undefined;

  constructor(private productService: ProductsService, private userService: UsersService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe((data:any)=>{
      console.log(data.products);
      this.productList=data.products;
    });
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((data:user[])=>{
      this.userList=data;
    });
  }

  addUser(user:user){
    if(!this.selectedUser){
      this.userService.saveUsers(user).subscribe((data:user)=>{
        if(data){
          this.getUsers();
        }
      });
    }else{
      const userData={...user,id:this.selectedUser.id}
      this.userService.updateUser(userData).subscribe((data:user)=>{
        if(data){
          this.getUsers();
        }
      });
    }
  }

  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe((data:user)=>{
      console.log(data);
      if(data){
        this.getUsers();
      }
    });
  }

  selectUpdateUser(id:string){
    this.userService.getSelectedUser(id).subscribe((data:user)=>{
      console.log(data);
      this.selectedUser=data;
      // if(data){
      //   this.getUsers();
      // }
    })
  }


}
