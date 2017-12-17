import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchAdmins } from '../actions/admins.actions'

import { requireAuth } from '../components/hocs'
import { PersonsList } from '../components'

class AdminsPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  pageHeader = () => (
    <Helmet>
      <title>Admins</title>
      <meta property="og:title" content="Admins" />
    </Helmet>
  )

  render() {
    return (
      <div>
        {this.pageHeader()}
        <h3>Protected list of admins</h3>
        <PersonsList persons={this.props.admins} />
      </div>
    )
  }
}

export default {
  component: connect(state => ({ admins: state.admins }), { fetchAdmins })(
    requireAuth(AdminsPage),
  ),
  getRouteProps: store => store.dispatch(fetchAdmins()),
}
