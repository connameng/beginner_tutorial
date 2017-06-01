import React, { Component } from 'react';

const FilterContainer = React.createClass({
render () {
    return (
        <section id="filterContainer" className="container">
            <Filter
                name={'Kvart'}
                filterList={['Šubićevac', 'Meterize', 'Baldekin', 'Vidici', 'Rokići', 'Grad']} />
            <Filter
                name={'Cijena'}
                filterList={['< 600kn', '600kn - 700kn', '700kn - 800kn', '800kn - 900kn', '> 900kn']} />
            <Filter
                name={'Broj osoba'}
                filterList={['1', '2', '3', '4', '5', '6']} />
            <Filter
                name={'Kvadratura'}
                filterList={['< 40m', '40m - 50m', '50m - 60m', '60m - 70m', '70m - 80m', '> 80m']} />
        </section>
    )
}});

var Filter = React.createClass({
getDefaultProps() {
    return {
        filterList: [],
        name: ''
    };
},
render() {
    var handleClick = function(i, props) {
        console.log('You clicked: ' + props.filterList[i].listValue[i]);
    }
    return (
        <div className="filterCloud quarter-section">
            <h3>{this.props.name} right here</h3>
            <ul>
                {this.props.filterList.map(function(listValue, i, props) {
                    return <li onClick={handleClick.bind(this, i, props)} key={i}>{listValue}</li>;
                }, this)} {/* this at the end to fix the scope issue from global to local */}
            </ul>
        </div>
    )
}});
export default Filter;