import React, { Component, PropTypes } from 'react';

import StatSlider from './StatSlider';
import ChartSlider from './ChartSlider';

export default class App extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		let stats = [
		{
			title: 'Market Price',
			endpoint: '//api.blockchain.info/stats?cors=true',
			label: 'USD',
			body: 'Average USD market price across major bitcoin exchanges.'
		},
		{
			title: 'Average Block Size',
			endpoint: '//api.blockchain.info/q/24hravgblocksize?cors=true',
			label: 'MB',
			body: 'The 24 hour average block size in Mega Bytes.'
		},
		{
			title: 'Transactions Per Day',
			endpoint: '//api.blockchain.info/q/24hrtransactioncount?cors=true',
			label: 'Transactions',
			body: 'The aggregate number of confirmed Bitcoin transactions in the past 24 hours.'
		},
		{
			title: 'Mempool Size',
			endpoint: '//api.blockchain.info/charts/mempool-size?timespan=1days&cors=true',
			label: 'Bytes',
			body: 'The aggregate size of transactions waiting to be confirmed.'
		}
		]

		let charts = [
		{
			title: 'Bitcoins in Circulation',
			type: 'total-bitcoins',
			body: 'The total number of bitcoins that have already been mined.'
		},
		{
			title: 'Market Price',
			type: 'market-price',
			body: 'Average USD market price across major bitcoin exchanges.'
		},
		{
			title: 'Market Capacity',
			type: 'market-cap',
			body: 'The total USD value of bitcoin supply in circulation.'
		},
		{
			title: 'Trade Volume',
			type: 'trade-volume',
			body: 'The total USD value of trading volume on major bitcoin exchanges.'
		}
		]

		return (
			<article>
				<section>
					<h2>Popular Stats</h2>
					<StatSlider stats={stats} />
				</section>
				<section>
					<h2>Currency Statistics</h2>
					<ChartSlider charts={charts} />
				</section>
			</article>
		)
	}
}