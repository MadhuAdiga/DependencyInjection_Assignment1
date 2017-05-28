import { Component, OnInit } from '@angular/core'; //Import Component and ngOnInit dependenicies
import { HomeService } from './home.service' // Import HomeService 


@Component({
  selector: 'my-app',
  template: `<div class="container container-fluid">
                <my-header></my-header>
                <my-contain></my-contain>
                <my-footer>></my-footer>
             </div>`,
  providers:[HomeService] // Register the service as a provider with the AppComponent which is the parent component for the Header, Contain and Footer components
})


export class AppComponent { // Export a class AppComponent 
   
} 

    
    

