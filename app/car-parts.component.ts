import {Component} from '@angular/core'
// import {CARPARTS} from './mocks'
import {CarPart} from './car-part'
import {RacingDataService} from './racing-data.service'

@Component({
    selector: 'car-parts',
    templateUrl: 'template/car-parts.component.html',
    styleUrls: ['styles/car-parts.component.css']
})
export class CarPartsComponent {

    carParts: CarPart[];

    constructor(private racingDataService: RacingDataService){

    }
    // execute after constructor
    ngOnInit(){
        this.racingDataService.getCarParts()
            .subscribe(data => this.carParts = data);
        // subscribe on observable data retrun from service
    }

    totalCarParts() {
        if(Array.isArray(this.carParts))
            return this.carParts.reduce((prev, current) => prev + current.inStock, 0);

        return 0;
    }

    upQuantity(carPart){
        if(carPart.quantity < carPart.inStock){
            carPart.quantity++;
        }
    }
    
    downQuantity(carPart){
        if(carPart.quantity != 0){
            carPart.quantity--;
        }
    }
}