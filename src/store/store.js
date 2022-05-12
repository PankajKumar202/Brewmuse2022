import React, { Component, Fragment } from 'react';
import mapboxgl from "mapbox-gl";
import StoreSearch from './searchStore';
import Header from '../Header';
import ReactPaginate from 'react-paginate';
import StoreDisplay from './storeDisplay';
const storeUrl = "https://brewmusepk.herokuapp.com/store";
mapboxgl.accessToken = "pk.eyJ1IjoicGFua2Fqa3VtYXI5OSIsImEiOiJja3RzYjlxemQwYWY2MnBvMzBxczV6bHVyIn0.BlMzug6pTDIMl4kp_2zhqQ";
class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: "",
            filter: "",
            zoom: 3
        }
        this.mapContainer = React.createRef();
    }
    handlepagination=(current)=>{
        fetch(`https://brewmusepk.herokuapp.com/store?skip=${current}&limit=5`,{method:'GET'})
        .then((res)=>res.json())
        .then((data=>{
            console.log("Page data",data)
            this.setState({filter:data})
        }))
    }

    handlePageClick=(data)=>{
        console.log(data.selected+6)
        this.handlepagination(data.selected+6);
    }
    filteredstore = (Text) => {
        if (this.state.coords) {
            let storeData = this.state.coords.filter((item) => {
                console.log("Insiode >>>", item.name)
                // let names=item.name.split(' ')[0];
                return item.city_name.toLowerCase().indexOf(Text.toLowerCase()) > -1


            })

            this.setState({ filter: storeData })

        }

    }
    render() {
        console.log("filter data>>>", this.state.filter)
        return (

            <Fragment>
                <Header />
                <div ref={this.mapContainer} className="map-container" />

                {/* id='searchmapBox' */}
                {/* id='storemapBox' */}
                <div id='storeContain'>
                    <StoreSearch storeInput={(data) => { this.filteredstore(data) }} />
                    <StoreDisplay storeloc={this.state.filter } />
                    <ReactPaginate previousLabel={'previous'} nextLabel={'next'} breakLabel={'...'} pageCount={11} marginPagesDisplayed={1} pageRangeDisplayed={1}
            onPageChange={this.handlePageClick} containerClassName={'pagination justify-content-center'} pageClassName={'page-item'} pageLinkClassName={'page-link'}
            previousClassName={'page-item'} previousLinkClassName={'page-link'} nextClassName={'page-item'} nextLinkClassName={'page-link'}
            breakClassName={'page-item'} breakLinkClassName={'page-link'} activeClassName={'active'}/>
                </div>








            </Fragment>




        )
    }
    componentDidMount() {
        fetch(storeUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data => {
                this.setState({ coords: data,filter:data});
                const map = new mapboxgl.Map({
                    container: this.mapContainer.current,
                    style: 'mapbox://styles/pankajkumar99/ckzjk5tnm00db14l9ur49pa15',
                    center: [78.96288, 20.593684],
                    zoom: this.state.zoom
                });
                data.forEach(element => {

                    let latitude = element.lat;

                    let longitude = element.lon;
                    new mapboxgl.Marker({
                        draggable: false,
                        color: "#1a9e1a"
                    })
                        .setLngLat([longitude, latitude])
                        .addTo(map)
                })
            }))
        

    }
}
export default Store;
