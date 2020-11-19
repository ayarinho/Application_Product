import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produits';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
    
   @Input() product :Produit; 

  produits: Produit[];

  constructor( private produiService: ProduitService) { }

  ngOnInit(): void {
       
    console.log(this.product) ;

  
  }

  /*  getProduits(){

    this.produiService.getProduitsList().subscribe(data => {
      this.produits = data;
    });
  }*/

}
