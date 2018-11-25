import React, {Component} from 'react';
import '../scss/main.scss';
import {CryptoTable} from "./cryptoTable";


;

;



class Main extends Component {

    render() {
        return (
            <main className="mainTable container">
                <CryptoTable/>
            </main>
        );
    };
};

export { Main };
