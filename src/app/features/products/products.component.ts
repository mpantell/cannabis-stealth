import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductHeaderKey } from 'src/models/product.model';
import { CrudProductService } from 'src/app/services/crud-product.service';
import { ListViewBuilderService } from 'src/app/services/list-view-builder.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnChanges, OnInit {
  productData$: Observable<Product[]>;
  products: any[] = [];
  lv = true;
  headers = [
    'id', 'Product Name', 'Description', 'THC %', 'CBD %', 'Net Weight', 'Total Cannibinoids', 'Produced By', 'Spanish Link'
  ];
  tableData: string[][] = [];
  headerKey: any;
  deleteAccess:boolean = true;
  isEditMode:boolean = false;
  productRecord: Product | undefined;



  constructor(private productDataService: CrudProductService, private listViewBuilderService: ListViewBuilderService, private toastr: ToastrService) {
    this.productData$ = productDataService.productData$;
    this.productData$.subscribe(products => {
      this.products =[];
      products.map(product => {
        this.products.push(product);
      })
      this.headerKey = new ProductHeaderKey();
      this.refreshProducts();
    });
    //listViewBuilderService = new ListViewBuilderService();
    //productDataService = new CrudProductService();
  }

  ngOnInit(): void {
    //this.refreshProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //this.refreshProducts();
  }

  async refreshProducts() {
      try {
        this.tableData = await this.listViewBuilderService.buildListViewData(this.headerKey, this.products);
        console.log(this.tableData);
      } catch (error) {
        console.error('Error while building list view data:', error);
        // handle the error here, e.g. show a message to the user or take some other action
      } finally{
        console.log('TABLE DATA: ' + this.tableData);
      }
  }

  handleOpen(event:any){
    const product = this.productDataService.getProduct(event[0]).subscribe((product: Product) => {
      if(product){
        this.productRecord = product;
        this.productRecord['id'] = event[0];
        console.log(this.productRecord);
        this.isEditMode = false;
        this.lv = false;
      }else {
        console.log('Product not found');
        alert('Product Not Found');
      }
    });
    console.log(product);
  }

  handleCreate() {
    this.productRecord = undefined;
    this.isEditMode = true;
    this.lv = false;
  }

  handleSuccess(event:string){
    this.refreshProducts().then(() => {
      this.lv = true;
      this.showSuccess();
      this.isEditMode = false;
    });
  }

  handleDelete(event:any){
    this.productDataService.deleteProduct(event[0].toString()).then(() => {this.refreshProducts()});
  }

  showSuccess() {
    this.toastr.success('Product Successfully Saved!', 'Success', 
    {
      timeOut:5000,
      positionClass: 'toast-top-right',
    });
  }
  
}
