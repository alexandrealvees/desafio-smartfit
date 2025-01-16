import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CardsListComponent } from "./components/cards-list/cards-list.component";
import { CommonModule } from "@angular/common";
import { FormsComponent } from "./components/forms/forms.component";
import { HeaderComponent } from "./components/header/header.component";
import { GetUnitsService } from "./services/get-units.service";
import { AppLocation } from "./types/location.interface";
import { LegendComponent } from "./components/legend/legend.component";
import { FooterComponent } from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, FormsComponent, CommonModule, CardsListComponent,LegendComponent,FooterComponent]
})
export class AppComponent {

  showList = new BehaviorSubject(false);
  unitsList: AppLocation[] = [];

  constructor(private unitService: GetUnitsService){ }

  onSubmit(){
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);

  }
}
