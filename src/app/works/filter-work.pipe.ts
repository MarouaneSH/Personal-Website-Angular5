import { Project } from './service/project.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterWork',
  pure: false
})
export class FilterWorkPipe implements PipeTransform {

  transform(projects: Project[], args?: any): any {
    console.log(args);
    if (args === 'all') {
      return projects;
    } else if (args === 'mobile') {
      return projects.filter((project) => project.categorie = 'mobile');
     }
  }

}
