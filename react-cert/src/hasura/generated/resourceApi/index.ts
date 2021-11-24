export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  int2vector: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Jokes" */
export type Jokes = {
  __typename?: 'Jokes';
  categories: Scalars['int2vector'];
  created_at: Scalars['timestamptz'];
  icon_url: Scalars['String'];
  id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "Jokes" */
export type Jokes_Aggregate = {
  __typename?: 'Jokes_aggregate';
  aggregate?: Maybe<Jokes_Aggregate_Fields>;
  nodes: Array<Jokes>;
};

/** aggregate fields of "Jokes" */
export type Jokes_Aggregate_Fields = {
  __typename?: 'Jokes_aggregate_fields';
  avg?: Maybe<Jokes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Jokes_Max_Fields>;
  min?: Maybe<Jokes_Min_Fields>;
  stddev?: Maybe<Jokes_Stddev_Fields>;
  stddev_pop?: Maybe<Jokes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Jokes_Stddev_Samp_Fields>;
  sum?: Maybe<Jokes_Sum_Fields>;
  var_pop?: Maybe<Jokes_Var_Pop_Fields>;
  var_samp?: Maybe<Jokes_Var_Samp_Fields>;
  variance?: Maybe<Jokes_Variance_Fields>;
};


/** aggregate fields of "Jokes" */
export type Jokes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Jokes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Jokes_Avg_Fields = {
  __typename?: 'Jokes_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Jokes". All fields are combined with a logical 'AND'. */
export type Jokes_Bool_Exp = {
  _and?: Maybe<Array<Jokes_Bool_Exp>>;
  _not?: Maybe<Jokes_Bool_Exp>;
  _or?: Maybe<Array<Jokes_Bool_Exp>>;
  categories?: Maybe<Int2vector_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  icon_url?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Jokes" */
export enum Jokes_Constraint {
  /** unique or primary key constraint */
  JokesPkey = 'Jokes_pkey'
}

/** input type for incrementing numeric columns in table "Jokes" */
export type Jokes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Jokes" */
export type Jokes_Insert_Input = {
  categories?: Maybe<Scalars['int2vector']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Jokes_Max_Fields = {
  __typename?: 'Jokes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Jokes_Min_Fields = {
  __typename?: 'Jokes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Jokes" */
export type Jokes_Mutation_Response = {
  __typename?: 'Jokes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jokes>;
};

/** on conflict condition type for table "Jokes" */
export type Jokes_On_Conflict = {
  constraint: Jokes_Constraint;
  update_columns?: Array<Jokes_Update_Column>;
  where?: Maybe<Jokes_Bool_Exp>;
};

/** Ordering options when selecting data from "Jokes". */
export type Jokes_Order_By = {
  categories?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  icon_url?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: Jokes */
export type Jokes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Jokes" */
export enum Jokes_Select_Column {
  /** column name */
  Categories = 'categories',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  IconUrl = 'icon_url',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "Jokes" */
export type Jokes_Set_Input = {
  categories?: Maybe<Scalars['int2vector']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Jokes_Stddev_Fields = {
  __typename?: 'Jokes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Jokes_Stddev_Pop_Fields = {
  __typename?: 'Jokes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Jokes_Stddev_Samp_Fields = {
  __typename?: 'Jokes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Jokes_Sum_Fields = {
  __typename?: 'Jokes_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Jokes" */
export enum Jokes_Update_Column {
  /** column name */
  Categories = 'categories',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  IconUrl = 'icon_url',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Jokes_Var_Pop_Fields = {
  __typename?: 'Jokes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Jokes_Var_Samp_Fields = {
  __typename?: 'Jokes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Jokes_Variance_Fields = {
  __typename?: 'Jokes_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  category_name: Scalars['String'];
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Categories_Bool_Exp>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Categories_Bool_Exp>>;
  category_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  category_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  category_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  category_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  category_name?: Maybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  category_name: Scalars['String'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CategoryName = 'category_name'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  category_name?: Maybe<Scalars['String']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CategoryName = 'category_name'
}

/** Boolean expression to compare columns of type "int2vector". All fields are combined with logical 'AND'. */
export type Int2vector_Comparison_Exp = {
  _eq?: Maybe<Scalars['int2vector']>;
  _gt?: Maybe<Scalars['int2vector']>;
  _gte?: Maybe<Scalars['int2vector']>;
  _in?: Maybe<Array<Scalars['int2vector']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['int2vector']>;
  _lte?: Maybe<Scalars['int2vector']>;
  _neq?: Maybe<Scalars['int2vector']>;
  _nin?: Maybe<Array<Scalars['int2vector']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Jokes" */
  delete_Jokes?: Maybe<Jokes_Mutation_Response>;
  /** delete single row from the table: "Jokes" */
  delete_Jokes_by_pk?: Maybe<Jokes>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** insert data into the table: "Jokes" */
  insert_Jokes?: Maybe<Jokes_Mutation_Response>;
  /** insert a single row into the table: "Jokes" */
  insert_Jokes_one?: Maybe<Jokes>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** update data of the table: "Jokes" */
  update_Jokes?: Maybe<Jokes_Mutation_Response>;
  /** update single row of the table: "Jokes" */
  update_Jokes_by_pk?: Maybe<Jokes>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
};


/** mutation root */
export type Mutation_RootDelete_JokesArgs = {
  where: Jokes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jokes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  category_name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_JokesArgs = {
  objects: Array<Jokes_Insert_Input>;
  on_conflict?: Maybe<Jokes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jokes_OneArgs = {
  object: Jokes_Insert_Input;
  on_conflict?: Maybe<Jokes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_JokesArgs = {
  _inc?: Maybe<Jokes_Inc_Input>;
  _set?: Maybe<Jokes_Set_Input>;
  where: Jokes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jokes_By_PkArgs = {
  _inc?: Maybe<Jokes_Inc_Input>;
  _set?: Maybe<Jokes_Set_Input>;
  pk_columns: Jokes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Jokes" */
  Jokes: Array<Jokes>;
  /** fetch aggregated fields from the table: "Jokes" */
  Jokes_aggregate: Jokes_Aggregate;
  /** fetch data from the table: "Jokes" using primary key columns */
  Jokes_by_pk?: Maybe<Jokes>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
};


export type Query_RootJokesArgs = {
  distinct_on?: Maybe<Array<Jokes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jokes_Order_By>>;
  where?: Maybe<Jokes_Bool_Exp>;
};


export type Query_RootJokes_AggregateArgs = {
  distinct_on?: Maybe<Array<Jokes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jokes_Order_By>>;
  where?: Maybe<Jokes_Bool_Exp>;
};


export type Query_RootJokes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  category_name: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Jokes" */
  Jokes: Array<Jokes>;
  /** fetch aggregated fields from the table: "Jokes" */
  Jokes_aggregate: Jokes_Aggregate;
  /** fetch data from the table: "Jokes" using primary key columns */
  Jokes_by_pk?: Maybe<Jokes>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
};


export type Subscription_RootJokesArgs = {
  distinct_on?: Maybe<Array<Jokes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jokes_Order_By>>;
  where?: Maybe<Jokes_Bool_Exp>;
};


export type Subscription_RootJokes_AggregateArgs = {
  distinct_on?: Maybe<Array<Jokes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jokes_Order_By>>;
  where?: Maybe<Jokes_Bool_Exp>;
};


export type Subscription_RootJokes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  category_name: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type JokesFieldsFragment = { __typename?: 'Jokes', categories: any, created_at: any, icon_url: string, id: number, updated_at: any, url: string, value: string };
