import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { Produit1Component } from './produit-1/produit-1.component';
import { Produit2Component } from './produit-2/produit-2.component';
import { Produit3Component } from './produit-3/produit-3.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'a-propos', component: AproposComponent },
    { path: 'produit-1', component: Produit1Component },
    { path: 'produit-2', component: Produit2Component },
    { path: 'produit-3', component: Produit3Component }
];
