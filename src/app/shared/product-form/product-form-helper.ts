import { FormGroup } from "@angular/forms";
import { Product } from "src/models/product.model";
import { CrudContentService } from "src/app/services/crud-content.service";
import { ContentAsset,  AssetListViewHeaderKey} from "src/models/content-asset.model";
import { lastValueFrom } from "rxjs";
import { ListViewBuilderService } from "src/app/services/list-view-builder.service";



export class productFormHelper {
    //private contentService = new CrudContentService();
    

    static async fillProductForm(productForm: FormGroup, productRecord: Product): Promise<FormGroup> {
        productForm.patchValue({
            id: productRecord.id,
            productName: productRecord.productName,
            productDescription: productRecord.productDescription,
            //harvestDate: productRecord.harvestDate,
            netWeight: productRecord.netWeight,
            totalCannabinoids: productRecord.totalCannabinoids,
            thcConcentration: productRecord.thcConcentration,
            cbdConcentration: productRecord.cbdConcentration,
            //thcaConcentration: productRecord.thcaConcentration,
            //cbdaConcentration: productRecord.cbdaConcentration,
            //soldByName: productRecord.soldByName,
            //soldByAddress: productRecord.soldByAddress,
            producedByName: productRecord.producedByName,
            producedByAddress: productRecord.producedByAddress,
            //useBy: productRecord.useBy,
            //packageDate: productRecord.packageDate,
            testedBy: productRecord.testedBy,
            testingMethodologyStatement: productRecord.testingMethodologyStatement,
            spanishInstructions: productRecord.spanishInstructions
        });
        return productForm;
    }

    /*static async getContentAssets(contentService:CrudContentService, productRecordId: string): Promise<ContentAsset[]>{
        const contentAssets:any = [];
        contentService.getContentAssets(productRecordId).subscribe((result) =>{
            contentAssets.push(result);
        });
        return contentAssets;
    }*/

    static async getContentAssets(contentService: CrudContentService, productRecordId: string): Promise<ContentAsset[]> {
        try {
            let contentObservables = await lastValueFrom(contentService.getContentAssets(productRecordId));
            return contentObservables;
        } catch (error) {
            console.log('GET CONTENT ASSET ERROR: ', error);
            throw error;
        }
    }

    static buildAssetListView(listViewBuilder:ListViewBuilderService, records:any){
        const headerKey = new AssetListViewHeaderKey();
        const result = listViewBuilder.buildListViewData(headerKey, records);
        console.log(result);
        return result;
    }


}