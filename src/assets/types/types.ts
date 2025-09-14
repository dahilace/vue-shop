export interface NavItem {
  text: string
  path: string
}

export interface ShopProduct {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: {
    count: number
    rate: number
  }
  isLiked?: boolean
}

export interface BlogPost {
  userId: number
  id: number
  title: string
  body: string
}