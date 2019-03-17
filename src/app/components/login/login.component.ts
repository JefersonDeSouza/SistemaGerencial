import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from './login.service';
import { BadInputError } from 'src/app/shared/error/bad-input-error';
import { NotFoundError } from 'src/app/shared/error/not-found-error';
import { AppError } from 'src/app/shared/error/app-error';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private loginService: LoginService
    ) {

    }

    public items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                { label: 'New', icon: 'fa fa-plus' },
                { label: 'Open', icon: 'fa fa-download' }
            ]
        },
        {
            label: 'Edit',
            items: [
                { label: 'Undo', icon: 'fa fa-refresh' },
                { label: 'Redo', icon: 'fa fa-repeat' }
            ]
        }];
    }

    efetuarLogin() {
        let login = { nome: 'Jeferson', sobrenome: 'Souza' };

        this.loginService.cadastrar(login)
        .subscribe(response => {
  
        },
        (error: AppError) =>{
            if(error instanceof BadInputError){
                // this.form.setErrors(error.originalError);
            }
            else throw error;
        });
    }

    deletarLogin(login: any){
        this.loginService.deletarPorId(login.id)
        .subscribe(response => {
  
        },
        (error: AppError) =>{
            if(error instanceof NotFoundError){
                // this.form.setErrors(error.originalError);
            }
            else throw error;
        });
    }
}
