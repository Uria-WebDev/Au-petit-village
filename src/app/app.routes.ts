import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { ProduitComponent } from './produit/produit.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'a-propos', component: AproposComponent },
    { path: 'produit', component: ProduitComponent }
];
