export interface Product {
    id: string;
    productName: string;
    productDescription: string;
    harvestDate: Date;
    netWeight: number;
    totalCannabinoids: number;
    thcConcentration: number;
    cbdConcentration: number;
    thcaConcentration: number;
    cbdaConcentration: number;
    soldByName: string;
    soldByAddress: string;
    producedByName: string;
    producedByAddress: string;
    useBy: Date;
    packageDate: Date;
    testedBy: string;
    testingMethodologyStatement: string;
    spanishInstructions: string;
  }

  export class ProductHeaderKey {
    id:string = '{{id}}';
    productName:string = 'Product Name';
    productDescription: string = 'Description';
    thcConcentration: string = 'THC %';
    cbdConcentration: string = 'CBD %';
    netWeight: string = 'Net Weight';
    totalCannabinoids: string = 'Total Cannibinoids';
    producedByName: string = 'Produced By';
    spanishInstructions: string = 'Spanish Link';
    [key: string]: string | undefined;
  }

  export class SampleProduct {
    productName: string = 'London Pound Cake';
    productDescription: string = 'Hybrid';
    harvestDate: Date = new Date('2022-03-29');
    netWeight: number = 3.5;
    totalCannabinoids: number = 24.41;
    thcConcentration: number = 23.4;
    cbdConcentration: number = 0;
    thcaConcentration: number = 0.7;
    cbdaConcentration: number = 0;
    soldByName: string = 'Sunnyside Wrigleyville';
    soldByAddress: string = '3524 N Clark St, Chicago, IL 60657';
    producedByName: string = 'Cresco Labs, Inc';
    producedByAddress: string = 'P.O. Box 2144, Joliet, IL 60434';
    useBy: Date = new Date('2023-09-29');
    packageDate: Date = new Date('2023-03-29');
    testedBy: string = 'LK PURE LABS for Cresco Illinois';
    testingMethodologyStatement: string = 'THIS PRODUCT PASSED MICROBIOLOGICAL, MYCOTOXIN, PESTICIDE AND SOLVENT CONTAMINATE/RESIDUE ANALYSIS AS OF 01/03/2023';
    spanishInstructions: string = 'www.crescolabs.com/espanol';
  }
  