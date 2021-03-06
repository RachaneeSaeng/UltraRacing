import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {CarPartsComponent} from './car-parts.component'
import {BrowserModule} from '@angular/platform-browser'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {FormsModule} from '@angular/forms'
import {RacingDataService} from './racing-data.service'
import {HttpModule} from '@angular/http'

@NgModule({
    declarations: [
        AppComponent,
        CarPartsComponent
    ],
    imports: [BrowserModule, FormsModule, HttpModule],
    bootstrap: [AppComponent],
    providers: [RacingDataService]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);