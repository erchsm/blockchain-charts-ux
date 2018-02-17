import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

import StatCard from "./StatCard";
import LoadingCard from "./LoadingCard";

export default class StatSlider extends Component {

	static propTypes = {
		stats: PropTypes.array
	}

	constructor() {
		super();

		this.state = {
			dataLoaded: false,
			data: {}
		};
	}

	componentDidMount = () => {
		fetch('//api.blockchain.info/stats?cors=true')
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ 
					dataLoaded : true,
					data: data
				});
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		const { stats } = this.props;

		let cards;

		this.state.dataLoaded ? (
			cards = stats.map((item, index) =>
				<div key={index}>
					<StatCard
					title={item.title}
					type={item.type}
					data={this.state.data[item.type]}
					label={item.label}		
					body={item.body}
					/>
				</div>
			)
		) : (
			cards = stats.map((item, index) =>
				<div key={index}>
					<LoadingCard
					/>
				</div>
			)
		);
		

		const classnames = classNames({
			'slider': true,
			'slider--show': true
		});

		return (
			<div className={classnames}>
			{ cards }
			</div>
			)
	}
}