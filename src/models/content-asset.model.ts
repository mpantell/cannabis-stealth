export interface contentAsset{
    name: string;
    contentType: contentType;
    createdDate: Date;
    contentVersions: contentVersion[];
    createdBy: string;
}

export enum contentType{
    webContent = 'Web Content',
    pressRelease = 'Press Release'

}

export interface contentVersion{
    states:string[], 
    launchDates:{state:string,launchDate:Date}[],
    content:string
}