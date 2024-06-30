import { Component } from "@angular/core";

@Component({
  selector: "app-tailwind-container-queries",
  standalone: true,
  template: `
  <div class="@container bg-white shadow-md p-4">
    <div class="grid @sm:grid-cols-3 gap-1">
        <div class="flex flex-row justify-between @sm:flex-col">
            <span>Title</span>
            <span class="text-green-700">Value</span>
        </div>

        <div class="flex flex-row justify-between @sm:flex-col">
            <span>Title</span>
            <span class="text-green-700">Value</span>
        </div>

        <div class="flex flex-row justify-between @sm:flex-col">
            <span>Title</span>
            <span class="text-green-700">Value</span>
        </div>
    </div>
  </div>
  `
})
export class TailwindContainerQueriesComponent {

}