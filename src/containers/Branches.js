import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Branches extends Component {

	render() {
		return (
			<div>
				Branches
			</div>
		)
	}
}

export default connect()(Branches);
