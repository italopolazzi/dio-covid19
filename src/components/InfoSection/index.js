import React from 'react'
import StyledInfoSection from './style'
import Animation from 'components/Animation'

import useScrollAnimation from 'commons/hooks/useScrollAnimation'

import { ResponsiveConditional } from 'commons/contexts/responsive'

const InfoSectionSmallLayout = ({
  animationData,
  title
}) => {
  return (
    <>
      <div className="info-section__animation">
        <Animation animationData={animationData} />
      </div>
      <div className="info-section__sheet info-section__sheet--sm">
        <div className="info-section__title">
          {title}
        </div>
        <p className="info-section__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit asperiores atque enim repudiandae nemo et minus deleniti aspernatur aut laborum expedita dolorem commodi ducimus, architecto corporis facilis dolore dicta.
          </p>
      </div>
    </>
  )
}

const InfoSectionMediumLayout = ({
  animationData,
  title,
  index, 
  backgroundColor
}) => {

  const dotStyle = {
    backgroundColor: backgroundColor || 'currentColor'
  }

  const getEverOrOddModifierByRowIndex = () => {
    const isEvenRow = index % 2
    return isEvenRow ? 'even' : 'odd'
  }

  return (
    <>
      <div className={`info-section__row info-section__row--${getEverOrOddModifierByRowIndex()}`}>
        <div className="info-section__animation-container">
          <div className="info-section__animation">
            <Animation animationData={animationData} />
          </div>
        </div>
        <div className="info-section__sheet info-section__sheet--md">
          <div className="info-section__title">{title}</div>
          <p className="info-section__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit asperiores atque enim repudiandae nemo et minus deleniti aspernatur aut laborum expedita dolorem commodi ducimus, architecto corporis facilis dolore dicta.
                </p>
          <div className="info-section__dot" style={dotStyle} />
        </div>
      </div>
    </>
  )
}

const InfoSection = (props) => {
  const sectionRef = useScrollAnimation({ direction: 'vertical' })
  
  const { backgroundColor, prevColor } = props

  return (
    <StyledInfoSection ref={sectionRef} prevColor={prevColor}>
      <article className="info-section__article" style={{ backgroundColor }} >

        <ResponsiveConditional medias={['smAndDown']}>
          <InfoSectionSmallLayout {...props} />
        </ResponsiveConditional>

        <ResponsiveConditional medias={['mdAndUp']}>
          <InfoSectionMediumLayout {...props} />
        </ResponsiveConditional>

      </article>
    </StyledInfoSection>
  )
}

export default InfoSection

