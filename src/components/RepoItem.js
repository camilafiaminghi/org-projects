import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const RepoItem = ({ org, name, stargazers_count, forks_count, description, language }) => {
	return (
		<div>
			<Link
				to={`/branches/${org}/${name}`}
				aria-label={`Go to ${name} branches`}>
				{name}
			</Link>
			<p>{description}</p>
			<span>Language: <strong>{language}</strong></span> | <span>Stars: <strong>{stargazers_count}</strong></span> | <span>Forks: <strong>{forks_count}</strong></span>
		</div>
	)
}

RepoItem.propTypes = {
  org: PropTypes.string,
  name: PropTypes.string,
  stargazers_count: PropTypes.number,
  forks_count: PropTypes.number,
  description: PropTypes.string,
  language: PropTypes.string
}

export default RepoItem
