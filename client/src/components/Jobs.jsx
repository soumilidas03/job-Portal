import React from 'react'
import Navbar from './shared/navbar'
import FilterCard from './FilterCard'
import Job from './Job'

const Jobs = () => {
  return (
    <div>
        <Navbar/>
        <FilterCard/>
        <Job/>
    </div>
  )
}

export default Jobs
