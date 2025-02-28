import { Injectable } from '@angular/core';;

@Injectable({
  providedIn: 'root'
})
export class FigurinesService {
  private selectedService: any;

  services = [
    {name: "Astérix", price: 5.99, image: '/asterix.jpg'},
    {name: "Obélix", price: 9.99, image: '/obelix.jpg'},
    {name: "Abraracourcix", price: 6.99, image: '/abraracourcix.jpg'}
  ];
  constructor() { }

  getServices() {
    return this.services;
  }

  setService(service: any) {
    this.selectedService = service;
    localStorage.setItem('selectedService',JSON.stringify(service));
  }

  getService() {
    return this.selectedService ||
    JSON.parse(localStorage.getItem('selectedService') || '{}');
  }
}
