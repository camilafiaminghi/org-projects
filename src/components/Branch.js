import React from 'react'
import PropTypes from 'prop-types'

const Branch = ({ name, commit }) => {
	return (
		<div>
			<p>{name}</p>
			<a
				href={commit.url}
				target="_blank">{commit.sha}</a>
		</div>
	)
}

Branch.propTypes = {
  name: PropTypes.string,
  commit: PropTypes.object
}

export default Branch
