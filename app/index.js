import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
	ReactiveBase,
	SingleList,
	ReactiveMap,
    GeoDistanceSlider
} from '@appbaseio/reactivemaps';

class Main extends Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="page-header">
                    <h1>Twitter-Maps</h1>
                </div>
                <ReactiveBase
                    app="Twitter-Map1"
                    credentials="AK9umsLlD:e71ac3b4-2886-4ede-b41f-866ffa98b154"
                    type="data"
                    >
                    <div className="col s12 m6 col-xs-12 col-sm-6">
                        <div className="row">
                            <div className="col s12 col-xs-12">
                                <GeoDistanceSlider
                                    componentId="GeoDistanceSlider"
                                    appbaseField="location"
                                    range={{
                                        start: 1,
                                        end: 200
                                    }}
                                    defaultSelected={{
                                        location: "SOMA sanfrancisco",
                                        distance: 50
                                    }}
                                    unit="mi"
                                    title="Geo Distance Search"
                                    placeholder="Search Location"
                                    />
                            </div>
                        </div>
                    </div>
                   
                </ReactiveBase>
            </div>
        );
    }
};


ReactDOM.render(<Main />, document.getElementById('app'));

