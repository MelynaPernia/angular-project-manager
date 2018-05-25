import { Component, OnInit } from '@angular/core';
import {ProjectListService} from "./services/project-list.service";
import {Project} from './models/project.model'
// import {Project} from '../models/project.model'; //modelos de datos

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  isLoading = true;
  projects: Array<Project> = [];
  // inyectando para usar el servicio
  constructor(private _projectListService: ProjectListService) { }

  ngOnInit() {
    // console.log('iniciando')
    //Observable , donde usas el subscribe
    this._projectListService.getAll().subscribe(
      (data: Project[]) => {
        console.log(data)

      },
      err => {
        console.log(err)
      },
      ()=> {
        console.log('Finish')
      }

    )


  }

}
