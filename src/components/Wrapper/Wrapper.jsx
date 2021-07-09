import './style.scss'

import { IoChevronForward } from 'react-icons/io5'

import iPhone1Small from '../../assets/iphone1small.jpg'
import AirTagThree from '../../assets/airtagthree.jpg'
import iPhone2Two from '../../assets/iphone2two.jpg'
import MusicThree from '../../assets/musicthree.jpg'
import WatchThree from '../../assets/watchthree.jpg'
import AirTagTwo from '../../assets/airtagtwo.jpg'
import iMacThree from '../../assets/imacthree.jpg'
import WatchTwo from '../../assets/watchtwo.jpg'
import MusicTwo from '../../assets/musictwo.jpg'
import iOSThree from '../../assets/iosthree.jpg'
import iPhone1 from '../../assets/iphone1.jpg'
import iPhone2 from '../../assets/iphone2.jpg'
import iMacTwo from '../../assets/imactwo.jpg'
import iPadTwo from '../../assets/ipadtwo.jpg'
import TvThree from '../../assets/tvthree.jpg'
import AirTag from '../../assets/airtag.jpg'
import iOSTwo from '../../assets/iostwo.jpg'
import Watch from '../../assets/watch.jpg'
import Music from '../../assets/music.jpg'
import TvTwo from '../../assets/tvtwo.jpg'
import iPad from '../../assets/ipad.jpg'
import iMac from '../../assets/imac.jpg'
import iOS from '../../assets/ios.jpg'
import Tv from '../../assets/tv.jpg'

import {
  IoLogoApple,
  IoPlayCircle
} from 'react-icons/io5'

import { FiArrowUpRight } from 'react-icons/fi'

export default function Wrapper() {
  return (
    <div className="wrapper">
      <div className="wrapper__shop">
        <span>
          <a href="/">Compre online</a> com assistência de especialistas, entrega grátis e muito mais.
        </span>
      </div>
      <section href="/" className="banner">
        <div className="banner__content">
          <h1 className="banner__title">iPhone 12</h1>
          <h2 className="banner__subtitle">Rápido que é uma beleza.</h2>
          <div className="banner__links">
            <a href="/" className="banner__link">
              <span>Saiba mais</span>
              <IoChevronForward />
            </a>
            <a href="/" className="banner__link">
              <span>Comprar</span>
              <IoChevronForward />
            </a>
          </div>
          <img src={iPhone1} alt="iPhone 12" className="banner__image" />
          <img src={iPhone1Small} alt="iPhone 12" className="banner__image two" />
        </div>
      </section>
      <section href="/" className="banner">
        <div className="banner__content">
          <h1 className="banner__title black">iPhone 12 Pro</h1>
          <h2 className="banner__subtitle black">Um salto radical.</h2>
          <div className="banner__links">
            <a href="/" className="banner__link black">
              <span>Saiba mais</span>
              <IoChevronForward />
            </a>
            <a href="/" className="banner__link black">
              <span>Comprar</span>
              <IoChevronForward />
            </a>
          </div>
          <img src={iPhone2} alt="iPhone 12 Pro" className="banner__image" />
          <img src={iPhone2Two} alt="iPhone 12 Pro" className="banner__image two" />
        </div>
      </section>
      <section href="/" className="banner">
        <div className="banner__content after">
          <h1 className="banner__title black">iPad Pro</h1>
          <h2 className="banner__subtitle black">O poderoso chip M1 da Apple está aqui.</h2>
          <div className="banner__links">
            <a href="/" className="banner__link black">
              <span>Saiba mais</span>
              <IoChevronForward />
            </a>
            <a href="/" className="banner__link black">
              <span>Comprar</span>
              <IoChevronForward />
            </a>
          </div>
          <img src={iPad} alt="iPad Pro" className="banner__image" />
          <img src={iPadTwo} alt="iPad Pro" className="banner__image two" />
        </div>
      </section>

      <section className="banner__grid">
        <section href="/" className="banner large">
          <div className="banner__content a-half">
            <h1 className="banner__title a-half">iMac</h1>
            <h2 className="banner__subtitle a-half">Diga olá.</h2>
            <div className="banner__links">
              <a href="/" className="banner__link a-half">
                <span>Saiba mais</span>
                <IoChevronForward />
              </a>
              <a href="/" className="banner__link a-half">
                <span>Comprar</span>
                <IoChevronForward />
              </a>
            </div>
            <img src={iMac} alt="iMac" className="banner__image" />
            <img src={iMacTwo} alt="iMac" className="banner__image two-small" />
            <img src={iMacThree} alt="iMac" className="banner__image three-small" />
          </div>
        </section>
        <section href="/" className="banner large">
          <div className="banner__content a-half">
            <h1 className="banner__title a-half">Coleção internacional</h1>
            <h2 className="banner__subtitle a-half">Uma pulseira para dada torcida.</h2>
            <div className="banner__links">
              <a href="/" className="banner__link a-half">
                <span>Ver a coleção</span>
                <IoChevronForward />
              </a>
            </div>
            <img src={Watch} alt="Apple Watch" className="banner__image" />
            <img src={WatchTwo} alt="Apple Watch" className="banner__image two-small" />
            <img src={WatchThree} alt="Apple Watch" className="banner__image three-small" />
          </div>
        </section>
      </section>

      <section className="banner__grid small">
        <section href="/" className="banner large">
          <div className="banner__content a-half">
            <h1 className="banner__title a-half">iOS 15</h1>
            <h2 className="banner__subtitle a-half" style={{textAlign: 'center'}}>Ligado no mundo.<br />E no momento.</h2>
            <div className="banner__links">
              <a href="/" className="banner__link a-half">
                <span>Conferir a prévia</span>
                <IoChevronForward />
              </a>
            </div>
            <img src={iOS} alt="iOS 15" className="banner__image" />
            <img src={iOSTwo} alt="iOS 15" className="banner__image two-small" />
            <img src={iOSThree} alt="iOS 15" className="banner__image three-small" />
          </div>
        </section>
        <section href="/" className="banner large">
          <div className="banner__content a-half">
            <h1 className="banner__title a-half">AirTag</h1>
            <h2 className="banner__subtitle a-half">Você não perde por usar.</h2>
            <div className="banner__links">
              <a href="/" className="banner__link a-half">
                <span>Saiba mais</span>
                <IoChevronForward />
              </a>
              <a href="/" className="banner__link a-half">
                <span>Comprar</span>
                <IoChevronForward />
              </a>
            </div>
            <img src={AirTag} alt="iOS 15" className="banner__image" />
            <img src={AirTagTwo} alt="iOS 15" className="banner__image two-small" />
            <img src={AirTagThree} alt="iOS 15" className="banner__image three-small" />
          </div>
        </section>
      </section>
        
      <section className="banner__grid small">
        <section href="/" className="banner large ok">
          <div className="banner__content a-half">
            <h1 className="banner__title a-half" style={{color: '#fff'}}>
              <IoLogoApple />Music
            </h1>
            <h2 className="banner__subtitle a-half" style={{textAlign: 'center', color: '#fff'}}>
              Apresentando o áudio
              <br />
              espacial com Dolby Atmos
            </h2>
            <div className="banner__links">
              <a href="/" className="banner__link a-half" style={{color: '#fff'}}>
                <span>Ouvir agora¹</span>
                <FiArrowUpRight />
              </a>
            </div>
            <img src={Music} alt="iOS 15" className="banner__image" />
            <img src={MusicTwo} alt="iOS 15" className="banner__image two-small" />
            <img src={MusicThree} alt="iOS 15" className="banner__image three-small" />
          </div>
        </section>
        <section href="/" className="banner large">
          <div className="banner__content a-half">
            <h1 className="banner__title a-half" style={{color: '#fff'}}>
              <IoLogoApple />tv+
            </h1>
            <h2 className="banner__subtitle a-half" style={{color: '#fff'}}>Ainda mais originais.</h2>
            <div className="banner__links">
              <a href="/" className="banner__link a-half" style={{color: '#fff'}}>
                <span>Veja mais</span>
                <IoPlayCircle />
              </a>
            </div>
            <img src={Tv} alt="iOS 15" className="banner__image" />
            <img src={TvTwo} alt="iOS 15" className="banner__image two-small" />
            <img src={TvThree} alt="iOS 15" className="banner__image three-small" />
          </div>
        </section>
      </section>
    </div>
  )
}