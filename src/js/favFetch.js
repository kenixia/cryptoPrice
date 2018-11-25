import React, {Component} from "react";
import Coin from "./coin";
const linkAPI = 'https://api.coinmarketcap.com/v2/ticker/';

export class FavFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favList: false,
            crypto: []
        }
    }

    componentDidMount() {
        let url = 'http://localhost:4000/fav';

        fetch(url)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Blad sieci");
                }
            })
            .then(fav => {
                this.setState({
                    favList: fav
                });
                this.getFavCoins(fav);
            })
            .catch(err => {
                console.log(err);
            });
    };

    getFavCoins(fav) {
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
                let values = [];
                Object.keys(data.data).forEach((el) => {
                    for (let i = 0; i < fav.length; i++) {
                        if (data.data[el].id === fav[i].id) {
                            values.push(data.data[el]);
                        }
                    }
                });
                this.setState({
                    crypto: values
                });
            })
            .catch(err => {
                console.log(err);
            })
    }


    handleDelete = (id) => {
        const afterDelete = this.state.crypto.filter(el => {
            return el.id !== id
        })
        this.setState({
            crypto: afterDelete
        })
    }


    render() {
        return (
            <tbody>
            {this.state.crypto.map((el, idx) => {
                return <Coin icon="clear" handleDelete={this.handleDelete} met="del" idx={idx + 1} key={el.id}
                             data={el}/>
            })}
            </tbody>
        );
    }
}