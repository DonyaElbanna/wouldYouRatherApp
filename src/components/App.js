import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { removeAuthedUser } from '../actions/authedUser'
import Auth from './Auth'
 import Home from './Home'
import Navig from './Navig'
import Addq from './Addq'
import Leaderboard from './Leaderboard'
import 'bootstrap/dist/css/bootstrap.min.css';


function mapStateToProps({authedUser}) {
    return {authedUser}
}

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
      } 

    componentWillUnmount() {
        this.props.dispatch(removeAuthedUser)
        
    }
    
    render() {
        const { authedUser } = this.props
        return (
            <div>
            {!authedUser
            ? <Auth />
            : <div>
                    <Fragment>
                <Navig/>
                <div>
                
                    <Route path='/home'  component={Home} />
                    <Route path='/add' component={Addq} />
                    <Route path='/leaderboard' component={Leaderboard} />
                
                </div>
                </Fragment>
              </div>}
              </div>
        )
    }
}

export default connect(mapStateToProps)(App)
//Using the connect() function upgrades a component to a container.
//Containers can read state from the store and dispatch actions.