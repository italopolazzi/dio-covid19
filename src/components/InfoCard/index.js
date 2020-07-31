import React from 'react'
import StyledInfoCard from './style'
import Animation from 'components/Animation'

import { motion } from 'framer-motion'

import { ResponsiveConditional } from 'commons/contexts/responsive'

const InfoCard = ({ backgroundColor, animationData, title, index }) => {

  const isEvenRow = () => index % 2
  const getIndexRowSpecialClass = () => isEvenRow() ? 'even-row' : 'odd-row'

  const style = {
    backgroundColor: backgroundColor || 'currentColor'
  }

  return (
    <StyledInfoCard>

      <article className="relative p-8 flex flex-col justify-center items-center" >

        <ResponsiveConditional medias={['smAndDown']}>
          <div className="shadow-2xl p-4 rounded-full w-64 h-64 overflow-hidden">
            <Animation animationData={animationData} />
          </div>
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
          <div className={`flex items-center ${getIndexRowSpecialClass()}`}>

            <div className="w-1/2 flex items-center justify-center">
              <div className="shadow-2xl p-4 rounded-full w-64 h-64 overflow-hidden">
                <Animation animationData={animationData} />
              </div>
            </div>

            <div className="w-1/2 p-8 flex flex-col items-center justify-center">
              <div className="text-4xl mt-8 font-bold font-serif">{title}</div>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit asperiores atque enim repudiandae nemo et minus deleniti aspernatur aut laborum expedita dolorem commodi ducimus, architecto corporis facilis dolore dicta.
                </p>
              <div className="w-8 h-8 rounded-full mx-8 flex-shrink-0" style={style} />
            </div>

          </div>


        </ResponsiveConditional>



      </article>

    </StyledInfoCard>
  )
}

export default InfoCard

