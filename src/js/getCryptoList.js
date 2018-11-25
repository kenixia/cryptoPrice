import React, {Component} from "react";
import {Preloader} from "react-materialize";
import Coin from "./coin";
const linkAPI = 'https://api.coinmarketcap.com/v2/ticker/';

export class GetCryptoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            dataStatus: false,
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        const intervalTime = Math.floor(Math.random()*(120000-60000+1)+60000);
        console.log(intervalTime);
        this.interval = setInterval(this.getCoins, intervalTime);
        this.getCoins();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("cleared");
    }

    getCoins = () => {
        fetch(linkAPI, {
            headers: {
                'X-CMC_PRO_API_KEY': '0efcb553-0e40-47ed-8295-f14a558a2dc3'
            }
        })
            .then(resp => {
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
                console.log("Updated")
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        if (this.state.dataStatus === true) {
            return (
                <>{
                      Object.keys(this.state.data).map((el, idx) => {
                          return <Coin icon="bookmarks" met="add" idx={idx + 1} key={this.state.data[el].id}
                                       data={this.state.data[el]}/>
                      })
                  }</>
            )
        } else return <Preloader color="green" size='big'/>

    }

}