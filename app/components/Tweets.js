var React = require('react');

var Tweets = React.createClass({
    render: function () {
        return (
            <div>
            </div>
             <div className="col s12 m6 h-100 col-xs-12 col-sm-6">
                        <select className="browser-default form-control" onChange={this.handleSelect} value={this.state.view} name="chooseView" id="chooseView">
                            <option value="map" key="map">Map</option>
                            <option value="list" key="list">List</option>
                        </select>
                        <div className={this.state.view !== "map" ? "invisible" : ""} >
                            <ReactiveMap
                                appbaseField="location"
                                historicalData={true}
                                setMarkerCluster={false}
                                defaultMapStyle={this.props.mapStyle}
                                autoCenter={true}
                                showSearchAsMove={true}
                                showMapStyles={true}
                                title="Reactive Maps"
                                showPopoverOn="click"
                                onPopoverTrigger={this.onPopoverTrigger}
                                onAllData={this.onAllData}
                                defaultZoom={13}
                                defaultCenter={{ lat: 37.74, lon: -122.45 }}
                                react={{
                                    and: ["TopicSensor", "GeoDistanceSlider"]
                                }}
                                />
                        </div>
                        <div className={this.state.view !== "list" ? "invisible" : "h-100"}>
                            <ReactiveList
                                componentId="SearchResult"
                                appbaseField="location"
                                containerStyle={{
                                    height: "100%"
                                }}
                                title="Result List"
                                from={0}
                                size={20}
                                requestOnScroll={true}
                                onAllData={this.onAllData}
                                react={{
                                    and: ["TopicSensor", "GeoDistanceSlider"]
                                }}
                                />
                        </div>
                    </div>
        );
    }
});