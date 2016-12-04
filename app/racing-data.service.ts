import {Injectable} from '@angular/core'
import {CarPart} from './car-part'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
// rxjs = Reactive Extension. It provice some advance tooling for our http calls

@Injectable()
export class RacingDataService {
    
    constructor(private http: Http) {

    }

    getCarParts(){
        return this.http.get('data/car-parts.json')
            .map(response => <CarPart[]>response.json().data)
            //return observable object
    }
}