/** @jsx jsx */

import React from 'react'

class Redirect extends React.Component {
	componentDidMount() {
		window.location.replace('https://designweek.framer.website/')
	}
	render() {
		return null
	}
}

const DesignWeek = () => {
	return <div>hello</div>
}

export default DesignWeek
