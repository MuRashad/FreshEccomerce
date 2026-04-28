export interface Iproducts {
    id?: string,
    title?: string,
    category?: Icategory,
    ratingsAverage?: number,
    price?: number,
    imageCover?: any,
    images?:any[],
    description?:string,
    brand?:IproductBrand
}
export interface Icategory{
_id: string,
name: string,
slug?: string,
image?:string ,
createdAt?:string,
updatedAt?:string
}
export interface IproductsResponse{
metadata?:object,
results?:number,
data:Iproducts[]
}
export interface IproductBrand{
_id:string,
name:string,
slug: string,
image:any     
}

export interface IproductResponse{
data:Iproducts
}
export interface Icategories{
results?:number ,
metadata?:any ,
data:Icategory[]
}


