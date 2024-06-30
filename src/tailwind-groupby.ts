import { Component } from "@angular/core";

@Component({
  selector: "app-tailwind-group-by",
  standalone: true,
  template: `
  <div class="flex items-center">
    @for(item of navigation; track item.page){
      <div 
        class="group relative w-52 rounded-xl border hover:shadow-md bg-gray-400">
        <!-- page name: Ex1, Ex2 -->
        <div class="text-xl text-center cursor-pointer" tabindex="0">
            {{ item.page }}
        </div> 

        <!-- sub pages: Sub1, Sub2. Sub3 -->
        <div class="
          absolute top-2 w-full p-8    
          translate-y-[100px] scale-0
          group-hover:scale-100 group-hover:translate-y-0
          transition-all duration-500
          group-focus-within:scale-100 group-focus-within:translate-y-0
        ">
          <div class="bg-white w-full mx-auto rounded-lg overflow-clip">
            @for(sub of item.sub; track sub){
              <div class="border-b hover:bg-sky-200 hover:text-orange-700 cursor-pointer p-2">
                {{ sub }}
              </div>
            }
          </div>
        </div>  
      </div>
    }
  </div>
  `,
})
export class TailwindGroupByComponent {
  navigation = [
    {
      page: "Ex1",
      sub: ["Ex1 - Sub1", "Ex1 - Sub2", "Ex1 - Sub3"],
    },
    {
      page: "Ex2",
      sub: ["Ex2 - Sub1", "Ex2 - Sub2", "Ex2 - Sub3"],
    },
  ];
}
