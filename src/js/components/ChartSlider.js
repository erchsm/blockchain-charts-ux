import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

import ChartCard from "./ChartCard";

export default class ChartSlider extends Component {

	static propTypes = {
		charts: PropTypes.array
	}

	constructor() {
		super();
	}

	render() {
		const { charts } = this.props;

		let cards;

		cards = charts.map((item, index) =>
			<div key={index}>
			<ChartCard
			title={item.title}
			type={item.type}
			body={item.body}
			/>
			</div>
		)	
		

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