import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CrudProductService } from 'src/app/services/crud-product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  @Output() dbSuccess: EventEmitter<string> = new EventEmitter();
  @Input() isEditMode: boolean = false;
  @Input() productRecord: Product | undefined;

  constructor(private fb: FormBuilder, private productService: CrudProductService, private router: Router){
    this.productForm = this.fb.group({
      productName: ['',Validators.required],
      productDescription: ['',Validators.required],
      //harvestDate: ['',Validators.required],
      netWeight: ['',Validators.required],
      totalCannabinoids: ['',Validators.required],
      thcConcentration: ['',Validators.required],
      cbdConcentration: ['',Validators.required],
      thcaConcentration: ['',Validators.required],
      cbdaConcentration: ['',Validators.required],
      //soldByName: ['',Validators.required],
      //soldByAddress: ['',Validators.required],
      producedByName: ['',Validators.required],
      producedByAddress: ['',Validators.required],
      //useBy: ['',Validators.required],
      //packageDate: ['',Validators.required],
      testedBy: ['',Validators.required],
      testingMethodologyStatement: ['',Validators.required],
      spanishInstructions: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    if(this.productRecord){
      console.log(this.isEditMode);
      this.productForm.patchValue({
        productName: this.productRecord.productName,
        productDescription: this.productRecord.productDescription,
        //harvestDate: this.productRecord.harvestDate,
        netWeight: this.productRecord.netWeight,
        totalCannabinoids: this.productRecord.totalCannabinoids,
        thcConcentration: this.productRecord.thcConcentration,
        cbdConcentration: this.productRecord.cbdConcentration,
        thcaConcentration: this.productRecord.thcaConcentration,
        cbdaConcentration: this.productRecord.cbdaConcentration,
        //soldByName: this.productRecord.soldByName,
        //soldByAddress: this.productRecord.soldByAddress,
        producedByName: this.productRecord.producedByName,
        producedByAddress: this.productRecord.producedByAddress,
        //useBy: this.productRecord.useBy,
        //packageDate: this.productRecord.packageDate,
        testedBy: this.productRecord.testedBy,
        testingMethodologyStatement: this.productRecord.testingMethodologyStatement,
        spanishInstructions: this.productRecord.spanishInstructions
      });
      
    }
  }

  onSubmit(){
    const newProduct: Product = {
      id: '',
      productName: this.productForm.value.productName,
      productDescription: this.productForm.value.productDescription,
      harvestDate: this.productForm.value.harvestDate,
      netWeight: this.productForm.value.netWeight,
      totalCannabinoids: this.productForm.value.totalCannabinoids,
      thcConcentration: this.productForm.value.thcConcentration,
      cbdConcentration: this.productForm.value.cbdConcentration,
      thcaConcentration: this.productForm.value.thcaConcentration,
      cbdaConcentration: this.productForm.value.cbdaConcentration,
      soldByName: this.productForm.value.soldByName,
      soldByAddress: this.productForm.value.soldByAddress,
      producedByName: this.productForm.value.producedByName,
      producedByAddress: this.productForm.value.producedByAddress,
      useBy: this.productForm.value.useBy,
      packageDate: this.productForm.value.packageDate,
      testedBy: this.productForm.value.testedBy,
      testingMethodologyStatement: this.productForm.value.testingMethodologyStatement,
      spanishInstructions: this.productForm.value.spanishInstructions
    };

    try{
      this.productService.createProduct(newProduct).then((result:any)=>{
        console.log(result);
        this.dbSuccess.emit('Success');
      })
    }catch(error){

    }
  }
  
  handleNavigation(event:any){
    if(event.target.id === 'newPackaging'){
      this.router.navigate(['/brandHub']);
    }else{
      this.router.navigate(['/contentHub']);
    }
  }
}
