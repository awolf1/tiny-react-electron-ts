
/*
import fs from 'fs';
import path from 'path';

import electron from 'electron';
const BrowserWindow = electron.BrowserWindow;

*/

export class Printer {
    
    electron:any;

    options = { 
        silent: false, 
        printBackground: true, 
        //deviceName
        color: false, 
        margin: { 
            marginType: 'printableArea' // default, none, printableArea, or custom
            //top 
            //bottom 
            //left 
            //right 
        }, 
        landscape: false, 
        //scaleFactor 
        pagesPerSheet: 1, 
        collate: false, 
        copies: 1, 
        //pageRanges:{from: , to: }
        //duplexMode:  simplex, shortEdge, or longEdge
        //dpi: {horizontal : , vertical : }
        header: '', 
        footer: ''
        //pageSize  A3, A4, A5, Legal, Letter, Tabloid
    };

    BrowserWindow:any;

    constructor(){
        try{
            this.electron = window.require('electron');
            this.BrowserWindow = this.electron.remote.BrowserWindow; 
        }catch(e){
            
        }
    }

    printTextHTML(text : string){

        let win = new this.BrowserWindow({
            show: false, 
            webPreferences: {
                nodeIntegration: true
            }
        });
        
        win.loadURL("data:text/html;base64,"+btoa(text));
        win.webContents.on('did-finish-load', () => { 
            win.webContents.print(this.options, (success:boolean, failureReason:string) => { 
                if (!success) console.log(failureReason); 
                console.log('Print Initiated'); 
            }); 
        }); 

        return true;
    }



    print() {


        let win = this.BrowserWindow.getFocusedWindow(); 
        win.webContents.print(this.options, (success:boolean, failureReason:string) => { 
            if (!success) console.log(failureReason); 
            console.log('Print Initiated'); 
        }); 

        return true;

    }


    listPrinters(){
        let win = this.BrowserWindow.getFocusedWindow(); 
        return win.webContents.getPrinters();
    }

}
