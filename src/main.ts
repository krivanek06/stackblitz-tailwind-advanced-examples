import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import "zone.js";
import { TailwindGroupByComponent } from "./tailwind-groupby";
import { TailwindNormalConsentComponent, TailwindSignalsConsentComponent } from "./tailwind-signals-consent";
import { TailwindNormalFormComponent, TailwindSignallFormComponent } from "./tailwind-signals-form";
import { TailwindContainerQueriesComponent } from "./tailwind-container-queries";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    TailwindGroupByComponent,
    TailwindSignalsConsentComponent,
    TailwindNormalConsentComponent,
    TailwindNormalFormComponent,
    TailwindSignallFormComponent,
    TailwindContainerQueriesComponent,
  ],
  template: `
    <div class='min-h-[500px] border-b py-10'>
      <h3>Example Group</h3>
      <app-tailwind-group-by />
    </div>

    <div class='min-h-[500px] border-b py-10'>
      <h3>Example Consent - JS</h3>
       <app-tailwind-normal-consent />
    </div>
    <div class='min-h-[500px] border-b py-10'>
      <h3>Example Consent - CSS</h3>
      <app-tailwind-signals-consent />
    </div>

    <div class='min-h-[500px] border-b py-10 '>
      <h3 class="text-center">Example Form - JS</h3>
      <app-tailwind-normal-form />
    </div>
    <div class='min-h-[500px] border-b py-10 '>
      <h3 class="text-center">Example Form - CSS</h3>
      <app-tailwind-signal-form />
    </div>

    <div class='min-h-[500px] py-10 '>
      <h3 class="text-center">Container Queires</h3>
      <div class="grid grid-cols-3 gap-4 px-2 ">
        <app-tailwind-container-queries />
        <app-tailwind-container-queries />
        <app-tailwind-container-queries />
        <app-tailwind-container-queries class="col-span-2" />
      </div>
    </div>
  `,
})
export class App {
  name = "Angular";
}

bootstrapApplication(App);
