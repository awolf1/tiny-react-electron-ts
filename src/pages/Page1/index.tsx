import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { Printer } from '../../utils/Printer';



let printer = new Printer();

function handlePrintPage(e:any) {
    e.preventDefault();
    printer.options.silent = false;
    printer.print();
}
function handlePrintPageSilent(e:any) {
    e.preventDefault();
    printer.options.silent = true;
    printer.print();
}
function handlePrintHello(e:any) {
    e.preventDefault();
    console.log("All printer available are ", printer.listPrinters());
    
    printer.printTextHTML("Oi oi oi");
}

function Page1(){



    return (
        <div>
            <h1>Page1</h1>
            <Link to="/">
                Home
            </Link>

            <button onClick={handlePrintPage}>Print Page</button>
            <button onClick={handlePrintPageSilent}>Print Page Silent</button>
            <button onClick={handlePrintHello}>Print Hello</button>
        </div>
    )
}

export default Page1;