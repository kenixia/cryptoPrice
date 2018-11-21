import React, { Component } from 'react';
import '../scss/main.scss';
import 'react-vis/dist/style.css'
import { Row, Col, Preloader } from 'react-materialize';
import { VerticalGridLines, HorizontalGridLines, XYPlot, LineSeries, XAxis, YAxis  } from 'react-vis';
const linkAPI = 'https://min-api.cryptocompare.com/data/dayAvg?fsym=BTC&tsym=USD';

class GetCoinInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            dataStatus: false
        }
    }

    componentDidMount() {
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
                    data: data,
                    dataStatus: true
                })
            })
            .catch( err => {
                console.log(err)
            })
    }

    render() {
        if (this.state.dataStatus === true) {
            console.log(this.state.data);
            return (
                <>{

                  }</>
            )
        } else return <Preloader color="green" size='big'/>

    }

};


class GenerateChart extends Component {
    render() {
        const avgPrice = [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
        ];
        const volume = [
            {x: 0, y: 2},
            {x: 1, y: 4},
            {x: 2, y: 10},
            {x: 3, y: 12},
            {x: 4, y: 7},
            {x: 5, y: 8},
            {x: 6, y: 3},
            {x: 7, y: 1},
            {x: 8, y: 7},
            {x: 9, y: 2}
        ];
        return (
            <div className="App">
                <XYPlot height={300} width={800}>
                    <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
                    <VerticalGridLines style={{stroke: '#B7E9ED'}} />
                    <LineSeries data={avgPrice} />
                    <LineSeries
                        className="fourth-series"
                        data={volume}
                        style={{
                            strokeLinejoin: 'round',
                            strokeWidth: 4
                        }}
                    />
                    <XAxis
                        title="Date"
                        style={{
                            line: {stroke: '#ADDDE1'},
                            ticks: {stroke: '#ADDDE1'},
                            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                        }}
                    />
                    <YAxis />
                </XYPlot>
            </div>
        )
    }
}


class SingleCoin extends Component {

    render() {
        return <div className="coin__container container z-depth-2">
            <Row>
                <Col s={12}>
                    <Col s={3}>
                        <h3>BITCOIN</h3>
                        <h6>{this.props.match.params.coinId}</h6>
                    </Col>
                    <Col s={9}>
                        <Row><h5>$ 4,473.58(-0.72%) 1BTC(20.72%)</h5></Row>
                        <Row>
                            <Col s={3}>
                                <h6>Market Cap</h6>
                                <h6>$77,774,471,400</h6>
                            </Col>
                            <Col s={3}>
                                <h6>Volume (24h)</h6>
                                <h6>$8 041 164 728</h6>
                            </Col>
                            <Col s={3}>
                                <h6>Circulating Supply</h6>
                                <h6>17,385,300 BTC</h6>
                            </Col>
                            <Col s={3}>
                                <h6>Max Supply</h6>
                                <h6>21,000,000 BTC</h6>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
            <GenerateChart/>
        </div>
    }
}

export { SingleCoin };