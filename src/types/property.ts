export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  propertyType: PropertyType;
  status: PropertyStatus;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  yearBuilt: number;
  images: string[];
  amenities: string[];
  features: string[];
  listedDate: string;
  lastUpdated: string;
  agent: Agent;
  views: number;
  favorites: number;
}

export type PropertyType = 
  | 'house' 
  | 'apartment' 
  | 'condo' 
  | 'townhouse' 
  | 'land' 
  | 'commercial';

export type PropertyStatus = 
  | 'available' 
  | 'pending' 
  | 'sold' 
  | 'rented';

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  rating: number;
  properties: number;
}

export interface PropertyFilters {
  propertyType?: PropertyType[];
  status?: PropertyStatus[];
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
  minBathrooms?: number;
  maxBathrooms?: number;
  minArea?: number;
  maxArea?: number;
  city?: string;
  state?: string;
  searchQuery?: string;
}

export interface PropertyStats {
  totalProperties: number;
  availableProperties: number;
  soldProperties: number;
  totalRevenue: number;
  averagePrice: number;
  totalViews: number;
}
