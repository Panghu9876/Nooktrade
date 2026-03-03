
export enum ItemCategory {
  FURNITURE = 'Furniture',
  ART = 'Art',
  TURNIPS = 'Turnips',
  DIY = 'DIY Recipes',
  CLOTHING = 'Clothing'
}

export interface ArtItem {
  id: string;
  name: string;
  isReal: boolean;
  description: string;
  rarity: 'Common' | 'Rare' | 'Ultra-Rare';
  imageUrl: string;
  fakeDetail: string;
}

export interface Listing {
  id: string;
  title: string;
  category: ItemCategory;
  price: string;
  seller: string;
  sellerAvatar: string;
  sellerRating: number;
  timestamp: string;
  imageUrl: string;
  description: string;
  hemisphere: 'North' | 'South';
}

export interface TurnipPricePoint {
  day: string;
  period: 'AM' | 'PM';
  price: number;
}

export interface UserProfile {
  nickname: string;
  islandName: string;
  hemisphere: 'North' | 'South';
  passportNumber?: string;
  avatarUrl?: string;
}
