import { PriceList } from "./type"

export const PriceDetails: Array<PriceList> = [
  {
    id: 1,
    type: 'Starter',
    isPrice: true,
    price: '$19',
    metaData: ['500 MAUs', '3projects', 'Unlimited guides', 'Unlimited flows', 'Unlimited branded themes', 'Email support']
  },
  {
    id: 2,
    type: 'Pro',
    isPrice: true,
    price: '$99',
    metaData: ['All starter features, plus:', 'Unlimited projects', 'Unlimited fully customizable themes', 'A dedicated Customer Success Manager'],
    priceMetaData: [
      {
        price: '$99',
        MAUs: '2500'
      },
      {
        price: '$165',
        MAUs: '5000'
      }
    ]

  },
  {
    id: 3,
    type: 'Enterprise',
    isPrice: false,
    priceText: `Let's Talk!`,
    metaData: ['All Pro features', 'Unlimited MAUS', 'Dedicated environment', 'Enterprise account administration', 'Premium support and services'],
  }
]