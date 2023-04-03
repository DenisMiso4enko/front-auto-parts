import '../../../../scss/components/_ourOffer.scss'
import { Offer } from '../../Offer'

export const OurOffer = () => {
  return (
    <section className='our-offer'>
      <div className="wrapper">
        <div className="our-offer__body">
          <h2 className="our-offer__title">Что мы предлагаем?</h2>
          <div className="our-offer__list">
            {/* Сделаем через map() */}
            <Offer url={'/vite.svg'} title={'Наша услуга 1'}/>
            <Offer url={'/vite.svg'} title={'Наша услуга 2'}/>
            <Offer url={'/vite.svg'} title={'Наша услуга 3'}/>
            <Offer url={'/vite.svg'} title={'Наша услуга 4'}/>
          </div>
        </div>
      </div>
    </section>
  )
}