import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

// example: form
@Component({
  selector: "app-tailwind-normal-form",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="grid gap-4 px-4 max-w-[400px] mx-auto">
    <!-- username --> 
    <input  
        type="text" 
        minlength="6" 
        required 
        name="username"  
        #usernameRef="ngModel" 
        placeholder="Enter valid username"
        [(ngModel)]="exampleForm.username"
      />

    <!-- username -->
    <input 
      type="email" 
      name="email" 
      required 
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      #emailRef="ngModel" 
      placeholder="Enter valid email"
      [(ngModel)]="exampleForm.email"   
    />

    <!-- requiree -->
    @if(!usernameRef?.valid && 
          usernameRef?.touched && 
          usernameRef?.errors?.['required']){
      <div  class="bg-red-500 text-white" >
        Required Username
      </div>
    }

    <!-- too short username -->
    @if(!usernameRef?.valid && 
        usernameRef?.touched && 
        usernameRef?.errors?.['minlength']){
      <div  class="bg-red-500 text-white">
        Username too short
      </div>
    } 

    <!-- too short username -->
    @if(!emailRef?.valid && 
        emailRef?.touched && 
        emailRef?.errors?.['pattern']){
      <div  class="bg-red-500 text-white" >
        Invalid Email
      </div>
    }

    <!-- submit -->
    <button 
      class="px-6 py-2 rounded-lg "
      type="button"
      [ngClass]="{
        'bg-gray-200': !emailRef?.valid || !usernameRef?.valid,
        'pointer-events-none': !!emailRef?.valid || !usernameRef?.valid,

        'bg-sky-300': emailRef?.valid && usernameRef?.valid,
        'pointer-events-auto': emailRef?.valid && usernameRef?.valid
      }"
      >
        submit
      </button>
  </div>
  `,
})
export class TailwindNormalFormComponent {
  exampleForm = {
    username: "",
    email: "",
  };
}

// example: signals
@Component({
  selector: "app-tailwind-signal-form",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="grid gap-4 px-4 max-w-[400px] mx-auto has-[:invalid]:signal">
    <!-- username -->
    <input  
      type="text" 
      minlength="6" 
      required 
      name="username"
      class="peer/username"
      [(ngModel)]="exampleForm.username"
      placeholder="Enter valid username"
    />

    <!-- username -->
    <input 
      type="email" 
      name="email" 
      required 
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      class="peer/email"
      [(ngModel)]="exampleForm.email"
      placeholder="Enter valid email"
    />

    <!-- requiree -->
    <div class="bg-red-500 text-white hidden
                peer-placeholder-shown/username:!hidden 
                peer-invalid/username:block">
      Required Username and min length 6 chars
    </div>

    <!-- too short username -->
    <div class="bg-red-500 text-white hidden
                peer-placeholder-shown/email:!hidden 
                peer-invalid/email:block">
      Invalid Email
    </div>

    <!-- submit -->
    <button 
      type="button"
      class="px-6 py-2 rounded-lg 
            bg-sky-300 pointer-events-auto
            signal:bg-gray-200 signal:pointer-events-none signal:opacity-50"
      >
        submit
      </button>
  </div>
  `,
})
export class TailwindSignallFormComponent {
  exampleForm = {
    username: "",
    email: "",
  };
}
