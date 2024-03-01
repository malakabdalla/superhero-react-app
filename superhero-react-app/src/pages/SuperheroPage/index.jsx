import React from 'react'
import SearchForm from '../../components/SearchForm'
import SuperheroCard from '../../components/SuperheroCard'

const SuperheroPage = () => {
  return (
    <div>
        <h1>Superhero Page</h1>
        <SearchForm/>
        <SuperheroCard/>
    </div>
  )
}

export default SuperheroPage