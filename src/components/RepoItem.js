import React from 'react'
// import { NavLink } from 'react-router-dom'

export default function RepoItem ({ org, name, stargazers_count, description, language }) {
	return (
		<div>
			<a href="#">{name}</a>
			<p>{description}</p>
			<span>Language: {language}</span> | <span>Stars: {stargazers_count}</span>
		</div>
	)
}
