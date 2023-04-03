import React from 'react'

export const Offer = ({ url, title }) => {
  return (
    <div className="our-offer__item">
      <div className="our-offer__image">
        <img src={url} alt={title} />
      </div>
      <h4 className="our-offer__name">{title}</h4>
    </div>
  )
}
