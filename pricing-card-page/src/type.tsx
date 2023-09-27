export interface PriceList {
  id: number,
  type: string,
  isPrice: boolean,
  price?: string,
  metaData: Array<string>,
  priceMetaData?: { price: string, MAUs: string }[]
  priceText?: string;
  isSelectUser: boolean;
  isActive: boolean
}