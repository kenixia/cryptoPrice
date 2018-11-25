import React, {Component} from "react";
import {GetCryptoList} from "./getCryptoList";

export class CryptoTable extends Component {

    render() {
        return (
            <table className="responsive-table centered striped highlight z-depth-2">
                <thead>
                <tr className=" teal accent-1">
                    <th>#</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>Supply</th>
                    <th>Volume</th>
                    <th>%(24h)</th>
                    <th>Fav</th>
                </tr>
                </thead>
                <tbody>
                <GetCryptoList/>
                </tbody>
            </table>
        )
    }
}