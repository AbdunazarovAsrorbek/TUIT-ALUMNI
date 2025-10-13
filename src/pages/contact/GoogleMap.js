import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Styles } from './styles/contact.js';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

class GoogleMap extends Component {

    static defaultProps = {
        center: {
            lat: 40.696295,
            lng: -73.997619
        },
        zoom: 11
    };

    render() {
        return (
            <Styles>
                {/* Google Map */}
                <div className="google-map-area">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: `${apiKey}` }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent lat={40.696295} lng={-73.997619} text="My Marker" />
                    </GoogleMapReact>
                </div>
            </Styles>
        )
    }
}

export default GoogleMap