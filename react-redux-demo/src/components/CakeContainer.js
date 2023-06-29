import React from 'react'
import { connect } from 'react-redux'
import { buyCakes, addCakes } from '../redux';

const styling = {
    backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '0 10px',
}

function cakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button style={styling} onClick = {props.buyCakes}>buy cake</button>
            <button style={styling} onClick = {props.addCakes}>Add cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

// dispatch -- dispatch actions and triggers state change
const mapDispatchToProps = (dispatch) => {
    return {
        buyCakes: () => dispatch(buyCakes()),
        addCakes: () => dispatch(addCakes())
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)
    (cakeContainer)
