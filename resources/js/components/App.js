import React, { Component } from "react";
import { Route } from "react-router-dom";
import AffixBar from "./AffixBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./Header";
import Footer from "./Footer";

import HeaderMobile from "./HeaderMobile";
import './Front.css';


import { connect } from 'react-redux'
import Axios from "axios";
import Routes from "./Routes";
import { Toaster } from "react-hot-toast";


class App extends Component {
    // state
    constructor(props) {
        super(props);
        this.state = { sideBar: false, promotions: [] };
    }

    // componentDidMount(){
    //     this.props.history.listen((location, action) => {
    //         // location is an object like window.location
    //         console.log(action, location.pathname, location.state)
    //     });
    // }


    componentDidMount() {
        Axios.post('/api/get_promotions').then(res => {
            console.log(res)
            this.props.changePromotions({ promotion: res.data.promotion, country: res.data.country, continent: res.data.continent, city: res.data.city, state: res.data.state });
            this.setState({
                promotions: res.data.promotion
            })
        })
    }
    componentDidUpdate(prevProps) {
        console.log("ddd");
        if (this.props.location !== prevProps.location) {
            console.log("dfdd");

            window.scrollTo(0, 0);
        }
    }
    // handle sideBar

    handleSideBar() {
        this.setState(
            {
                sideBar: !this.state.sideBar,
            },

        );
    };

    render() {
        return (
            <div >
                <AffixBar />
                <Header handleSideBar={this.handleSideBar.bind(this)} />
                <HeaderMobile
                    active={this.state.sideBar}
                    closeHeader={this.handleSideBar.bind(this)}
                />

                <Route path="/" exact component={LandingPage}></Route>
                <Routes></Routes>


                <Footer />
                <Toaster position="bottom"></Toaster>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        country: state.country
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePromotions: (data) => { dispatch({ type: 'CHANGE_PROMOTION', payload: data }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

