import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";
import {Line} from 'react-chartjs-2';

import LoadingCard from "./LoadingCard";

export default class ChartCard extends Component {

	static propTypes = {
		title: PropTypes.string,
		type: PropTypes.string,
		data: PropTypes.number,
		body: PropTypes.string	
	}

	constructor() {
		super();

		this.state = {
			dataLoaded: false,
			data: {}
		};
	}

	componentDidMount = () => {
		fetch('//api.blockchain.info/charts/' + this.props.type + '?timespan=5weeks&rollingAverage=8hours&format=json&cors=true')
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ 
					dataLoaded : true,
					data: data
				});
				console.log(data);
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		const { title, type, data, body } = this.props;	

		const classnames = classNames({
			'card': true,
			'card--show': true
		});	

		const legendOpts = {
		  display: false
		};	


		const dataz = {
		  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		  datasets: [
		    {
		      label: 'My First dataset',
		      fill: false,
		      lineTension: 0.1,
		      backgroundColor: 'rgba(75,192,192,0.4)',
		      borderColor: 'rgba(75,192,192,1)',
		      borderCapStyle: 'butt',
		      borderDash: [],
		      borderDashOffset: 0.0,
		      borderJoinStyle: 'miter',
		      pointBorderColor: 'rgba(75,192,192,1)',
		      pointBackgroundColor: '#fff',
		      pointBorderWidth: 1,
		      pointHoverRadius: 5,
		      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		      pointHoverBorderColor: 'rgba(220,220,220,1)',
		      pointHoverBorderWidth: 2,
		      pointRadius: 1,
		      pointHitRadius: 10,
		      data: [65, 59, 80, 81, 56, 55, 40]
		    }
		  ]
		};

		return (
			<div>
			{(this.state.dataLoaded) ? (
				<div className={classnames}>	
			        <Line data={dataz} legend={legendOpts} />
					<h4>{title}</h4>
					<p>{body}</p>
				</div>
			) : (
				<LoadingCard/>
			)}
			</div>
		)
	}
}