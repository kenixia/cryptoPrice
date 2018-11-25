import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Button, Icon} from "react-materialize";

class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: []
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
                    favourite: fav
                });
            })
            .catch(err => {
                console.log(err);
            });
    };


    addToFavourite = (e, id) => {
        const {met} = this.props;
        let url = 'http://localhost:4000/fav/';
        let data = {id: id};
        console.log(data);

        if (met === "add") {
            this.setState({
                favourite: [...this.state.favourite, data]
            });
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => {
                    window.Materialize.toast("Coin adeed to your fav list.", 2500)
                })
                .catch(error => {
                    window.Materialize.toast("Coin is already on your fav list.", 2500)

                });
        } else if (met === "del") {
            fetch(url + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => {
                    window.Materialize.toast("Coin removed from your fav list.", 2500)
                    if (typeof this.props.handleDelete === "function") {
                        this.props.handleDelete(id)
                    }
                })
                .catch();
        }

    };


    render() {
        const {met, idx, data} = this.props;
        const colorClass = data.quotes.USD.percent_change_24h > 0 ? "present-green" : "present-red";
        let isDisabled = false;
        for (let i = 0; i < this.state.favourite.length; i++) {
            if (data.id === this.state.favourite[i].id && met === "add") {
                isDisabled = true;
            }
        }
        return (
            <tr key={data.id}>
                <td>{idx}</td>
                <td><NavLink to={"/singlecoin/" + data.id}>{data.name}</NavLink></td>
                <td>{data.symbol}</td>
                <td>${data.quotes.USD.price}</td>
                <td>${data.quotes.USD.market_cap}</td>
                <td>${data.total_supply}</td>
                <td>${data.quotes.USD.volume_24h}</td>
                <td className={colorClass}>{data.quotes.USD.percent_change_24h}%</td>
                <td><Button disabled={isDisabled} name={data.id} onClick={(e) => this.addToFavourite(e, data.id)}
                            waves='light'><Icon tiny>{this.props.icon}</Icon></Button></td>
            </tr>
        );
    }

}

export default Coin;