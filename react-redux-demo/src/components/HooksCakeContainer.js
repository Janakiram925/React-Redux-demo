import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCakes } from '../redux'

function HooksCakeContainer() {
    
    const numOfCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCakes())}>buy cakes</button>
    </div>
  )
}

export default HooksCakeContainer