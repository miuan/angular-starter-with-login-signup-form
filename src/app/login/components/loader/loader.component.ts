import { Component, ViewContainerRef, Input, Output } from '@angular/core';
import { AppState } from '../app.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment } from '../model/comment';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as numeral from 'numeral';
import * as moment from 'moment';
import * as _ from 'lodash';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { LoaderM } from './loader.model';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'ops-loader-component',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
   styleUrls: [ './loader.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './loader.component.html'
})
export class LoaderComponent {

  @Input() private data: LoaderM<any> = new LoaderM<any>();
  @Input() private nocontent: boolean = true;

  constructor(private route: ActivatedRoute ) {
  }
}
