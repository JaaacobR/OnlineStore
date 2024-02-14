/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

/** category  */
export type Category = {
  __typename?: 'Category';
  creationAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCategoryDto = {
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateProductDto = {
  categoryId: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserDto = {
  avatar: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
};

/** Login  */
export type Login = {
  __typename?: 'Login';
  access_token: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: Category;
  addProduct: Product;
  addUser: User;
  deleteCategory: Scalars['Boolean']['output'];
  deleteProduct: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  login: Login;
  refreshToken: Login;
  updateCategory: Category;
  updateProduct: Product;
  updateUser: User;
};


export type MutationAddCategoryArgs = {
  data: CreateCategoryDto;
};


export type MutationAddProductArgs = {
  data: CreateProductDto;
};


export type MutationAddUserArgs = {
  data: CreateUserDto;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  changes: UpdateCategoryDto;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  changes: UpdateProductDto;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  changes: UpdateUserDto;
  id: Scalars['ID']['input'];
};

/** product  */
export type Product = {
  __typename?: 'Product';
  category: Category;
  creationAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category: Category;
  isAvailable: Scalars['Boolean']['output'];
  myProfile: User;
  product: Product;
  products: Array<Product>;
  user: User;
  users: Array<User>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryIsAvailableArgs = {
  email: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_max?: InputMaybe<Scalars['Int']['input']>;
  price_min?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
};

export enum Role {
  Admin = 'admin',
  Customer = 'customer'
}

export type UpdateCategoryDto = {
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductDto = {
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
};

/** product  */
export type User = {
  __typename?: 'User';
  avatar: Scalars['String']['output'];
  creationAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};
