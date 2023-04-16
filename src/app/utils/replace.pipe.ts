import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'replace'})
export class ReplacePipe implements PipeTransform {
    transform(value: string = '', strToReplace: string, replacementStr: string, isUpperCase: true): string {
        if(!value || !strToReplace || !replacementStr)
        {
            return value;
        }
        return isUpperCase ? value.replace(new RegExp(strToReplace, 'g'), replacementStr).toUpperCase() : value.replace(new RegExp(strToReplace, 'g'), replacementStr);
    }
}