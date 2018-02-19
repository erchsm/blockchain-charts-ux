import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

import StatCard from "./StatCard";

export default class StatSlider extends Component {

	static propTypes = {
		stats: PropTypes.array
	}

	constructor() {
		super();

	}

	render() {
		const { stats } = this.props;

		let cards;

		cards = stats.map((item, index) =>
			<div key={index}>
				<StatCard
				title={item.title}
				endpoint={item.endpoint}
				label={item.label}		
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