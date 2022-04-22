import React from 'react'
import './Projects.scss'

const Projects = () => {
  return (
    <div id='projectsDiv'>
        <section className='projectsSection'>
            <div className='innerProjectDiv' id='leftProjectDiv'>
                <h1>Project Link</h1>
            </div>
            <div className='innerProjectDiv' id='rightProjectDiv'>
                <h1>Description</h1>
            </div>

        </section>
    </div>
  )
}

export default Projects