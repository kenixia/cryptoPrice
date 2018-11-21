import React, { Component } from 'react';
import '../scss/main.scss';
import {Footer} from "react-materialize";


class AppFooter extends Component {
    render() {
        return (
            <Footer copyrights={` 2018 CryptoPrice`}
                    moreLinks={
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    }
                    // links={
                    //     <ul>
                    //         <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                    //     </ul>
                    // }
                    className='teal lighten-3'
            >
                <h5 className="white-text">CryptoPrice</h5>
                <p className="grey-text text-lighten-4">Cryptocurrency market cap rankings, charts, and more!</p>
            </Footer>
        );
    }
}

export {AppFooter};