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
  Date: { input: any; output: any; }
};

export type BoardReturn = {
  __typename?: 'BoardReturn';
  contents?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  like?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  writer?: Maybe<Scalars['String']['output']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CreateProductInput = {
  detail?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard?: Maybe<Return>;
  createProduct?: Maybe<Return>;
  createProfile?: Maybe<Return>;
  deleteBoard?: Maybe<Return>;
  deleteProduct?: Maybe<Return>;
  deleteProfile?: Maybe<Return>;
  updateBoard?: Maybe<Return>;
  updateProduct?: Maybe<Return>;
  updateProfile?: Maybe<Return>;
};


export type MutationCreateBoardArgs = {
  contents?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  writer?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
  seller?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProfileArgs = {
  age?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  school?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteBoardArgs = {
  number?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteProductArgs = {
  productId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteProfileArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateBoardArgs = {
  contents?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  writer?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProductArgs = {
  productId?: InputMaybe<Scalars['ID']['input']>;
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateProfileArgs = {
  age?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  school?: InputMaybe<Scalars['String']['input']>;
};

export type ProductReturn = {
  __typename?: 'ProductReturn';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  detail?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  seller?: Maybe<Scalars['String']['output']>;
};

export type ProfileReturn = {
  __typename?: 'ProfileReturn';
  age?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  school?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  fetchBoard?: Maybe<BoardReturn>;
  fetchBoards?: Maybe<Array<BoardReturn>>;
  fetchBoardsCount: Scalars['Int']['output'];
  fetchProduct?: Maybe<ProductReturn>;
  fetchProducts?: Maybe<Array<ProductReturn>>;
  fetchProductsCount: Scalars['Int']['output'];
  fetchProfile?: Maybe<ProfileReturn>;
  fetchProfiles?: Maybe<Array<ProfileReturn>>;
  fetchProfilesCount: Scalars['Int']['output'];
};


export type QueryFetchBoardArgs = {
  number?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchBoardsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchProductArgs = {
  productId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFetchProductsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchProfileArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchProfilesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Return = {
  __typename?: 'Return';
  _id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
};

export type UpdateProductInput = {
  detail?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};
