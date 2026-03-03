
import { ArtItem, Listing, ItemCategory, TurnipPricePoint } from './types';

export const COLORS = {
  leaf: '#B1D34A',
  sky: '#E0F2F1',
  sand: '#FFF9C4',
  clay: '#D4A373',
  peach: '#FBC4AB',
  white: '#FFFFFF',
  text: '#5D5D5D'
};

export const MOCK_ART_ITEMS: ArtItem[] = [
  {
    id: '1',
    name: 'Academic Painting',
    isReal: true,
    description: 'A masterpiece by Leonardo da Vinci.',
    rarity: 'Common',
    imageUrl: 'https://picsum.photos/seed/art1/300/300',
    fakeDetail: 'Coffee stain in the top right corner.'
  },
  {
    id: '2',
    name: 'Amazing Painting',
    isReal: true,
    description: 'Rembrandt’s Night Watch.',
    rarity: 'Rare',
    imageUrl: 'https://picsum.photos/seed/art2/300/300',
    fakeDetail: 'The main figure is missing his hat.'
  }
];

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 'l1',
    title: '鈴錢灣',
    category: ItemCategory.TURNIPS,
    price: '542 鈴錢',
    seller: '狸克',
    sellerAvatar: 'https://picsum.photos/seed/avatar1/100/100',
    sellerRating: 4.9,
    timestamp: '約 45分',
    imageUrl: 'https://picsum.photos/seed/item1/300/300',
    description: '請勿奔跑 歡迎小費 由機場離開',
    hemisphere: 'North'
  },
  {
    id: 'l2',
    title: '服務中心島',
    category: ItemCategory.TURNIPS,
    price: '380 鈴錢',
    seller: '西施惠',
    sellerAvatar: 'https://picsum.photos/seed/avatar2/100/100',
    sellerRating: 4.7,
    timestamp: '約 10分',
    imageUrl: 'https://picsum.photos/seed/item2/300/300',
    description: '免費入場 開放摸摸',
    hemisphere: 'South'
  },
  {
    id: 'l3',
    title: '博物館灣',
    category: ItemCategory.TURNIPS,
    price: '156 鈴錢',
    seller: '傅達',
    sellerAvatar: 'https://picsum.photos/seed/avatar3/100/100',
    sellerRating: 5.0,
    timestamp: '約 0分',
    imageUrl: 'https://picsum.photos/seed/item3/300/300',
    description: '歡迎為博物館捐款',
    hemisphere: 'North'
  },
  {
    id: 'l4',
    title: '大頭菜神島',
    category: ItemCategory.TURNIPS,
    price: '612 鈴錢',
    seller: '曹賣',
    sellerAvatar: 'https://picsum.photos/seed/avatar4/100/100',
    sellerRating: 4.8,
    timestamp: '約 2分',
    imageUrl: 'https://picsum.photos/seed/item4/300/300',
    description: '價格最高 快速通行',
    hemisphere: 'South'
  },
  {
    id: 'l5',
    title: '南半球小徑',
    category: ItemCategory.TURNIPS,
    price: '425 鈴錢',
    seller: '莫里',
    sellerAvatar: 'https://picsum.photos/seed/avatar5/100/100',
    sellerRating: 4.5,
    timestamp: '約 15分',
    imageUrl: 'https://picsum.photos/seed/item5/300/300',
    description: '南半球歡迎你',
    hemisphere: 'South'
  }
];

export const MOCK_TURNIP_DATA: TurnipPricePoint[] = [
  { day: 'Sun', period: 'AM', price: 102 },
  { day: 'Mon', period: 'AM', price: 90 },
  { day: 'Mon', period: 'PM', price: 85 },
  { day: 'Tue', period: 'AM', price: 110 },
  { day: 'Tue', period: 'PM', price: 145 },
  { day: 'Wed', period: 'AM', price: 320 },
  { day: 'Wed', period: 'PM', price: 580 },
  { day: 'Thu', period: 'AM', price: 180 },
  { day: 'Thu', period: 'PM', price: 120 },
  { day: 'Fri', period: 'AM', price: 105 },
  { day: 'Fri', period: 'PM', price: 95 },
  { day: 'Sat', period: 'AM', price: 82 },
  { day: 'Sat', period: 'PM', price: 70 }
];
