import React from 'react'
import StyledInfoCard from './style'
import Animation from 'components/Animation'

import { motion } from 'framer-motion'


const InfoCard = ({ animationData }) => {


  return (
    <StyledInfoCard>

      <article className="relative p-8">

        <div className="shadow rounded-lg overflow-hidden">
          <Animation animationData={animationData} />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit asperiores atque enim repudiandae nemo et minus deleniti aspernatur aut laborum expedita dolorem commodi ducimus, architecto corporis facilis dolore dicta.
          </p>
      </article>

    </StyledInfoCard>
  )
}

export default InfoCard

