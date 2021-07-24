import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(
    personsList: any,
    textSearch: string,
    ): any {
    if (textSearch) {
      personsList = personsList.filter((person: any) =>
            JSON.stringify(person).toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
        );
    }

    return personsList;
}
}
