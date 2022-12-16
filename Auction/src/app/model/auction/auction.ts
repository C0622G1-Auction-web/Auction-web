import {Product} from '../product/product';

export interface Auction {
  id?: number;
  currentPrice?: string;
  auctionTime?: string;
  product?: Product;

  id?: number,
  currentPrice: number,
  auctionTime: string,
  auctionStatus: boolean,
  deleteStatus: boolean
}
