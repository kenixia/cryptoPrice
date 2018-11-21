import React, { Component } from 'react';
import {Preloader} from "react-materialize";
import {NavLink} from "react-router-dom";
const linkAPI = 'https://api.coinmarketcap.com/v2/ticker/';



const Coin = ({idx, data}) => {

    const colorClass = data.quotes.USD.percent_change_24h > 0 ? "present-green" : "present-red";

    return (
        <tr key={data.id}>
            <td>{idx}</td>
            <td><NavLink to={"/singlecoin/" + data.symbol}>{data.name}</NavLink></td>
            <td>{data.symbol}</td>
            <td>${data.quotes.USD.price}</td>
            <td>${data.quotes.USD.market_cap}</td>
            <td>${data.total_supply}</td>
            <td>${data.quotes.USD.volume_24h}</td>
            <td className={colorClass}>{data.quotes.USD.percent_change_24h}%</td>
        </tr>
    );

};

class GetCryptoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            dataStatus: false
        }
    }

    componentDidMount() {
        fetch(linkAPI, {
            headers: {
                'X-CMC_PRO_API_KEY': '0efcb553-0e40-47ed-8295-f14a558a2dc3'
            }
        })
            .then( resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Blad sieci");
                }
            })
            .then(data => {
                this.setState({
                    data: data.data,
                    dataStatus: true
                })
            })
            .catch( err => {
                console.log(err)
            })
    }

    render() {
        if (this.state.dataStatus === true) {
            return (
                <>{
                    Object.keys(this.state.data).map((el, idx) => {
                        return <Coin idx={idx + 1} key={this.state.data[el].id} data={this.state.data[el]}/>
                    })
                  }</>
            )
        } else return <Preloader color="green" size='big'/>

    }

};



class CryptoTable extends Component {
    render() {
        return (
        <table className="centered striped highlight z-depth-2">
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
            </tr>
            </thead>
            <tbody>
                <GetCryptoList/>
            </tbody>
        </table>
        )
    }
}

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