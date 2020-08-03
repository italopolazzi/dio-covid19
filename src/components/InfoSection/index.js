import React from 'react'
import StyledInfoSection from './style'
import Animation from 'components/Animation'

import useScrollAnimation from 'commons/hooks/useScrollAnimation'

import { ResponsiveConditional } from 'commons/contexts/responsive'

const InfoSection = ({ backgroundColor, prevColor, animationData, title, index }) => {

  const isEvenRow = () => index % 2
  const getIndexRowSpecialClass = () => isEvenRow() ? 'even-row' : 'odd-row'

  const sectionRef = useScrollAnimation({ direction: 'vertical' })

  const style = {
    backgroundColor: backgroundColor || 'currentColor'
  }

  return (
    <StyledInfoSection ref={sectionRef} prevColor={prevColor}>
      <article className="info-section__article" style={{ backgroundColor }} >

        <ResponsiveConditional medias={['smAndDown']}>
          <div className="info-section__animation">
            <Animation animationData={animationData} />
          </div>
          <div className="info-section__sheet w-full">
            <div className="info-section__title">
              {title}
            </div>
            <p className="info-section__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit asperiores atque enim repudiandae nemo et minus deleniti aspernatur aut laborum expedita dolorem commodi ducimus, architecto corporis facilis dolore dicta.
          </p>
          </div>
        </ResponsiveConditional>

        <ResponsiveConditional medias={['mdAndUp']}>
          <div className={`flex items-center ${getIndexRowSpecialClass()}`}>
            <div className="w-1/2 flex items-center justify-center">
              <div className="info-section__animation">
                <Animation animationData={animationData} />
              </div>
            </div>
            <div className="info-section__sheet w-1/2 bg-white p-8">
              <div className="info-section__title">{title}</div>
              <p className="info-section__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit asperiores atque enim repudiandae nemo et minus deleniti aspernatur aut laborum expedita dolorem commodi ducimus, architecto corporis facilis dolore dicta.
                </p>
              <div className="info-section__dot" style={style} />
            </div>
          </div>
        </ResponsiveConditional>

      </article>
    </StyledInfoSection>
  )
}

export default InfoSection

