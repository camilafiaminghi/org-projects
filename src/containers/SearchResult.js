import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Results extends Component {

	static propTypes = {
		errors: PropTypes.array,
		items: PropTypes.array,
		org: PropTypes.string,
	}

	render() {
		const { errors, items, org } = this.props

		/* ERROR MESSAGES */
		if ( errors ) {
			return (
				<div>
					<ul>
						{errors.map((error) => (
							<li key={error.resource}>{error.message}</li>
						))}
					</ul>
				</div>
			)
		}

		return (
			<div>
				{( items ) &&
					<div>
						<p>{org}'s repositories:</p>
						<ul>
							{items.map((item) => (<li key={item.id}>{item.name}</li>))}
						</ul>
					</div>
				}
			</div>
		)
	}
}

export const mapStateToProps = ({ repos }) => {
	const { errors, items, org } = repos
	return {
		errors,
		items,
		org
	}
}

export default connect(mapStateToProps)(Results);
