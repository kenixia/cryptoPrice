import React, { Component } from 'react';
import '../scss/main.scss';
import 'react-vis/dist/style.css'
import { Preloader } from 'react-materialize';
import { Chart } from './chart'
import { CryptoDetails } from "./cryptoDetails";


class CoinInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            data2: false,
            dataStatus: false,
            dataStatus2: false
        }
    }

    componentDidMount() {
        console.log(this.props.crypto);
        const linkAPI2 = `https://api.coinmarketcap.com/v2/ticker/${this.props.crypto}/`;
        fetch(linkAPI2, {
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
                    data2: data.data,
                    dataStatus2: true
                })
                const linkAPI = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.state.data2.symbol}&tsym=USD&limit=10`
                fetch(linkAPI)
                    .then( resp => {
                        if (resp.ok) {
                            return resp.json();
                        } else {
                            throw new Error("Blad sieci");
                        }
                    })
                    .then(data => {
                        this.setState({
                            data: data.Data,
                            dataStatus: true
                        })
                    })
                    .catch( err => {
                        console.log(err)
                    });
            })
            .catch( err => {
                console.log(err)
            })

    }


    render() {
        if (this.state.dataStatus === true) {
            return (
                <div className="coin__container container z-depth-2">
                    <CryptoDetails data={this.state.data2}/>
                    <Chart data={this.state.data}/>
                </div>
            )
        } else return <Preloader color="green" size='big'/>
    }
};


class SingleCoin extends Component {

    render() {
        return <CoinInfo crypto={this.props.match.params.coinId}/>
    }
}

export { SingleCoin };