import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import OrderDisplay from './orderDisplay';

const url = "https://brewmusepk.herokuapp.com/deliverOrder";
const updateUrl = "https://brewmusepk.herokuapp.com/updateOrder"

class viewOrders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: ''
        }
    }

    render() {
        if (sessionStorage.getItem('loginStatus') === 'logIn') {
            return (
                <>
                    <Header />
                    <OrderDisplay orderData={this.state.orders} />

                </>

            )
        }
        return (
            <>
                <Header />
                <center>
                    <h2 style={{color:'#8e97a7'}}>Login To View Order</h2>
                </center>
            </>
        )
    }

    componentDidMount() {
        if (this.props.location) {
            let queryp = this.props.location.search;
            // console.log("querryp",queryp)
            if (queryp) {
                let data = {
                    "status": queryp.split('&')[0].split('=')[1],
                    "date": queryp.split('&')[2].split('=')[1].split('%')[0],
                    "bank_name": queryp.split('&')[3].split('=')[1].split('%20')[0]
                }
                let id = queryp.split('&')[1].split('=')[1].split('_')[1];
                console.log("id>>>>", typeof(id));
                console.log("data>>>>", JSON.stringify(data))
                fetch(`${updateUrl}/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }
        }

        let email = sessionStorage.getItem('email');
        axios.get(`${url}?email=${email}`).then((res) => {
             this.setState({ orders: res.data })
             localStorage.removeItem('Customizeddata')
            })

    }

}

export default viewOrders