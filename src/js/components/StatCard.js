import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

import LoadingCard from "./LoadingCard";

export default class StatCard extends Component {

	static propTypes = {
		title: PropTypes.string,
		endpoint: PropTypes.string,
		label: PropTypes.string,
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
		fetch(this.props.endpoint)
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
		const { title, endpoint, label, body } = this.props;	

		const classnames = classNames({
			'card': true,
			'card--show': true
		});		

		return (
			<div>
			{(this.state.dataLoaded) ? (
				<div className={classnames}>
					{/*<div className="card__row">
						<i className="iconcss icon-memory"></i>
					</div> */}
					<div className="card__row">
						<h3>
						{
							(title == 'Market Price') ? ('$' + parseFloat(this.state.data['market_price_usd'].toFixed(2)).toString()) : 
							((title == 'Average Block Size') ? (parseFloat((this.state.data).toFixed(3)).toString()) : 
							((title == 'Transactions Per Day') ? (this.state.data.toString()) : 
							((title == 'Mempool Size') ? (parseFloat((this.state.data.values.pop().y).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : null)))
						}
						</h3>
						<span>{label}</span>
					</div>
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