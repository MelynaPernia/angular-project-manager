import {Injectable} from '@angular/core'; // Nos permite marcar una clase, y te identifica que es un servicio
import {HttpClient, HttpHeaders} from '@angular/common/http'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'; //importando el rxjs Observable
import {Project} from '../models/project.model';
// import {RequestOptions} from "http";
// import {RequestOptions} from "https"; //modelos de datos

// import 'rxjs/add/operator/map' // operadores de reactive

// consumir el API
// Injectable es para identificar que es un servicio, y un servicio es una clase

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable()
export class ProjectListService {
  projects: Array<Project> = [];
  // url = 'http://localhost:8089/projects';
  // constructor(instancia de http)
  private _headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private _http: HttpClient){}

  // el getAll me devuelve un observable
  getAll(): Observable<Project[]> {
    const url = 'http://localhost:8089/projects';
    // const headers = this._headers.append('foo', 'Bar');
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // const headers = new Headers({'Content-Type': 'application/json'});

    // this._http.get(url).
    // const options = new RequestOptions({headers: headers});
    // this._http.get(url).map((response) => {
    //   console.log(response);
    //   // response.json();
    //  return response;
    //  // return 'st'
    // });
    // return Observable.create(this.projects);
  //petición web
  //   console.log(this._http.get(url))
     return this._http.get<Project[]>(url, this._headers);
;

  //     .subscribe( response  => {
  //       console.log(response);
  //       return response.json().results.map
  //     })
    // return Observable.create(this.projects);
  }

}
