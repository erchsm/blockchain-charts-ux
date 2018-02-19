import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class LoadingCard extends Component {

	static propTypes = {
		large: PropTypes.bool
	}

	constructor() {
		super();
	}

	render() {
		const { large } = this.props;	

		const classnames = classNames({
			'card': true,
			'card--loading': true,
			'card--lg': large
		});

		return (
			<div className={classnames}>
				<div className="loading-bar loading-bar--lg"></div>
				<div className="loading-bar loading-bar--md"></div>
				<div className="loading-bar loading-bar--sm"></div>
				<div className="loading-bar loading-bar--xs"></div>
			</div>
		)
	}
}