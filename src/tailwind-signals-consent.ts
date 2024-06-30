import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

// Example: consent - normal
@Component({
  selector: "app-tailwind-normal-consent",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="grid gap-4 px-4">
    <!-- checkbox -->
    <div class="text-start bg-red-100 p-4 rounded-lg">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>

    <!-- checkbox -->
    <div>
        <input type="checkbox" [(ngModel)]="isChecked"/> 👈🏼 check/uncheck here
    </div>

    <div>
      Checbox value: {{ isChecked }}
    </div>

    <!-- submit -->
    <div>
      <button 
      class="px-6 py-2 rounded-lg "
      type="button"
      [ngClass]="{
        'bg-gray-200': !isChecked,
        'pointer-events-none': !isChecked,

        'bg-sky-300': isChecked,
        'pointer-events-auto': isChecked
      }"
      >
        submit
      </button>
    </div>
  </div>
  `,
})
export class TailwindNormalConsentComponent {
  isChecked = false;
}

// EXAMPLE: Consent
@Component({
  selector: "app-tailwind-signals-consent",
  standalone: true,
  template: `
  <div class="grid gap-4 px-4">
    <!-- checkbox -->
    <div class="text-start bg-red-100 p-4 rounded-lg">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>

    <!-- checkbox -->
    <div class="peer">
        <input type="checkbox" /> 👈🏼 check/uncheck here
    </div>

    <!-- submit -->
    <div class="peer-has-[:checked]:signal">
      <button 
        type="button" 
        class="px-6 py-2 rounded-lg bg-gray-200 
              pointer-events-none 
              signal:pointer-events-auto 
              signal:bg-sky-300
              
        ">
        submit
      </button>
    </div>
  </div>
  `,
})
export class TailwindSignalsConsentComponent {}
