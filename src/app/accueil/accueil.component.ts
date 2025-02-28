import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FigurinesService } from '../figurines.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})

export class AccueilComponent implements OnInit {
  services: any[] = [];
  filteredServices: any[] = [];
  searchText: string ='';

  constructor(private figurineService:
    FigurinesService, private router: Router) {};

    ngOnInit() {
      this.services =
      this.figurineService.getServices();
      this.filteredServices = [...this.services];
    }

  selectService(service: any) {
    this.figurineService.setService(service);
    this.router.navigate(['/produit'])
  };

  sortServices(order: string) {
    this.filteredServices.sort((a, b) => {
      return order === 'asc' ?
      parseFloat(a.price) -
      parseFloat(b.price) :
      parseFloat(b.price) -
      parseFloat(a.price);
    });
  };

  filterServices() {
    if (!this.searchText.trim()) {
      this.filteredServices =
      [...this.services];
    } else {
      this.filteredServices =
      this.services.filter(service =>
        service.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  };
}
