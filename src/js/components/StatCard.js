import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class StatCard extends Component {

	static propTypes = {
		title: PropTypes.string,
		type: PropTypes.string,
		data: PropTypes.number,
		label: PropTypes.string,
		body: PropTypes.string	
	}

	constructor() {
		super();
	}

	render() {
		const { title, type, data, label, body } = this.props;	

		const classnames = classNames({
			'card': true,
			'card--show': true
		});		

		return (
			<div className={classnames}>
				<div className="card__row">
					<h3>
					{
						(type == 'market_price_usd') ? ('$' + parseFloat(data.toFixed(2)).toString()) : 
						((type == 'blocks_size') ? (parseFloat((data / 1000000).toFixed(2)).toString()) : 
						((type == 'n_tx') ? (data.toString()) : null))
					}
					</h3>
					<span>{label}</span>
				</div>
				<h4>{title}</h4>
				<p>{body}</p>
			</div>
		)
	}
}