import React from 'react'
import Carditems from './Carditems'
import './Cards.css'
import styles from '../styles/Global.module.scss'
import { useInView } from "react-intersection-observer";
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Cards() {
  const { ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0
  });
  const { ref: cards, inView: cardsInView} = useInView({
    triggerOnce: true,
    threshold: 0
  });

  return (
    <div className='cards'>
      <div ref={ref}>
        <h1 id='learn' className={`${inView ? styles.animationFade : styles.hidden}`}>Learn more about me and my projects!</h1>
        </div>
          <div ref={cards} className={`${styles.cardsContainer}`}>
            <div className={`${styles.cardsWrapper} ${ cardsInView ? styles.animationFade : styles.hidden}`}>
                <ul className='cardsItems'>
                <AnchorLink className='cardAnchor' href='#aboutme' >
                  <Carditems src='/devportfolio/images/DSC06958_card.jpg' text="Hi, my name is Markel Bradford, and I am an aspiring full-stack developer!" label='About Me' path='#aboutme' />
                </AnchorLink>
                <AnchorLink className='cardAnchor' href='#projects' >
                <Carditems src='/devportfolio/images/safarigame.PNG' text='Please take a look at the projects that I have completed.' label='My Projects' path='#projects' />
                </AnchorLink>
                <AnchorLink className='cardAnchor' href='#contact' >
                <Carditems className='contact-me' src='/devportfolio/images/contact.jpg' text='Connect with me on LinkedIn or via email!' label='Contact Me' path='#contact' />
                </AnchorLink>
                </ul>
            </div>
          </div>    
    </div>
  )
}

export default Cards;
