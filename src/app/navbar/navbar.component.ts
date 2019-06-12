import { Component, OnInit } from '@angular/core';
import { MenuserviceService } from '../services/menuservice.service';
import { carmenu } from '../data/car-menu';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private dataService: MenuserviceService) { }

    listCars: carmenu[];

    ngOnInit() {

        console.log('This method is invoked');
        this.dataService.getCarMenuItems()
            .subscribe(

                data => {
                    this.listCars = data;
                }
        );
    }

    // loadMenItems() {
    //     console.log('service is invoked');
    //     this.dataService.getCarMenuItems().subscribe(
    //         //response => this.dataService.getCarMenuItems()
    //         response => console.log('success'),
    //     );
    // }

}
