import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class LoadingCard extends Component {

	static propTypes = {
	}

	constructor() {
		super();
	}

	render() {
		const {} = this.props;	

		const classnames = classNames({
			'card': true,
			'card--loading': true
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