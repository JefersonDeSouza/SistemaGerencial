import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        alert('Um erro inesperado aconteceu.');
        console.log(error);
        // throw new Error("Method not implemented.");
    }

}