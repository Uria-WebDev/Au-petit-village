import { Component, OnInit } from '@angular/core';
import { FigurinesService } from '../figurines.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {
  selectedService: any;
  constructor(private figurineService: FigurinesService) {}

  ngOnInit() {
    this.selectedService = this.figurineService.getService();
  }
}
