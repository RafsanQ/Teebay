import { gql } from '@apollo/client';


export const GET_PRODUCTS = gql`
query{
    products{
        id,
        title,
        description,
        price,
      	rentPrice,
      	rentDuration,
        created_at,
        owner{
            id
        },
        categories {
            id,
            title,
            created_at
        }
    }
}
`

export const GET_PRODUCTS_BY_USER = gql`
query getProductsByUser($userId: Int!){
  productsOwnedBy(ownerId: $userId) {
    id,
    title,
    description,
    price,
    rentPrice,
    rentDuration,
    created_at,
    owner{
        id
    },
    categories {
        title
    }
  }
}
`

export const GET_SINGLE_PRODUCT = gql`
query getSingleProduct($productId: Int!){
  getSingleProduct(productId: $productId) {
    id,
    title,
    price,
    rentPrice
    rentDuration,
    description,
    owner{
      name,
      email
    }
		categories {
		  id,
      title
		},
    created_at
  }
}
`
export const GET_THIS_PRODUCTS_CATEGORIES = gql`
query getThisProductsCategories($productId: Int!){
  getSingleProduct(productId: $productId){
		categories {
		  id,
      title
		}
  }
}
`

export const GET_ALL_PRODUCT_CATEGORIES = gql`
query{
  getAllProductCategories{
    id,
    title
  }
}
`

export const UPDATE_PRODUCT = gql`
mutation updateProduct($productId: ID!, $title: String!, $description: String!, $price: Int!, $rentPrice: Int!, $rentDuration: String!){
  updateProduct(productUpdateInput: {id: $productId, title: $title, description: $description, price: $price, rentPrice: $rentPrice, rentDuration: $rentDuration}){
    id,
    title,
    price,
    description,
    rentPrice,
    rentDuration,
  }
}
`

export const ADD_CATEGORY = gql`
mutation addCategory($productId: Int!, $categoryId: Int!){
  addCategory(productId: $productId, categoryId: $categoryId){
    categories {
      id,
      title
    }
  }
}
`

export const CLEAR_ALL_CATEGORIES = gql`
mutation addCategory($productId: Int!){
  clearAllCategories(productId: $productId){
    id,
  }
}
`

export const DELETE_PRODUCT = gql`
mutation deleteProduct($productId: Int!){
  deleteProduct(productId: $productId){
    id,
  }
}
`

export const CREATE_NEW_PRODUCT = gql`
mutation createNewProduct($title: String!, $description: String, $price: Int!, $rentPrice: Int!, $rentDuration: String!, $userId: Int!){
  createProduct(productInput: {title: $title, description: $description, price: $price, rentPrice: $rentPrice, rentDuration: $rentDuration, userId: $userId}){
    id,
    title,
    description
  }
}
`