import {Col, Row} from "react-materialize";
import React from "react";

const CryptoDetails = ({ data }) => {
    return (
        <Row>
            <Col s={12}>
                <Col s={3}>
                    <h3>{data.name}</h3>
                    <h6>{data.symbol}</h6>
                </Col>
                <Col s={9}>
                    <Row><h5>${data.quotes.USD.price}</h5></Row>
                    <Row>
                        <Col s={3}>
                            <h6>Market Cap</h6>
                            <h6>${data.quotes.USD.market_cap}</h6>
                        </Col>
                        <Col s={3}>
                            <h6>Volume (24h)</h6>
                            <h6>${data.quotes.USD.volume_24h}</h6>
                        </Col>
                        <Col s={3}>
                            <h6>Circulating Supply</h6>
                            <h6>{data.total_supply} BTC</h6>
                        </Col>
                        <Col s={3}>
                            <h6>Max Supply</h6>
                            <h6>{data.max_supply} BTC</h6>
                        </Col>
                    </Row>
                </Col>
            </Col>
        </Row>
    )
}


export { CryptoDetails }