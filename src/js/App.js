import React, { Component } from 'react';
import '../scss/main.scss';
import { Header } from './header';
import { Main } from './main'
import { AppFooter } from './footer'
import { SingleCoin } from './singleCoin'
import { FavCrypto } from './favCrypto'
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <HashRouter>
            <>
                <Header/>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/singlecoin/:coinId' component={SingleCoin} />
                        <Route path='/fav' component={FavCrypto} />
                    </Switch>
                <AppFooter/>
            </>
        </HashRouter>
    );
  }
}

export default App;
