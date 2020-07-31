import React from 'react'
import StyledInfoCard from './style'
import Animation from 'components/Animation'

import { motion } from 'framer-motion'

import { ResponsiveConditional } from 'commons/contexts/responsive'

const InfoCard = ({ backgroundColor, animationData, title }) => {

  // const style = {
  //   backgroundColor
  // }
  const style = {
    backgroundColor: backgroundColor || 'currentColor'
  }

  return (
    <StyledInfoCard>

      <article className="md:h-screen relative p-8 flex flex-col justify-center items-center" >

        <div className="shadow-2xl p-4 rounded-full w-64 h-64 overflow-hidden">
          <Animation animationData={animationData} />
        </div>



        <ResponsiveConditional medias={['smAndDown']}>
          <div className="w-full flex flex-col items-center text-center justify-center">
            <div className="text-4xl mt-8 font-bold font-serif">
              {title}
            </div>


            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit asperiores atque enim repudiandae nemo et minus deleniti aspernatur aut laborum expedita dolorem commodi ducimus, architecto corporis facilis dolore dicta.
          </p>
            <div className="w-8 h-8 rounded-full mx-8 flex-shrink-0" style={style} />
          </div>
        </ResponsiveConditional>

        <ResponsiveConditional medias={['mdAndUp']}>
        <div className="flex w-full items-center text-center justify-center">
            <div className="text-4xl mt-8 mb-4 font-bold font-serif w-1/2">
              {title}
            </div>

            <div className="w-8 h-8 rounded-full mx-8 flex-shrink-0" style={style} />

            <p className="w-1/2 p-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit asperiores atque enim repudiandae nemo et minus deleniti aspernatur aut laborum expedita dolorem commodi ducimus, architecto corporis facilis dolore dicta.
          </p>
             <div className="w-8 h-8 rounded-full mx-8 flex-shrink-0" style={style} />
          </div>
        </ResponsiveConditional>



      </article>

    </StyledInfoCard>
  )
}

export default InfoCard

