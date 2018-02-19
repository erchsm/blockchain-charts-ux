import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";
import {Line} from 'react-chartjs-2';
import Numeral from 'numeral';

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
		fetch('//api.blockchain.info/charts/' + this.props.type + '?timespan=45days&rollingAverage=8hours&format=json&cors=true')
			.then(response => {
				return response.json();
			})
			.then(data => {
				data.transformedValues = this.transformData(data.values);
				this.setState({ 
					dataLoaded : true,
					data: data,
					legendOptions: {
					  display: false
					},
					chartOptions: {
						animation: {
							easing: 'easeInOutBack',
							duration: 1200
						},
						scales: {
							yAxes: [{
								ticks: {
									fontColor: "rgba(95,95,95,0.5)",
									fontStyle: "bold",
									maxTicksLimit: 4,
									padding: 12,
									callback: (value, index, values) => {
										if (this.props.title == 'Bitcoins in Circulation') {
											return Numeral(value).format('0.0a').toUpperCase()
										}
										else {
											return Numeral(value).format('$0.0a').toUpperCase()
										}
									}
								}
							}],
							xAxes: [{
								ticks: {
									fontColor: "rgba(95,95,95,0.5)",
									fontStyle: "bold",
									maxTicksLimit: 8,
									padding: 12,
								},
								gridLines: {
									drawTicks: false,
									display: false
								}
							}]
						}
					},
					chartData: {
						labels: data.transformedValues[0],
						datasets: [{
							label: this.props.title,
							lineTension: 0.1,
							borderColor: '#B2DEF4',
							backgroundColor: 'rgba(178, 222, 244, .4)',
							borderCapStyle: 'butt',
							borderDash: [],
							borderDashOffset: 0.0,
							borderJoinStyle: 'miter',
							pointBorderColor: '#B2DEF4',
							pointBackgroundColor: '#fff',
							pointBorderWidth: 1,
							pointRadius: 0,
							pointHitRadius: 12,
							pointHoverBackgroundColor: '#FAFAFA',
							pointHoverBorderColor: '#004A7C',
							pointHoverRadius: 6,
							pointHoverBorderWidth: 3,
							data: data.transformedValues[1]
						}]
					}
				});
			})
			.catch(error => {
				console.error(error);
			});
	}

	// transforms data into format readable by Charts.js
	transformData = (arr, property) => {
	  return arr.reduce((memo, item) => {
		(!memo[0]) ? memo[0] = [] : null;
		(!memo[1]) ? memo[1] = [] : null;

		memo[0].push(this.timeFormatter(item.x));
		memo[1].push(this.valueFormatter(item.y));
		return [memo[0], memo[1]];
	  }, {});
	}

	valueFormatter = (value) => {
		return value.toFixed(2);
	}

	timeFormatter = (unixTimestamp) => {
		const a = new Date(unixTimestamp * 1000);
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		const month = months[a.getMonth()];
		const date = a.getDate();
		const time = date + ' ' + month;
		return time;
	}

	render() {
		const { title, type, data, body } = this.props;	

		const classnames = classNames({
			'card': true,
			'card--show': true
		});	

		return (
			<div>
			{(this.state.dataLoaded) ? (
				<div className={classnames}>	
					<Line data={this.state.chartData} options={this.state.chartOptions} legend={this.state.legendOptions} />
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