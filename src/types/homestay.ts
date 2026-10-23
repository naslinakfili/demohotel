export type ModeType = 'homestay' | 'villa';

export interface HighlightItem {
  icon: string;
  title: string;
  desc: string;
}

export interface BookingOption {
  name: string;
  price: number;
}

export interface ModeConfig {
  brandSubtitle: string;
  navKatalog: string;
  heroImage: string;
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  address: string;
  locPoints: [string, string, string];
  highlights: HighlightItem[];
  options: BookingOption[];
}

export interface RoomItem {
  id: string;
  name: string;
  badge: string;
  isPopular?: boolean;
  image: string;
  capacity: string;
  features: { icon: string; text: string; color: string }[];
  price: number;
  calcRoomName: string;
}

export interface VillaPackage {
  id: string;
  type: string;
  title: string;
  price: number;
  isPopular?: boolean;
  features: string[];
  calcRoomName: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

