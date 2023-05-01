export interface ContentAsset{
    id: string,
    name: string;
    contentType?: ContentType;
    createdDate?: Date;
    //contentVersions: ContentVersion[];
    createdBy: string;
    productId?: string;
    content?: string;
}

export enum ContentType{
    webContent = 'Web Content',
    pressRelease = 'Press Release',
    productBrief = 'Product Brief',
    productDescription = 'Product Description'
}


export class AssetListViewHeaderKey{
    id:string = 'Asset ID';
    name:string = 'Asset Name';
    status:string = 'Status';
    contentType:string = 'Content Type';
}

export class AssetTableHeaderKey {
    id:string = 'Asset ID';
    name:string = 'Content Title';
    contentType:string = 'Content Type';
    createdBy:string = 'Created By';
    createdDate:string = 'Created Date';
    status:string = 'Status';
    
}

export interface ContentVersion{
    states:string[], 
    launchDates:{state:string,launchDate:Date}[],
    content:string
}