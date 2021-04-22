import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"shorten"})
export class ShortenPipe implements PipeTransform{

    transform(value: string, size: number) {
        value = value.replace(/<[^>]*>/g, '')
        if(value.length <= size){
            return value
        }
        return value.slice(0, size)+" ...";
    }
}