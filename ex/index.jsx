import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Tertuliano">
        <Member name='Sidnei' />
        <Member name='Luciana' />
    </Family>
, document.getElementById('app'))

