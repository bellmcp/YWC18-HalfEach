export interface CategoryType {
    name: string;
    subcategories: string[];
  }

  export interface MerchantType {
    key: number,
    shopNameTH: string;
    categoryName: string;
    subcategoryName: string;
    coverImageId: string;
    facilities: string[];
    priceLevel: number,
    isOpen: string;
    highlightText: string;
    recommendedItems: string[];
    addressProvinceName: string;
    addressDistrictName: string;
  }