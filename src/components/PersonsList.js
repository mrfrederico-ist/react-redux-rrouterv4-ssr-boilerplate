import React from 'react'
import PropTypes from 'prop-types'

const PersonsList = props => (
	<div>
		<ul>
			{props.persons &&
				props.persons.map(person => <li key={person.id}>{person.name}</li>)}
		</ul>
	</div>
)

PersonsList.propTypes = {
	users: PropTypes.array,
}

export default PersonsList
