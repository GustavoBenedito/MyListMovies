import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomePageComponent } from "./header-home-page/header-home-page.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [CommonModule, HeaderHomePageComponent]
})
export class HomePageComponent {

}
