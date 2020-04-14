import React from 'react'
import { Link } from 'gatsby'

const links = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/about',
    label: 'About'
  },
]

const Navigation = () => (
  <nav role="navigation">
    <ul>
      {links.map(({ to, label }) => (
        <li key={to}>
          <Link 
            to={to}
            activeClassName="active">
              {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navigation