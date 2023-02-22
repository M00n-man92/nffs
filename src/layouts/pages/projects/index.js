import React from 'react'
// css class
import "../../../styles/pages/projects/projectspage.scss"
// page notifiyer
import Locator from "../../../example/locator"
// data for the blogs
import { projectsData } from "./data"
// pinterestlayout
import PinterstLayout from '../../../example/pinterestlayout'

export default function Projects() {
  return (
    <div className='projectspage'>
      <div className='insideprojectspage'>
        <div className='locator'>
          <Locator header={"Home"} icon={"kj"} />
          <Locator span={"Projects"} />
        </div>
        <h4>Projects</h4>
        <PinterstLayout cards={projectsData} linker="blog" project={true} blog={false}/>
      </div>
    </div>
  )
}
