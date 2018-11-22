import React, { Component } from 'react';
import '../scss/main.scss';
const linkAPI = 'https://api.coinmarketcap.com/v2/ticker/';


class FavCrypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favCrypto: false,
            crypto: false
        }
    }


    componentDidMount() {
        let url = 'http://localhost:4000/fav';

        fetch(url)
            .then( resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Blad sieci");
                }
            })
            .then(data => {
                this.setState({
                    favCrypto: data
                });
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
                        const values = Object.keys(data.data).filter((el) => {
                            console.log(this.state.favCrypto)
                            return this.state.favCrypto[0].indexOf(data.data[el].id) >= 0
                            })
                        console.log(values);
                        console.log(this.state.crypto)
                    })
                    .catch( err => {
                        console.log(err)
                    })
            })
            .catch( err => {
                console.log(err)
            });
    }

    render() {
        return (
            <div>
                elo
            </div>
        );
    }
}


class Fav extends Component {
    render() {
        return (
            <div className="mainTable container">
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
                    <th>Fav</th>
                </tr>
                </thead>
                <tbody>
                <FavCrypto/>
                </tbody>
            </table>
            </div>
        );
    }
}

export { Fav }