import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends DataService {
  constructor(http: HttpClient) { 
    super("login", http);
  }
}
