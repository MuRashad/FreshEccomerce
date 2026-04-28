import { Pipe, PipeTransform } from '@angular/core';
// import { Iproducts } from '../Interfaces/iproducts';
@Pipe({
  name: 'searchElement',
})
export class SearchElementPipe implements PipeTransform {
  transform<T>(items:T[],searchText:string='',filed:keyof T='title' as keyof T): T[]{
    // return items.filter((item)=>item.String(item[key]).toLowerCase().includes(searchText.toLowerCase()))
    if(!searchText ||!items)return items 
  
    return items.filter((item)=>{
    const value= item[filed] ; //items.filed =>items['title'] =iphone assumption , items.filed['price'] =011 number
    if(typeof value ==='string'){
     return  value.toLowerCase().includes(searchText.toLowerCase())
    }
    return false
  })
  }

}
