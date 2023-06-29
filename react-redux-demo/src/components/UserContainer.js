import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer({ userData, fetchUsers }) {
    console.log('user', userData, fetchUsers)
    useEffect(() => {
        fetchUsers()
    }, [])
  return userData.loading ? (
      <h2>loading</h2>
  ) : userData.error ? (
      <h2>{userData.error}</h2>
  ) : (
      <div>
          <h2>Users list</h2>
          <div>
              {
                  userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
              }
          </div>
      </div>
  )
    
}

const mapStateToProps = state => {
    console.log('state', state)
    return {
        userData: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)