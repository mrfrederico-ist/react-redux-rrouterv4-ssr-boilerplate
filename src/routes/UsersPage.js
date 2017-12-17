import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchUsers } from '../actions/users.actions'

import { PersonsList } from '../components'

class UsersPage extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  pageHeader = () => (
    <Helmet>
      <title>Users</title>
      <meta property="og:title" content="Users" />
    </Helmet>
  )

  render() {
    return (
      <div>
        {this.pageHeader()}
        <PersonsList persons={this.props.users} />
      </div>
    )
  }
}

export default {
  component: connect(state => ({ users: state.users }), { fetchUsers })(
    UsersPage,
  ),
  getRouteProps: store => store.dispatch(fetchUsers()),
}
