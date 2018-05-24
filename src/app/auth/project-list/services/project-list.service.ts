import {Injectable} from '@angular/core'; // Nos permite marcar una clase, y te identifica que es un servicio
import {HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/project.model'
import {RequestOptions} from "@angular/http";

// consumir el API
// Injectable es para identificar que es un servicio, y un servicio es una clase
@Injectable()
export class ProjectListService {
  projects: Array<Project> = [];
  // constructor(instancia de http)
  constructor(private _http: HttpClient){}

  getAll() {
    const url = 'http://localhost:8089/projects';
    const headers = new Headers({'Content-Type': 'application/json'});
    // const options = new RequestOptions({headers: headers});
    // this._http.get(url).map((response) => {
    //   console.log(response);
    //   // response.json();
    //  return response;
    //  // return 'st'
    // });
    // return Observable.create(this.projects);

    this._http.get(url)
      .subscribe( data => {
        console.log(data);
      })
  }

}
