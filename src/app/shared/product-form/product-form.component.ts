import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CrudProductService } from 'src/app/services/crud-product.service';
import { NavigationExtras, Router } from '@angular/router';
import { ContentAsset, AssetListViewHeaderKey } from 'src/models/content-asset.model';
import { productFormHelper } from './product-form-helper';
import { CrudContentService } from 'src/app/services/crud-content.service';
import { ListViewBuilderService } from 'src/app/services/list-view-builder.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  @Output() dbSuccess: EventEmitter<string> = new EventEmitter();
  @Output() backEvent: EventEmitter<null> = new EventEmitter()
  @Input() isEditMode: boolean = false;
  @Input() productRecord: Product | undefined;
  contentAssets$: Observable<ContentAsset[]> | undefined;
  contentHeaders:string[] = ['id', 'Asset Name', 'Status', 'Content Type'];
  contentData: string[][] = [];

  constructor(private fb: FormBuilder, private productService: CrudProductService, private router: Router, private contentService: CrudContentService, private listViewBuilder:ListViewBuilderService) {
    this.productForm = this.fb.group({
      id: [''],
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      //harvestDate: ['',Validators.required],
      netWeight: ['', Validators.required],
      totalCannabinoids: ['', Validators.required],
      thcConcentration: ['', Validators.required],
      cbdConcentration: ['', Validators.required],
      thcaConcentration: ['', Validators.required],
      cbdaConcentration: ['', Validators.required],
      //soldByName: ['',Validators.required],
      //soldByAddress: ['',Validators.required],
      producedByName: ['', Validators.required],
      producedByAddress: ['', Validators.required],
      //useBy: ['',Validators.required],
      //packageDate: ['',Validators.required],
      testedBy: ['', Validators.required],
      testingMethodologyStatement: ['', Validators.required],
      spanishInstructions: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.productRecord) {
      this.productForm = await productFormHelper.fillProductForm(this.productForm, this.productRecord);
      this.contentAssets$ = this.contentService.getContentAssets(this.productRecord.id);
      this.contentAssets$.subscribe((contentAssets: ContentAsset[]) => {
        console.log('CONTENT ASSET: ', contentAssets);
        if(contentAssets){
          this.contentData = productFormHelper.buildAssetListView(this.listViewBuilder, contentAssets)
        }
        this.disableForm(true);
      });
    }
  }  

  onSubmit() {
    const formProduct: Product = {
      id: this.productForm.value.id ? this.productForm.value.id : '',
      productName: this.productForm.value.productName,
      productDescription: this.productForm.value.productDescription,
      //harvestDate: this.productForm.value.harvestDate,
      netWeight: this.productForm.value.netWeight,
      totalCannabinoids: this.productForm.value.totalCannabinoids,
      thcConcentration: this.productForm.value.thcConcentration,
      cbdConcentration: this.productForm.value.cbdConcentration,
      //thcaConcentration: this.productForm.value.thcaConcentration,
      //cbdaConcentration: this.productForm.value.cbdaConcentration,
      //soldByName: this.productForm.value.soldByName,
      //soldByAddress: this.productForm.value.soldByAddress,
      producedByName: this.productForm.value.producedByName,
      producedByAddress: this.productForm.value.producedByAddress,
      //useBy: this.productForm.value.useBy,
      //packageDate: this.productForm.value.packageDate,
      testedBy: this.productForm.value.testedBy,
      testingMethodologyStatement: this.productForm.value.testingMethodologyStatement,
      spanishInstructions: this.productForm.value.spanishInstructions
    };

    try {
      if (this.productForm.value.id === '') {
        this.productService.createProduct(formProduct).then((result: any) => {
          console.log(result);
          this.dbSuccess.emit('Successful Insert');
        })
      } else {
        this.productService.updateProduct(formProduct).then((result: any) => {
          console.log(result);
          this.dbSuccess.emit('Successful Update')
        })
      }
    } catch (error) {

    }
  }

  handleNavigation(event: any) {
    const navExtras: NavigationExtras = {
      queryParams: {
        productId: this.productRecord?.id
      }
      
    }
    if (event.target.id === 'newPackaging') {
      this.router.navigate(['/brandHub'], navExtras);
    } else {
      this.router.navigate(['/contentHub'], navExtras);
    }
  }

  disableForm(disabled: boolean) {
    setTimeout(() => disabled ? this.productForm.disable() : this.productForm.enable())
  }

  setEditMode() {
    setTimeout(() => this.productForm.enable());
    this.isEditMode = true;
  }

  handleBack() {
    this.backEvent.emit();
  }
}
