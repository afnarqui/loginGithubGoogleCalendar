import React , { Fragment } from 'react'
import GithubList from '../GithubList'
import GithubItem from '../GithubItem'

export const Github = (props) => {
  return <div>
    <h1>Github</h1>
    <GithubList>
      <GithubItem />
    </GithubList>
    
    </div>
}