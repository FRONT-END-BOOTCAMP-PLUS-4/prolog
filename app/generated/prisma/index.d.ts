
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model BookMark
 * 
 */
export type BookMark = $Result.DefaultSelection<Prisma.$BookMarkPayload>
/**
 * Model PostLike
 * 
 */
export type PostLike = $Result.DefaultSelection<Prisma.$PostLikePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Subscribe
 * 
 */
export type Subscribe = $Result.DefaultSelection<Prisma.$SubscribePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model PostTemp
 * 
 */
export type PostTemp = $Result.DefaultSelection<Prisma.$PostTempPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookMark`: Exposes CRUD operations for the **BookMark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookMarks
    * const bookMarks = await prisma.bookMark.findMany()
    * ```
    */
  get bookMark(): Prisma.BookMarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postLike`: Exposes CRUD operations for the **PostLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostLikes
    * const postLikes = await prisma.postLike.findMany()
    * ```
    */
  get postLike(): Prisma.PostLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscribe`: Exposes CRUD operations for the **Subscribe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscribes
    * const subscribes = await prisma.subscribe.findMany()
    * ```
    */
  get subscribe(): Prisma.SubscribeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postTemp`: Exposes CRUD operations for the **PostTemp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTemps
    * const postTemps = await prisma.postTemp.findMany()
    * ```
    */
  get postTemp(): Prisma.PostTempDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    BlogPost: 'BlogPost',
    Notification: 'Notification',
    BookMark: 'BookMark',
    PostLike: 'PostLike',
    Comment: 'Comment',
    Subscribe: 'Subscribe',
    Category: 'Category',
    PostTemp: 'PostTemp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "blogPost" | "notification" | "bookMark" | "postLike" | "comment" | "subscribe" | "category" | "postTemp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      BookMark: {
        payload: Prisma.$BookMarkPayload<ExtArgs>
        fields: Prisma.BookMarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookMarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookMarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          findFirst: {
            args: Prisma.BookMarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookMarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          findMany: {
            args: Prisma.BookMarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>[]
          }
          create: {
            args: Prisma.BookMarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          createMany: {
            args: Prisma.BookMarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookMarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>[]
          }
          delete: {
            args: Prisma.BookMarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          update: {
            args: Prisma.BookMarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          deleteMany: {
            args: Prisma.BookMarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookMarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookMarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>[]
          }
          upsert: {
            args: Prisma.BookMarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookMarkPayload>
          }
          aggregate: {
            args: Prisma.BookMarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookMark>
          }
          groupBy: {
            args: Prisma.BookMarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookMarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookMarkCountArgs<ExtArgs>
            result: $Utils.Optional<BookMarkCountAggregateOutputType> | number
          }
        }
      }
      PostLike: {
        payload: Prisma.$PostLikePayload<ExtArgs>
        fields: Prisma.PostLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          findFirst: {
            args: Prisma.PostLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          findMany: {
            args: Prisma.PostLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          create: {
            args: Prisma.PostLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          createMany: {
            args: Prisma.PostLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          delete: {
            args: Prisma.PostLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          update: {
            args: Prisma.PostLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          deleteMany: {
            args: Prisma.PostLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          upsert: {
            args: Prisma.PostLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          aggregate: {
            args: Prisma.PostLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostLike>
          }
          groupBy: {
            args: Prisma.PostLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostLikeCountArgs<ExtArgs>
            result: $Utils.Optional<PostLikeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Subscribe: {
        payload: Prisma.$SubscribePayload<ExtArgs>
        fields: Prisma.SubscribeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscribeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscribeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          findFirst: {
            args: Prisma.SubscribeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscribeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          findMany: {
            args: Prisma.SubscribeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>[]
          }
          create: {
            args: Prisma.SubscribeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          createMany: {
            args: Prisma.SubscribeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscribeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>[]
          }
          delete: {
            args: Prisma.SubscribeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          update: {
            args: Prisma.SubscribeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          deleteMany: {
            args: Prisma.SubscribeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscribeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscribeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>[]
          }
          upsert: {
            args: Prisma.SubscribeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribePayload>
          }
          aggregate: {
            args: Prisma.SubscribeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscribe>
          }
          groupBy: {
            args: Prisma.SubscribeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscribeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscribeCountArgs<ExtArgs>
            result: $Utils.Optional<SubscribeCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      PostTemp: {
        payload: Prisma.$PostTempPayload<ExtArgs>
        fields: Prisma.PostTempFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostTempFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostTempFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          findFirst: {
            args: Prisma.PostTempFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostTempFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          findMany: {
            args: Prisma.PostTempFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>[]
          }
          create: {
            args: Prisma.PostTempCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          createMany: {
            args: Prisma.PostTempCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostTempCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>[]
          }
          delete: {
            args: Prisma.PostTempDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          update: {
            args: Prisma.PostTempUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          deleteMany: {
            args: Prisma.PostTempDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostTempUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostTempUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>[]
          }
          upsert: {
            args: Prisma.PostTempUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTempPayload>
          }
          aggregate: {
            args: Prisma.PostTempAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostTemp>
          }
          groupBy: {
            args: Prisma.PostTempGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostTempGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostTempCountArgs<ExtArgs>
            result: $Utils.Optional<PostTempCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    blogPost?: BlogPostOmit
    notification?: NotificationOmit
    bookMark?: BookMarkOmit
    postLike?: PostLikeOmit
    comment?: CommentOmit
    subscribe?: SubscribeOmit
    category?: CategoryOmit
    postTemp?: PostTempOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    blogPost: number
    bookMark: number
    comments: number
    receivedNotifications: number
    sentNotifications: number
    likes: number
    requestSubscribe: number
    responseSubscribe: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | UserCountOutputTypeCountBlogPostArgs
    bookMark?: boolean | UserCountOutputTypeCountBookMarkArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    receivedNotifications?: boolean | UserCountOutputTypeCountReceivedNotificationsArgs
    sentNotifications?: boolean | UserCountOutputTypeCountSentNotificationsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    requestSubscribe?: boolean | UserCountOutputTypeCountRequestSubscribeArgs
    responseSubscribe?: boolean | UserCountOutputTypeCountResponseSubscribeArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookMarkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestSubscribeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscribeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResponseSubscribeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscribeWhereInput
  }


  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    bookMark: number
    comments: number
    notification: number
    likes: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookMark?: boolean | BlogPostCountOutputTypeCountBookMarkArgs
    comments?: boolean | BlogPostCountOutputTypeCountCommentsArgs
    notification?: boolean | BlogPostCountOutputTypeCountNotificationArgs
    likes?: boolean | BlogPostCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountBookMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookMarkWhereInput
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profileImg: string | null
    introduction: string | null
    backgroundImg: string | null
    provider: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profileImg: string | null
    introduction: string | null
    backgroundImg: string | null
    provider: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    profileImg: number
    introduction: number
    backgroundImg: number
    provider: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profileImg?: true
    introduction?: true
    backgroundImg?: true
    provider?: true
    createdAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profileImg?: true
    introduction?: true
    backgroundImg?: true
    provider?: true
    createdAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profileImg?: true
    introduction?: true
    backgroundImg?: true
    provider?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    profileImg: string | null
    introduction: string | null
    backgroundImg: string | null
    provider: string | null
    createdAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profileImg?: boolean
    introduction?: boolean
    backgroundImg?: boolean
    provider?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    blogPost?: boolean | User$blogPostArgs<ExtArgs>
    bookMark?: boolean | User$bookMarkArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    receivedNotifications?: boolean | User$receivedNotificationsArgs<ExtArgs>
    sentNotifications?: boolean | User$sentNotificationsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    requestSubscribe?: boolean | User$requestSubscribeArgs<ExtArgs>
    responseSubscribe?: boolean | User$responseSubscribeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profileImg?: boolean
    introduction?: boolean
    backgroundImg?: boolean
    provider?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profileImg?: boolean
    introduction?: boolean
    backgroundImg?: boolean
    provider?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    profileImg?: boolean
    introduction?: boolean
    backgroundImg?: boolean
    provider?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "profileImg" | "introduction" | "backgroundImg" | "provider" | "createdAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | User$blogPostArgs<ExtArgs>
    bookMark?: boolean | User$bookMarkArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    receivedNotifications?: boolean | User$receivedNotificationsArgs<ExtArgs>
    sentNotifications?: boolean | User$sentNotificationsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    requestSubscribe?: boolean | User$requestSubscribeArgs<ExtArgs>
    responseSubscribe?: boolean | User$responseSubscribeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs>[]
      bookMark: Prisma.$BookMarkPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      receivedNotifications: Prisma.$NotificationPayload<ExtArgs>[]
      sentNotifications: Prisma.$NotificationPayload<ExtArgs>[]
      likes: Prisma.$PostLikePayload<ExtArgs>[]
      requestSubscribe: Prisma.$SubscribePayload<ExtArgs>[]
      responseSubscribe: Prisma.$SubscribePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      profileImg: string | null
      introduction: string | null
      backgroundImg: string | null
      provider: string | null
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends User$blogPostArgs<ExtArgs> = {}>(args?: Subset<T, User$blogPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookMark<T extends User$bookMarkArgs<ExtArgs> = {}>(args?: Subset<T, User$bookMarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedNotifications<T extends User$receivedNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentNotifications<T extends User$sentNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requestSubscribe<T extends User$requestSubscribeArgs<ExtArgs> = {}>(args?: Subset<T, User$requestSubscribeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responseSubscribe<T extends User$responseSubscribeArgs<ExtArgs> = {}>(args?: Subset<T, User$responseSubscribeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profileImg: FieldRef<"User", 'String'>
    readonly introduction: FieldRef<"User", 'String'>
    readonly backgroundImg: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.blogPost
   */
  export type User$blogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * User.bookMark
   */
  export type User$bookMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    where?: BookMarkWhereInput
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    cursor?: BookMarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookMarkScalarFieldEnum | BookMarkScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.receivedNotifications
   */
  export type User$receivedNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.sentNotifications
   */
  export type User$sentNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    cursor?: PostLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * User.requestSubscribe
   */
  export type User$requestSubscribeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    where?: SubscribeWhereInput
    orderBy?: SubscribeOrderByWithRelationInput | SubscribeOrderByWithRelationInput[]
    cursor?: SubscribeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscribeScalarFieldEnum | SubscribeScalarFieldEnum[]
  }

  /**
   * User.responseSubscribe
   */
  export type User$responseSubscribeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    where?: SubscribeWhereInput
    orderBy?: SubscribeOrderByWithRelationInput | SubscribeOrderByWithRelationInput[]
    cursor?: SubscribeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscribeScalarFieldEnum | SubscribeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    isPublic: number | null
    useAi: number | null
    aiUsageCount: number | null
  }

  export type BlogPostSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    isPublic: number | null
    useAi: number | null
    aiUsageCount: number | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: number | null
    userId: string | null
    categoryId: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    aiSummary: string | null
    isPublic: number | null
    thumbnailUrl: string | null
    useAi: number | null
    aiUsageCount: number | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    categoryId: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    aiSummary: string | null
    isPublic: number | null
    thumbnailUrl: string | null
    useAi: number | null
    aiUsageCount: number | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    title: number
    content: number
    tags: number
    createdAt: number
    updatedAt: number
    aiSummary: number
    isPublic: number
    thumbnailUrl: number
    useAi: number
    aiUsageCount: number
    _all: number
  }


  export type BlogPostAvgAggregateInputType = {
    id?: true
    categoryId?: true
    isPublic?: true
    useAi?: true
    aiUsageCount?: true
  }

  export type BlogPostSumAggregateInputType = {
    id?: true
    categoryId?: true
    isPublic?: true
    useAi?: true
    aiUsageCount?: true
  }

  export type BlogPostMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    aiSummary?: true
    isPublic?: true
    thumbnailUrl?: true
    useAi?: true
    aiUsageCount?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    aiSummary?: true
    isPublic?: true
    thumbnailUrl?: true
    useAi?: true
    aiUsageCount?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    content?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    aiSummary?: true
    isPublic?: true
    thumbnailUrl?: true
    useAi?: true
    aiUsageCount?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _avg?: BlogPostAvgAggregateInputType
    _sum?: BlogPostSumAggregateInputType
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: number
    userId: string
    categoryId: number | null
    title: string
    content: string
    tags: string[]
    createdAt: Date
    updatedAt: Date | null
    aiSummary: string | null
    isPublic: number
    thumbnailUrl: string | null
    useAi: number
    aiUsageCount: number
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiSummary?: boolean
    isPublic?: boolean
    thumbnailUrl?: boolean
    useAi?: boolean
    aiUsageCount?: boolean
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookMark?: boolean | BlogPost$bookMarkArgs<ExtArgs>
    comments?: boolean | BlogPost$commentsArgs<ExtArgs>
    notification?: boolean | BlogPost$notificationArgs<ExtArgs>
    likes?: boolean | BlogPost$likesArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiSummary?: boolean
    isPublic?: boolean
    thumbnailUrl?: boolean
    useAi?: boolean
    aiUsageCount?: boolean
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiSummary?: boolean
    isPublic?: boolean
    thumbnailUrl?: boolean
    useAi?: boolean
    aiUsageCount?: boolean
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiSummary?: boolean
    isPublic?: boolean
    thumbnailUrl?: boolean
    useAi?: boolean
    aiUsageCount?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "title" | "content" | "tags" | "createdAt" | "updatedAt" | "aiSummary" | "isPublic" | "thumbnailUrl" | "useAi" | "aiUsageCount", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookMark?: boolean | BlogPost$bookMarkArgs<ExtArgs>
    comments?: boolean | BlogPost$commentsArgs<ExtArgs>
    notification?: boolean | BlogPost$notificationArgs<ExtArgs>
    likes?: boolean | BlogPost$likesArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      bookMark: Prisma.$BookMarkPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      notification: Prisma.$NotificationPayload<ExtArgs>[]
      likes: Prisma.$PostLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      categoryId: number | null
      title: string
      content: string
      tags: string[]
      createdAt: Date
      updatedAt: Date | null
      aiSummary: string | null
      isPublic: number
      thumbnailUrl: string | null
      useAi: number
      aiUsageCount: number
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends BlogPost$categoryArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookMark<T extends BlogPost$bookMarkArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$bookMarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends BlogPost$commentsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification<T extends BlogPost$notificationArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends BlogPost$likesArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'Int'>
    readonly userId: FieldRef<"BlogPost", 'String'>
    readonly categoryId: FieldRef<"BlogPost", 'Int'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly tags: FieldRef<"BlogPost", 'String[]'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly aiSummary: FieldRef<"BlogPost", 'String'>
    readonly isPublic: FieldRef<"BlogPost", 'Int'>
    readonly thumbnailUrl: FieldRef<"BlogPost", 'String'>
    readonly useAi: FieldRef<"BlogPost", 'Int'>
    readonly aiUsageCount: FieldRef<"BlogPost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost.category
   */
  export type BlogPost$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * BlogPost.bookMark
   */
  export type BlogPost$bookMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    where?: BookMarkWhereInput
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    cursor?: BookMarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookMarkScalarFieldEnum | BookMarkScalarFieldEnum[]
  }

  /**
   * BlogPost.comments
   */
  export type BlogPost$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * BlogPost.notification
   */
  export type BlogPost$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * BlogPost.likes
   */
  export type BlogPost$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    cursor?: PostLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    postsId: number | null
    type: number | null
    checkStatus: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    postsId: number | null
    type: number | null
    checkStatus: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    postsId: number | null
    senderId: string | null
    receiverId: string | null
    type: number | null
    createdAt: Date | null
    checkStatus: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    postsId: number | null
    senderId: string | null
    receiverId: string | null
    type: number | null
    createdAt: Date | null
    checkStatus: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    postsId: number
    senderId: number
    receiverId: number
    type: number
    createdAt: number
    checkStatus: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    postsId?: true
    type?: true
    checkStatus?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    postsId?: true
    type?: true
    checkStatus?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    postsId?: true
    senderId?: true
    receiverId?: true
    type?: true
    createdAt?: true
    checkStatus?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    postsId?: true
    senderId?: true
    receiverId?: true
    type?: true
    createdAt?: true
    checkStatus?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    postsId?: true
    senderId?: true
    receiverId?: true
    type?: true
    createdAt?: true
    checkStatus?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    postsId: number
    senderId: string
    receiverId: string
    type: number
    createdAt: Date
    checkStatus: number
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    senderId?: boolean
    receiverId?: boolean
    type?: boolean
    createdAt?: boolean
    checkStatus?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    senderId?: boolean
    receiverId?: boolean
    type?: boolean
    createdAt?: boolean
    checkStatus?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    senderId?: boolean
    receiverId?: boolean
    type?: boolean
    createdAt?: boolean
    checkStatus?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    postsId?: boolean
    senderId?: boolean
    receiverId?: boolean
    type?: boolean
    createdAt?: boolean
    checkStatus?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postsId" | "senderId" | "receiverId" | "type" | "createdAt" | "checkStatus", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postsId: number
      senderId: string
      receiverId: string
      type: number
      createdAt: Date
      checkStatus: number
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly postsId: FieldRef<"Notification", 'Int'>
    readonly senderId: FieldRef<"Notification", 'String'>
    readonly receiverId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'Int'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly checkStatus: FieldRef<"Notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model BookMark
   */

  export type AggregateBookMark = {
    _count: BookMarkCountAggregateOutputType | null
    _avg: BookMarkAvgAggregateOutputType | null
    _sum: BookMarkSumAggregateOutputType | null
    _min: BookMarkMinAggregateOutputType | null
    _max: BookMarkMaxAggregateOutputType | null
  }

  export type BookMarkAvgAggregateOutputType = {
    id: number | null
    postsId: number | null
  }

  export type BookMarkSumAggregateOutputType = {
    id: number | null
    postsId: number | null
  }

  export type BookMarkMinAggregateOutputType = {
    id: number | null
    postsId: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type BookMarkMaxAggregateOutputType = {
    id: number | null
    postsId: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type BookMarkCountAggregateOutputType = {
    id: number
    postsId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type BookMarkAvgAggregateInputType = {
    id?: true
    postsId?: true
  }

  export type BookMarkSumAggregateInputType = {
    id?: true
    postsId?: true
  }

  export type BookMarkMinAggregateInputType = {
    id?: true
    postsId?: true
    userId?: true
    createdAt?: true
  }

  export type BookMarkMaxAggregateInputType = {
    id?: true
    postsId?: true
    userId?: true
    createdAt?: true
  }

  export type BookMarkCountAggregateInputType = {
    id?: true
    postsId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type BookMarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookMark to aggregate.
     */
    where?: BookMarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookMarks to fetch.
     */
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookMarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookMarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookMarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookMarks
    **/
    _count?: true | BookMarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookMarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookMarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMarkMaxAggregateInputType
  }

  export type GetBookMarkAggregateType<T extends BookMarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookMark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookMark[P]>
      : GetScalarType<T[P], AggregateBookMark[P]>
  }




  export type BookMarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookMarkWhereInput
    orderBy?: BookMarkOrderByWithAggregationInput | BookMarkOrderByWithAggregationInput[]
    by: BookMarkScalarFieldEnum[] | BookMarkScalarFieldEnum
    having?: BookMarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookMarkCountAggregateInputType | true
    _avg?: BookMarkAvgAggregateInputType
    _sum?: BookMarkSumAggregateInputType
    _min?: BookMarkMinAggregateInputType
    _max?: BookMarkMaxAggregateInputType
  }

  export type BookMarkGroupByOutputType = {
    id: number
    postsId: number
    userId: string
    createdAt: Date
    _count: BookMarkCountAggregateOutputType | null
    _avg: BookMarkAvgAggregateOutputType | null
    _sum: BookMarkSumAggregateOutputType | null
    _min: BookMarkMinAggregateOutputType | null
    _max: BookMarkMaxAggregateOutputType | null
  }

  type GetBookMarkGroupByPayload<T extends BookMarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookMarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookMarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookMarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookMarkGroupByOutputType[P]>
        }
      >
    >


  export type BookMarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    userId?: boolean
    createdAt?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookMark"]>

  export type BookMarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    userId?: boolean
    createdAt?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookMark"]>

  export type BookMarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    userId?: boolean
    createdAt?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookMark"]>

  export type BookMarkSelectScalar = {
    id?: boolean
    postsId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type BookMarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postsId" | "userId" | "createdAt", ExtArgs["result"]["bookMark"]>
  export type BookMarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookMarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookMarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookMarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookMark"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postsId: number
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["bookMark"]>
    composites: {}
  }

  type BookMarkGetPayload<S extends boolean | null | undefined | BookMarkDefaultArgs> = $Result.GetResult<Prisma.$BookMarkPayload, S>

  type BookMarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookMarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookMarkCountAggregateInputType | true
    }

  export interface BookMarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookMark'], meta: { name: 'BookMark' } }
    /**
     * Find zero or one BookMark that matches the filter.
     * @param {BookMarkFindUniqueArgs} args - Arguments to find a BookMark
     * @example
     * // Get one BookMark
     * const bookMark = await prisma.bookMark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookMarkFindUniqueArgs>(args: SelectSubset<T, BookMarkFindUniqueArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookMark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookMarkFindUniqueOrThrowArgs} args - Arguments to find a BookMark
     * @example
     * // Get one BookMark
     * const bookMark = await prisma.bookMark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookMarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BookMarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookMark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkFindFirstArgs} args - Arguments to find a BookMark
     * @example
     * // Get one BookMark
     * const bookMark = await prisma.bookMark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookMarkFindFirstArgs>(args?: SelectSubset<T, BookMarkFindFirstArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookMark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkFindFirstOrThrowArgs} args - Arguments to find a BookMark
     * @example
     * // Get one BookMark
     * const bookMark = await prisma.bookMark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookMarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BookMarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookMarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookMarks
     * const bookMarks = await prisma.bookMark.findMany()
     * 
     * // Get first 10 BookMarks
     * const bookMarks = await prisma.bookMark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookMarkWithIdOnly = await prisma.bookMark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookMarkFindManyArgs>(args?: SelectSubset<T, BookMarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookMark.
     * @param {BookMarkCreateArgs} args - Arguments to create a BookMark.
     * @example
     * // Create one BookMark
     * const BookMark = await prisma.bookMark.create({
     *   data: {
     *     // ... data to create a BookMark
     *   }
     * })
     * 
     */
    create<T extends BookMarkCreateArgs>(args: SelectSubset<T, BookMarkCreateArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookMarks.
     * @param {BookMarkCreateManyArgs} args - Arguments to create many BookMarks.
     * @example
     * // Create many BookMarks
     * const bookMark = await prisma.bookMark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookMarkCreateManyArgs>(args?: SelectSubset<T, BookMarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookMarks and returns the data saved in the database.
     * @param {BookMarkCreateManyAndReturnArgs} args - Arguments to create many BookMarks.
     * @example
     * // Create many BookMarks
     * const bookMark = await prisma.bookMark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookMarks and only return the `id`
     * const bookMarkWithIdOnly = await prisma.bookMark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookMarkCreateManyAndReturnArgs>(args?: SelectSubset<T, BookMarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookMark.
     * @param {BookMarkDeleteArgs} args - Arguments to delete one BookMark.
     * @example
     * // Delete one BookMark
     * const BookMark = await prisma.bookMark.delete({
     *   where: {
     *     // ... filter to delete one BookMark
     *   }
     * })
     * 
     */
    delete<T extends BookMarkDeleteArgs>(args: SelectSubset<T, BookMarkDeleteArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookMark.
     * @param {BookMarkUpdateArgs} args - Arguments to update one BookMark.
     * @example
     * // Update one BookMark
     * const bookMark = await prisma.bookMark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookMarkUpdateArgs>(args: SelectSubset<T, BookMarkUpdateArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookMarks.
     * @param {BookMarkDeleteManyArgs} args - Arguments to filter BookMarks to delete.
     * @example
     * // Delete a few BookMarks
     * const { count } = await prisma.bookMark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookMarkDeleteManyArgs>(args?: SelectSubset<T, BookMarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookMarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookMarks
     * const bookMark = await prisma.bookMark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookMarkUpdateManyArgs>(args: SelectSubset<T, BookMarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookMarks and returns the data updated in the database.
     * @param {BookMarkUpdateManyAndReturnArgs} args - Arguments to update many BookMarks.
     * @example
     * // Update many BookMarks
     * const bookMark = await prisma.bookMark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookMarks and only return the `id`
     * const bookMarkWithIdOnly = await prisma.bookMark.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookMarkUpdateManyAndReturnArgs>(args: SelectSubset<T, BookMarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookMark.
     * @param {BookMarkUpsertArgs} args - Arguments to update or create a BookMark.
     * @example
     * // Update or create a BookMark
     * const bookMark = await prisma.bookMark.upsert({
     *   create: {
     *     // ... data to create a BookMark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookMark we want to update
     *   }
     * })
     */
    upsert<T extends BookMarkUpsertArgs>(args: SelectSubset<T, BookMarkUpsertArgs<ExtArgs>>): Prisma__BookMarkClient<$Result.GetResult<Prisma.$BookMarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookMarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkCountArgs} args - Arguments to filter BookMarks to count.
     * @example
     * // Count the number of BookMarks
     * const count = await prisma.bookMark.count({
     *   where: {
     *     // ... the filter for the BookMarks we want to count
     *   }
     * })
    **/
    count<T extends BookMarkCountArgs>(
      args?: Subset<T, BookMarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookMarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookMark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookMarkAggregateArgs>(args: Subset<T, BookMarkAggregateArgs>): Prisma.PrismaPromise<GetBookMarkAggregateType<T>>

    /**
     * Group by BookMark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookMarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookMarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookMarkGroupByArgs['orderBy'] }
        : { orderBy?: BookMarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookMarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookMarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookMark model
   */
  readonly fields: BookMarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookMark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookMarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookMark model
   */
  interface BookMarkFieldRefs {
    readonly id: FieldRef<"BookMark", 'Int'>
    readonly postsId: FieldRef<"BookMark", 'Int'>
    readonly userId: FieldRef<"BookMark", 'String'>
    readonly createdAt: FieldRef<"BookMark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookMark findUnique
   */
  export type BookMarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter, which BookMark to fetch.
     */
    where: BookMarkWhereUniqueInput
  }

  /**
   * BookMark findUniqueOrThrow
   */
  export type BookMarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter, which BookMark to fetch.
     */
    where: BookMarkWhereUniqueInput
  }

  /**
   * BookMark findFirst
   */
  export type BookMarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter, which BookMark to fetch.
     */
    where?: BookMarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookMarks to fetch.
     */
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookMarks.
     */
    cursor?: BookMarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookMarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookMarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookMarks.
     */
    distinct?: BookMarkScalarFieldEnum | BookMarkScalarFieldEnum[]
  }

  /**
   * BookMark findFirstOrThrow
   */
  export type BookMarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter, which BookMark to fetch.
     */
    where?: BookMarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookMarks to fetch.
     */
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookMarks.
     */
    cursor?: BookMarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookMarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookMarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookMarks.
     */
    distinct?: BookMarkScalarFieldEnum | BookMarkScalarFieldEnum[]
  }

  /**
   * BookMark findMany
   */
  export type BookMarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter, which BookMarks to fetch.
     */
    where?: BookMarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookMarks to fetch.
     */
    orderBy?: BookMarkOrderByWithRelationInput | BookMarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookMarks.
     */
    cursor?: BookMarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookMarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookMarks.
     */
    skip?: number
    distinct?: BookMarkScalarFieldEnum | BookMarkScalarFieldEnum[]
  }

  /**
   * BookMark create
   */
  export type BookMarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * The data needed to create a BookMark.
     */
    data: XOR<BookMarkCreateInput, BookMarkUncheckedCreateInput>
  }

  /**
   * BookMark createMany
   */
  export type BookMarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookMarks.
     */
    data: BookMarkCreateManyInput | BookMarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookMark createManyAndReturn
   */
  export type BookMarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * The data used to create many BookMarks.
     */
    data: BookMarkCreateManyInput | BookMarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookMark update
   */
  export type BookMarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * The data needed to update a BookMark.
     */
    data: XOR<BookMarkUpdateInput, BookMarkUncheckedUpdateInput>
    /**
     * Choose, which BookMark to update.
     */
    where: BookMarkWhereUniqueInput
  }

  /**
   * BookMark updateMany
   */
  export type BookMarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookMarks.
     */
    data: XOR<BookMarkUpdateManyMutationInput, BookMarkUncheckedUpdateManyInput>
    /**
     * Filter which BookMarks to update
     */
    where?: BookMarkWhereInput
    /**
     * Limit how many BookMarks to update.
     */
    limit?: number
  }

  /**
   * BookMark updateManyAndReturn
   */
  export type BookMarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * The data used to update BookMarks.
     */
    data: XOR<BookMarkUpdateManyMutationInput, BookMarkUncheckedUpdateManyInput>
    /**
     * Filter which BookMarks to update
     */
    where?: BookMarkWhereInput
    /**
     * Limit how many BookMarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookMark upsert
   */
  export type BookMarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * The filter to search for the BookMark to update in case it exists.
     */
    where: BookMarkWhereUniqueInput
    /**
     * In case the BookMark found by the `where` argument doesn't exist, create a new BookMark with this data.
     */
    create: XOR<BookMarkCreateInput, BookMarkUncheckedCreateInput>
    /**
     * In case the BookMark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookMarkUpdateInput, BookMarkUncheckedUpdateInput>
  }

  /**
   * BookMark delete
   */
  export type BookMarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
    /**
     * Filter which BookMark to delete.
     */
    where: BookMarkWhereUniqueInput
  }

  /**
   * BookMark deleteMany
   */
  export type BookMarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookMarks to delete
     */
    where?: BookMarkWhereInput
    /**
     * Limit how many BookMarks to delete.
     */
    limit?: number
  }

  /**
   * BookMark without action
   */
  export type BookMarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookMark
     */
    select?: BookMarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookMark
     */
    omit?: BookMarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookMarkInclude<ExtArgs> | null
  }


  /**
   * Model PostLike
   */

  export type AggregatePostLike = {
    _count: PostLikeCountAggregateOutputType | null
    _avg: PostLikeAvgAggregateOutputType | null
    _sum: PostLikeSumAggregateOutputType | null
    _min: PostLikeMinAggregateOutputType | null
    _max: PostLikeMaxAggregateOutputType | null
  }

  export type PostLikeAvgAggregateOutputType = {
    id: number | null
    postsId: number | null
  }

  export type PostLikeSumAggregateOutputType = {
    id: number | null
    postsId: number | null
  }

  export type PostLikeMinAggregateOutputType = {
    id: number | null
    postsId: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type PostLikeMaxAggregateOutputType = {
    id: number | null
    postsId: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type PostLikeCountAggregateOutputType = {
    id: number
    postsId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PostLikeAvgAggregateInputType = {
    id?: true
    postsId?: true
  }

  export type PostLikeSumAggregateInputType = {
    id?: true
    postsId?: true
  }

  export type PostLikeMinAggregateInputType = {
    id?: true
    postsId?: true
    userId?: true
    createdAt?: true
  }

  export type PostLikeMaxAggregateInputType = {
    id?: true
    postsId?: true
    userId?: true
    createdAt?: true
  }

  export type PostLikeCountAggregateInputType = {
    id?: true
    postsId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PostLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLike to aggregate.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostLikes
    **/
    _count?: true | PostLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostLikeMaxAggregateInputType
  }

  export type GetPostLikeAggregateType<T extends PostLikeAggregateArgs> = {
        [P in keyof T & keyof AggregatePostLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostLike[P]>
      : GetScalarType<T[P], AggregatePostLike[P]>
  }




  export type PostLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithAggregationInput | PostLikeOrderByWithAggregationInput[]
    by: PostLikeScalarFieldEnum[] | PostLikeScalarFieldEnum
    having?: PostLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostLikeCountAggregateInputType | true
    _avg?: PostLikeAvgAggregateInputType
    _sum?: PostLikeSumAggregateInputType
    _min?: PostLikeMinAggregateInputType
    _max?: PostLikeMaxAggregateInputType
  }

  export type PostLikeGroupByOutputType = {
    id: number
    postsId: number
    userId: string
    createdAt: Date
    _count: PostLikeCountAggregateOutputType | null
    _avg: PostLikeAvgAggregateOutputType | null
    _sum: PostLikeSumAggregateOutputType | null
    _min: PostLikeMinAggregateOutputType | null
    _max: PostLikeMaxAggregateOutputType | null
  }

  type GetPostLikeGroupByPayload<T extends PostLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostLikeGroupByOutputType[P]>
            : GetScalarType<T[P], PostLikeGroupByOutputType[P]>
        }
      >
    >


  export type PostLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    userId?: boolean
    createdAt?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    userId?: boolean
    createdAt?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    userId?: boolean
    createdAt?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectScalar = {
    id?: boolean
    postsId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PostLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postsId" | "userId" | "createdAt", ExtArgs["result"]["postLike"]>
  export type PostLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostLike"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postsId: number
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["postLike"]>
    composites: {}
  }

  type PostLikeGetPayload<S extends boolean | null | undefined | PostLikeDefaultArgs> = $Result.GetResult<Prisma.$PostLikePayload, S>

  type PostLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostLikeCountAggregateInputType | true
    }

  export interface PostLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostLike'], meta: { name: 'PostLike' } }
    /**
     * Find zero or one PostLike that matches the filter.
     * @param {PostLikeFindUniqueArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostLikeFindUniqueArgs>(args: SelectSubset<T, PostLikeFindUniqueArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostLikeFindUniqueOrThrowArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, PostLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindFirstArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostLikeFindFirstArgs>(args?: SelectSubset<T, PostLikeFindFirstArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindFirstOrThrowArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, PostLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostLikes
     * const postLikes = await prisma.postLike.findMany()
     * 
     * // Get first 10 PostLikes
     * const postLikes = await prisma.postLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postLikeWithIdOnly = await prisma.postLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostLikeFindManyArgs>(args?: SelectSubset<T, PostLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostLike.
     * @param {PostLikeCreateArgs} args - Arguments to create a PostLike.
     * @example
     * // Create one PostLike
     * const PostLike = await prisma.postLike.create({
     *   data: {
     *     // ... data to create a PostLike
     *   }
     * })
     * 
     */
    create<T extends PostLikeCreateArgs>(args: SelectSubset<T, PostLikeCreateArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostLikes.
     * @param {PostLikeCreateManyArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLike = await prisma.postLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostLikeCreateManyArgs>(args?: SelectSubset<T, PostLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostLikes and returns the data saved in the database.
     * @param {PostLikeCreateManyAndReturnArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLike = await prisma.postLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostLikes and only return the `id`
     * const postLikeWithIdOnly = await prisma.postLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, PostLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostLike.
     * @param {PostLikeDeleteArgs} args - Arguments to delete one PostLike.
     * @example
     * // Delete one PostLike
     * const PostLike = await prisma.postLike.delete({
     *   where: {
     *     // ... filter to delete one PostLike
     *   }
     * })
     * 
     */
    delete<T extends PostLikeDeleteArgs>(args: SelectSubset<T, PostLikeDeleteArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostLike.
     * @param {PostLikeUpdateArgs} args - Arguments to update one PostLike.
     * @example
     * // Update one PostLike
     * const postLike = await prisma.postLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostLikeUpdateArgs>(args: SelectSubset<T, PostLikeUpdateArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostLikes.
     * @param {PostLikeDeleteManyArgs} args - Arguments to filter PostLikes to delete.
     * @example
     * // Delete a few PostLikes
     * const { count } = await prisma.postLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostLikeDeleteManyArgs>(args?: SelectSubset<T, PostLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostLikes
     * const postLike = await prisma.postLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostLikeUpdateManyArgs>(args: SelectSubset<T, PostLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes and returns the data updated in the database.
     * @param {PostLikeUpdateManyAndReturnArgs} args - Arguments to update many PostLikes.
     * @example
     * // Update many PostLikes
     * const postLike = await prisma.postLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostLikes and only return the `id`
     * const postLikeWithIdOnly = await prisma.postLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, PostLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostLike.
     * @param {PostLikeUpsertArgs} args - Arguments to update or create a PostLike.
     * @example
     * // Update or create a PostLike
     * const postLike = await prisma.postLike.upsert({
     *   create: {
     *     // ... data to create a PostLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostLike we want to update
     *   }
     * })
     */
    upsert<T extends PostLikeUpsertArgs>(args: SelectSubset<T, PostLikeUpsertArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeCountArgs} args - Arguments to filter PostLikes to count.
     * @example
     * // Count the number of PostLikes
     * const count = await prisma.postLike.count({
     *   where: {
     *     // ... the filter for the PostLikes we want to count
     *   }
     * })
    **/
    count<T extends PostLikeCountArgs>(
      args?: Subset<T, PostLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostLikeAggregateArgs>(args: Subset<T, PostLikeAggregateArgs>): Prisma.PrismaPromise<GetPostLikeAggregateType<T>>

    /**
     * Group by PostLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostLikeGroupByArgs['orderBy'] }
        : { orderBy?: PostLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostLike model
   */
  readonly fields: PostLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostLike model
   */
  interface PostLikeFieldRefs {
    readonly id: FieldRef<"PostLike", 'Int'>
    readonly postsId: FieldRef<"PostLike", 'Int'>
    readonly userId: FieldRef<"PostLike", 'String'>
    readonly createdAt: FieldRef<"PostLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostLike findUnique
   */
  export type PostLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike findUniqueOrThrow
   */
  export type PostLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike findFirst
   */
  export type PostLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike findFirstOrThrow
   */
  export type PostLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike findMany
   */
  export type PostLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike create
   */
  export type PostLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a PostLike.
     */
    data: XOR<PostLikeCreateInput, PostLikeUncheckedCreateInput>
  }

  /**
   * PostLike createMany
   */
  export type PostLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikeCreateManyInput | PostLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostLike createManyAndReturn
   */
  export type PostLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikeCreateManyInput | PostLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLike update
   */
  export type PostLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a PostLike.
     */
    data: XOR<PostLikeUpdateInput, PostLikeUncheckedUpdateInput>
    /**
     * Choose, which PostLike to update.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike updateMany
   */
  export type PostLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
  }

  /**
   * PostLike updateManyAndReturn
   */
  export type PostLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLike upsert
   */
  export type PostLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the PostLike to update in case it exists.
     */
    where: PostLikeWhereUniqueInput
    /**
     * In case the PostLike found by the `where` argument doesn't exist, create a new PostLike with this data.
     */
    create: XOR<PostLikeCreateInput, PostLikeUncheckedCreateInput>
    /**
     * In case the PostLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostLikeUpdateInput, PostLikeUncheckedUpdateInput>
  }

  /**
   * PostLike delete
   */
  export type PostLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter which PostLike to delete.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike deleteMany
   */
  export type PostLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to delete
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to delete.
     */
    limit?: number
  }

  /**
   * PostLike without action
   */
  export type PostLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    postsId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    postsId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    postsId: number | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    postsId: number | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    postsId: number
    userId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    postsId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    postsId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    postsId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    postsId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    postsId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    postsId: number
    userId: string
    content: string
    createdAt: Date
    updatedAt: Date | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postsId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    postsId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postsId" | "userId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postsId: number
      userId: string
      content: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly postsId: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Subscribe
   */

  export type AggregateSubscribe = {
    _count: SubscribeCountAggregateOutputType | null
    _avg: SubscribeAvgAggregateOutputType | null
    _sum: SubscribeSumAggregateOutputType | null
    _min: SubscribeMinAggregateOutputType | null
    _max: SubscribeMaxAggregateOutputType | null
  }

  export type SubscribeAvgAggregateOutputType = {
    id: number | null
  }

  export type SubscribeSumAggregateOutputType = {
    id: number | null
  }

  export type SubscribeMinAggregateOutputType = {
    id: number | null
    requestId: string | null
    responseId: string | null
    createdAt: Date | null
  }

  export type SubscribeMaxAggregateOutputType = {
    id: number | null
    requestId: string | null
    responseId: string | null
    createdAt: Date | null
  }

  export type SubscribeCountAggregateOutputType = {
    id: number
    requestId: number
    responseId: number
    createdAt: number
    _all: number
  }


  export type SubscribeAvgAggregateInputType = {
    id?: true
  }

  export type SubscribeSumAggregateInputType = {
    id?: true
  }

  export type SubscribeMinAggregateInputType = {
    id?: true
    requestId?: true
    responseId?: true
    createdAt?: true
  }

  export type SubscribeMaxAggregateInputType = {
    id?: true
    requestId?: true
    responseId?: true
    createdAt?: true
  }

  export type SubscribeCountAggregateInputType = {
    id?: true
    requestId?: true
    responseId?: true
    createdAt?: true
    _all?: true
  }

  export type SubscribeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscribe to aggregate.
     */
    where?: SubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribes to fetch.
     */
    orderBy?: SubscribeOrderByWithRelationInput | SubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscribes
    **/
    _count?: true | SubscribeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscribeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscribeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscribeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscribeMaxAggregateInputType
  }

  export type GetSubscribeAggregateType<T extends SubscribeAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscribe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscribe[P]>
      : GetScalarType<T[P], AggregateSubscribe[P]>
  }




  export type SubscribeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscribeWhereInput
    orderBy?: SubscribeOrderByWithAggregationInput | SubscribeOrderByWithAggregationInput[]
    by: SubscribeScalarFieldEnum[] | SubscribeScalarFieldEnum
    having?: SubscribeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscribeCountAggregateInputType | true
    _avg?: SubscribeAvgAggregateInputType
    _sum?: SubscribeSumAggregateInputType
    _min?: SubscribeMinAggregateInputType
    _max?: SubscribeMaxAggregateInputType
  }

  export type SubscribeGroupByOutputType = {
    id: number
    requestId: string
    responseId: string
    createdAt: Date
    _count: SubscribeCountAggregateOutputType | null
    _avg: SubscribeAvgAggregateOutputType | null
    _sum: SubscribeSumAggregateOutputType | null
    _min: SubscribeMinAggregateOutputType | null
    _max: SubscribeMaxAggregateOutputType | null
  }

  type GetSubscribeGroupByPayload<T extends SubscribeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscribeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscribeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscribeGroupByOutputType[P]>
            : GetScalarType<T[P], SubscribeGroupByOutputType[P]>
        }
      >
    >


  export type SubscribeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    responseId?: boolean
    createdAt?: boolean
    requestSubscribe?: boolean | UserDefaultArgs<ExtArgs>
    responseSubscribe?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscribe"]>

  export type SubscribeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    responseId?: boolean
    createdAt?: boolean
    requestSubscribe?: boolean | UserDefaultArgs<ExtArgs>
    responseSubscribe?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscribe"]>

  export type SubscribeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    responseId?: boolean
    createdAt?: boolean
    requestSubscribe?: boolean | UserDefaultArgs<ExtArgs>
    responseSubscribe?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscribe"]>

  export type SubscribeSelectScalar = {
    id?: boolean
    requestId?: boolean
    responseId?: boolean
    createdAt?: boolean
  }

  export type SubscribeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "responseId" | "createdAt", ExtArgs["result"]["subscribe"]>
  export type SubscribeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestSubscribe?: boolean | UserDefaultArgs<ExtArgs>
    responseSubscribe?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscribeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestSubscribe?: boolean | UserDefaultArgs<ExtArgs>
    responseSubscribe?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscribeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestSubscribe?: boolean | UserDefaultArgs<ExtArgs>
    responseSubscribe?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscribePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscribe"
    objects: {
      requestSubscribe: Prisma.$UserPayload<ExtArgs>
      responseSubscribe: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      requestId: string
      responseId: string
      createdAt: Date
    }, ExtArgs["result"]["subscribe"]>
    composites: {}
  }

  type SubscribeGetPayload<S extends boolean | null | undefined | SubscribeDefaultArgs> = $Result.GetResult<Prisma.$SubscribePayload, S>

  type SubscribeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscribeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscribeCountAggregateInputType | true
    }

  export interface SubscribeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscribe'], meta: { name: 'Subscribe' } }
    /**
     * Find zero or one Subscribe that matches the filter.
     * @param {SubscribeFindUniqueArgs} args - Arguments to find a Subscribe
     * @example
     * // Get one Subscribe
     * const subscribe = await prisma.subscribe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscribeFindUniqueArgs>(args: SelectSubset<T, SubscribeFindUniqueArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscribe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscribeFindUniqueOrThrowArgs} args - Arguments to find a Subscribe
     * @example
     * // Get one Subscribe
     * const subscribe = await prisma.subscribe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscribeFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscribeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscribe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeFindFirstArgs} args - Arguments to find a Subscribe
     * @example
     * // Get one Subscribe
     * const subscribe = await prisma.subscribe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscribeFindFirstArgs>(args?: SelectSubset<T, SubscribeFindFirstArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscribe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeFindFirstOrThrowArgs} args - Arguments to find a Subscribe
     * @example
     * // Get one Subscribe
     * const subscribe = await prisma.subscribe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscribeFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscribeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscribes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscribes
     * const subscribes = await prisma.subscribe.findMany()
     * 
     * // Get first 10 Subscribes
     * const subscribes = await prisma.subscribe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscribeWithIdOnly = await prisma.subscribe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscribeFindManyArgs>(args?: SelectSubset<T, SubscribeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscribe.
     * @param {SubscribeCreateArgs} args - Arguments to create a Subscribe.
     * @example
     * // Create one Subscribe
     * const Subscribe = await prisma.subscribe.create({
     *   data: {
     *     // ... data to create a Subscribe
     *   }
     * })
     * 
     */
    create<T extends SubscribeCreateArgs>(args: SelectSubset<T, SubscribeCreateArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscribes.
     * @param {SubscribeCreateManyArgs} args - Arguments to create many Subscribes.
     * @example
     * // Create many Subscribes
     * const subscribe = await prisma.subscribe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscribeCreateManyArgs>(args?: SelectSubset<T, SubscribeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscribes and returns the data saved in the database.
     * @param {SubscribeCreateManyAndReturnArgs} args - Arguments to create many Subscribes.
     * @example
     * // Create many Subscribes
     * const subscribe = await prisma.subscribe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscribes and only return the `id`
     * const subscribeWithIdOnly = await prisma.subscribe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscribeCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscribeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscribe.
     * @param {SubscribeDeleteArgs} args - Arguments to delete one Subscribe.
     * @example
     * // Delete one Subscribe
     * const Subscribe = await prisma.subscribe.delete({
     *   where: {
     *     // ... filter to delete one Subscribe
     *   }
     * })
     * 
     */
    delete<T extends SubscribeDeleteArgs>(args: SelectSubset<T, SubscribeDeleteArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscribe.
     * @param {SubscribeUpdateArgs} args - Arguments to update one Subscribe.
     * @example
     * // Update one Subscribe
     * const subscribe = await prisma.subscribe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscribeUpdateArgs>(args: SelectSubset<T, SubscribeUpdateArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscribes.
     * @param {SubscribeDeleteManyArgs} args - Arguments to filter Subscribes to delete.
     * @example
     * // Delete a few Subscribes
     * const { count } = await prisma.subscribe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscribeDeleteManyArgs>(args?: SelectSubset<T, SubscribeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscribes
     * const subscribe = await prisma.subscribe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscribeUpdateManyArgs>(args: SelectSubset<T, SubscribeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribes and returns the data updated in the database.
     * @param {SubscribeUpdateManyAndReturnArgs} args - Arguments to update many Subscribes.
     * @example
     * // Update many Subscribes
     * const subscribe = await prisma.subscribe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscribes and only return the `id`
     * const subscribeWithIdOnly = await prisma.subscribe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscribeUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscribeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscribe.
     * @param {SubscribeUpsertArgs} args - Arguments to update or create a Subscribe.
     * @example
     * // Update or create a Subscribe
     * const subscribe = await prisma.subscribe.upsert({
     *   create: {
     *     // ... data to create a Subscribe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscribe we want to update
     *   }
     * })
     */
    upsert<T extends SubscribeUpsertArgs>(args: SelectSubset<T, SubscribeUpsertArgs<ExtArgs>>): Prisma__SubscribeClient<$Result.GetResult<Prisma.$SubscribePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscribes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeCountArgs} args - Arguments to filter Subscribes to count.
     * @example
     * // Count the number of Subscribes
     * const count = await prisma.subscribe.count({
     *   where: {
     *     // ... the filter for the Subscribes we want to count
     *   }
     * })
    **/
    count<T extends SubscribeCountArgs>(
      args?: Subset<T, SubscribeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscribeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscribe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscribeAggregateArgs>(args: Subset<T, SubscribeAggregateArgs>): Prisma.PrismaPromise<GetSubscribeAggregateType<T>>

    /**
     * Group by Subscribe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscribeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscribeGroupByArgs['orderBy'] }
        : { orderBy?: SubscribeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscribeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscribeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscribe model
   */
  readonly fields: SubscribeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscribe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscribeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requestSubscribe<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responseSubscribe<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscribe model
   */
  interface SubscribeFieldRefs {
    readonly id: FieldRef<"Subscribe", 'Int'>
    readonly requestId: FieldRef<"Subscribe", 'String'>
    readonly responseId: FieldRef<"Subscribe", 'String'>
    readonly createdAt: FieldRef<"Subscribe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscribe findUnique
   */
  export type SubscribeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    /**
     * Filter, which Subscribe to fetch.
     */
    where: SubscribeWhereUniqueInput
  }

  /**
   * Subscribe findUniqueOrThrow
   */
  export type SubscribeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    /**
     * Filter, which Subscribe to fetch.
     */
    where: SubscribeWhereUniqueInput
  }

  /**
   * Subscribe findFirst
   */
  export type SubscribeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    /**
     * Filter, which Subscribe to fetch.
     */
    where?: SubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribes to fetch.
     */
    orderBy?: SubscribeOrderByWithRelationInput | SubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribes.
     */
    cursor?: SubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribes.
     */
    distinct?: SubscribeScalarFieldEnum | SubscribeScalarFieldEnum[]
  }

  /**
   * Subscribe findFirstOrThrow
   */
  export type SubscribeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    /**
     * Filter, which Subscribe to fetch.
     */
    where?: SubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribes to fetch.
     */
    orderBy?: SubscribeOrderByWithRelationInput | SubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribes.
     */
    cursor?: SubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribes.
     */
    distinct?: SubscribeScalarFieldEnum | SubscribeScalarFieldEnum[]
  }

  /**
   * Subscribe findMany
   */
  export type SubscribeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    /**
     * Filter, which Subscribes to fetch.
     */
    where?: SubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribes to fetch.
     */
    orderBy?: SubscribeOrderByWithRelationInput | SubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscribes.
     */
    cursor?: SubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribes.
     */
    skip?: number
    distinct?: SubscribeScalarFieldEnum | SubscribeScalarFieldEnum[]
  }

  /**
   * Subscribe create
   */
  export type SubscribeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscribe.
     */
    data: XOR<SubscribeCreateInput, SubscribeUncheckedCreateInput>
  }

  /**
   * Subscribe createMany
   */
  export type SubscribeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscribes.
     */
    data: SubscribeCreateManyInput | SubscribeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscribe createManyAndReturn
   */
  export type SubscribeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * The data used to create many Subscribes.
     */
    data: SubscribeCreateManyInput | SubscribeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscribe update
   */
  export type SubscribeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscribe.
     */
    data: XOR<SubscribeUpdateInput, SubscribeUncheckedUpdateInput>
    /**
     * Choose, which Subscribe to update.
     */
    where: SubscribeWhereUniqueInput
  }

  /**
   * Subscribe updateMany
   */
  export type SubscribeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscribes.
     */
    data: XOR<SubscribeUpdateManyMutationInput, SubscribeUncheckedUpdateManyInput>
    /**
     * Filter which Subscribes to update
     */
    where?: SubscribeWhereInput
    /**
     * Limit how many Subscribes to update.
     */
    limit?: number
  }

  /**
   * Subscribe updateManyAndReturn
   */
  export type SubscribeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * The data used to update Subscribes.
     */
    data: XOR<SubscribeUpdateManyMutationInput, SubscribeUncheckedUpdateManyInput>
    /**
     * Filter which Subscribes to update
     */
    where?: SubscribeWhereInput
    /**
     * Limit how many Subscribes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscribe upsert
   */
  export type SubscribeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscribe to update in case it exists.
     */
    where: SubscribeWhereUniqueInput
    /**
     * In case the Subscribe found by the `where` argument doesn't exist, create a new Subscribe with this data.
     */
    create: XOR<SubscribeCreateInput, SubscribeUncheckedCreateInput>
    /**
     * In case the Subscribe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscribeUpdateInput, SubscribeUncheckedUpdateInput>
  }

  /**
   * Subscribe delete
   */
  export type SubscribeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
    /**
     * Filter which Subscribe to delete.
     */
    where: SubscribeWhereUniqueInput
  }

  /**
   * Subscribe deleteMany
   */
  export type SubscribeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscribes to delete
     */
    where?: SubscribeWhereInput
    /**
     * Limit how many Subscribes to delete.
     */
    limit?: number
  }

  /**
   * Subscribe without action
   */
  export type SubscribeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscribe
     */
    select?: SubscribeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscribe
     */
    omit?: SubscribeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribeInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPost?: boolean | Category$blogPostArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | Category$blogPostArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends Category$blogPostArgs<ExtArgs> = {}>(args?: Subset<T, Category$blogPostArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.blogPost
   */
  export type Category$blogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model PostTemp
   */

  export type AggregatePostTemp = {
    _count: PostTempCountAggregateOutputType | null
    _avg: PostTempAvgAggregateOutputType | null
    _sum: PostTempSumAggregateOutputType | null
    _min: PostTempMinAggregateOutputType | null
    _max: PostTempMaxAggregateOutputType | null
  }

  export type PostTempAvgAggregateOutputType = {
    id: number | null
  }

  export type PostTempSumAggregateOutputType = {
    id: number | null
  }

  export type PostTempMinAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type PostTempMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type PostTempCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    tags: number
    createdAt: number
    _all: number
  }


  export type PostTempAvgAggregateInputType = {
    id?: true
  }

  export type PostTempSumAggregateInputType = {
    id?: true
  }

  export type PostTempMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type PostTempMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type PostTempCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    tags?: true
    createdAt?: true
    _all?: true
  }

  export type PostTempAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTemp to aggregate.
     */
    where?: PostTempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTemps to fetch.
     */
    orderBy?: PostTempOrderByWithRelationInput | PostTempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostTempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTemps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTemps
    **/
    _count?: true | PostTempCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostTempAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostTempSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTempMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTempMaxAggregateInputType
  }

  export type GetPostTempAggregateType<T extends PostTempAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTemp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTemp[P]>
      : GetScalarType<T[P], AggregatePostTemp[P]>
  }




  export type PostTempGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTempWhereInput
    orderBy?: PostTempOrderByWithAggregationInput | PostTempOrderByWithAggregationInput[]
    by: PostTempScalarFieldEnum[] | PostTempScalarFieldEnum
    having?: PostTempScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTempCountAggregateInputType | true
    _avg?: PostTempAvgAggregateInputType
    _sum?: PostTempSumAggregateInputType
    _min?: PostTempMinAggregateInputType
    _max?: PostTempMaxAggregateInputType
  }

  export type PostTempGroupByOutputType = {
    id: number
    userId: string
    title: string
    content: string
    tags: string[]
    createdAt: Date
    _count: PostTempCountAggregateOutputType | null
    _avg: PostTempAvgAggregateOutputType | null
    _sum: PostTempSumAggregateOutputType | null
    _min: PostTempMinAggregateOutputType | null
    _max: PostTempMaxAggregateOutputType | null
  }

  type GetPostTempGroupByPayload<T extends PostTempGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTempGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostTempGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostTempGroupByOutputType[P]>
            : GetScalarType<T[P], PostTempGroupByOutputType[P]>
        }
      >
    >


  export type PostTempSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["postTemp"]>

  export type PostTempSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["postTemp"]>

  export type PostTempSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["postTemp"]>

  export type PostTempSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
  }

  export type PostTempOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "content" | "tags" | "createdAt", ExtArgs["result"]["postTemp"]>

  export type $PostTempPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostTemp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      title: string
      content: string
      tags: string[]
      createdAt: Date
    }, ExtArgs["result"]["postTemp"]>
    composites: {}
  }

  type PostTempGetPayload<S extends boolean | null | undefined | PostTempDefaultArgs> = $Result.GetResult<Prisma.$PostTempPayload, S>

  type PostTempCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostTempFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostTempCountAggregateInputType | true
    }

  export interface PostTempDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTemp'], meta: { name: 'PostTemp' } }
    /**
     * Find zero or one PostTemp that matches the filter.
     * @param {PostTempFindUniqueArgs} args - Arguments to find a PostTemp
     * @example
     * // Get one PostTemp
     * const postTemp = await prisma.postTemp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTempFindUniqueArgs>(args: SelectSubset<T, PostTempFindUniqueArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostTemp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTempFindUniqueOrThrowArgs} args - Arguments to find a PostTemp
     * @example
     * // Get one PostTemp
     * const postTemp = await prisma.postTemp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTempFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTempFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTemp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempFindFirstArgs} args - Arguments to find a PostTemp
     * @example
     * // Get one PostTemp
     * const postTemp = await prisma.postTemp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTempFindFirstArgs>(args?: SelectSubset<T, PostTempFindFirstArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTemp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempFindFirstOrThrowArgs} args - Arguments to find a PostTemp
     * @example
     * // Get one PostTemp
     * const postTemp = await prisma.postTemp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTempFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTempFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostTemps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTemps
     * const postTemps = await prisma.postTemp.findMany()
     * 
     * // Get first 10 PostTemps
     * const postTemps = await prisma.postTemp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postTempWithIdOnly = await prisma.postTemp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostTempFindManyArgs>(args?: SelectSubset<T, PostTempFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostTemp.
     * @param {PostTempCreateArgs} args - Arguments to create a PostTemp.
     * @example
     * // Create one PostTemp
     * const PostTemp = await prisma.postTemp.create({
     *   data: {
     *     // ... data to create a PostTemp
     *   }
     * })
     * 
     */
    create<T extends PostTempCreateArgs>(args: SelectSubset<T, PostTempCreateArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostTemps.
     * @param {PostTempCreateManyArgs} args - Arguments to create many PostTemps.
     * @example
     * // Create many PostTemps
     * const postTemp = await prisma.postTemp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostTempCreateManyArgs>(args?: SelectSubset<T, PostTempCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostTemps and returns the data saved in the database.
     * @param {PostTempCreateManyAndReturnArgs} args - Arguments to create many PostTemps.
     * @example
     * // Create many PostTemps
     * const postTemp = await prisma.postTemp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostTemps and only return the `id`
     * const postTempWithIdOnly = await prisma.postTemp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostTempCreateManyAndReturnArgs>(args?: SelectSubset<T, PostTempCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostTemp.
     * @param {PostTempDeleteArgs} args - Arguments to delete one PostTemp.
     * @example
     * // Delete one PostTemp
     * const PostTemp = await prisma.postTemp.delete({
     *   where: {
     *     // ... filter to delete one PostTemp
     *   }
     * })
     * 
     */
    delete<T extends PostTempDeleteArgs>(args: SelectSubset<T, PostTempDeleteArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostTemp.
     * @param {PostTempUpdateArgs} args - Arguments to update one PostTemp.
     * @example
     * // Update one PostTemp
     * const postTemp = await prisma.postTemp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostTempUpdateArgs>(args: SelectSubset<T, PostTempUpdateArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostTemps.
     * @param {PostTempDeleteManyArgs} args - Arguments to filter PostTemps to delete.
     * @example
     * // Delete a few PostTemps
     * const { count } = await prisma.postTemp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostTempDeleteManyArgs>(args?: SelectSubset<T, PostTempDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTemps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTemps
     * const postTemp = await prisma.postTemp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostTempUpdateManyArgs>(args: SelectSubset<T, PostTempUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTemps and returns the data updated in the database.
     * @param {PostTempUpdateManyAndReturnArgs} args - Arguments to update many PostTemps.
     * @example
     * // Update many PostTemps
     * const postTemp = await prisma.postTemp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostTemps and only return the `id`
     * const postTempWithIdOnly = await prisma.postTemp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostTempUpdateManyAndReturnArgs>(args: SelectSubset<T, PostTempUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostTemp.
     * @param {PostTempUpsertArgs} args - Arguments to update or create a PostTemp.
     * @example
     * // Update or create a PostTemp
     * const postTemp = await prisma.postTemp.upsert({
     *   create: {
     *     // ... data to create a PostTemp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTemp we want to update
     *   }
     * })
     */
    upsert<T extends PostTempUpsertArgs>(args: SelectSubset<T, PostTempUpsertArgs<ExtArgs>>): Prisma__PostTempClient<$Result.GetResult<Prisma.$PostTempPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostTemps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempCountArgs} args - Arguments to filter PostTemps to count.
     * @example
     * // Count the number of PostTemps
     * const count = await prisma.postTemp.count({
     *   where: {
     *     // ... the filter for the PostTemps we want to count
     *   }
     * })
    **/
    count<T extends PostTempCountArgs>(
      args?: Subset<T, PostTempCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTempCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTemp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostTempAggregateArgs>(args: Subset<T, PostTempAggregateArgs>): Prisma.PrismaPromise<GetPostTempAggregateType<T>>

    /**
     * Group by PostTemp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTempGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostTempGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTempGroupByArgs['orderBy'] }
        : { orderBy?: PostTempGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostTempGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTempGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostTemp model
   */
  readonly fields: PostTempFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTemp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTempClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostTemp model
   */
  interface PostTempFieldRefs {
    readonly id: FieldRef<"PostTemp", 'Int'>
    readonly userId: FieldRef<"PostTemp", 'String'>
    readonly title: FieldRef<"PostTemp", 'String'>
    readonly content: FieldRef<"PostTemp", 'String'>
    readonly tags: FieldRef<"PostTemp", 'String[]'>
    readonly createdAt: FieldRef<"PostTemp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostTemp findUnique
   */
  export type PostTempFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Filter, which PostTemp to fetch.
     */
    where: PostTempWhereUniqueInput
  }

  /**
   * PostTemp findUniqueOrThrow
   */
  export type PostTempFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Filter, which PostTemp to fetch.
     */
    where: PostTempWhereUniqueInput
  }

  /**
   * PostTemp findFirst
   */
  export type PostTempFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Filter, which PostTemp to fetch.
     */
    where?: PostTempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTemps to fetch.
     */
    orderBy?: PostTempOrderByWithRelationInput | PostTempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTemps.
     */
    cursor?: PostTempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTemps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTemps.
     */
    distinct?: PostTempScalarFieldEnum | PostTempScalarFieldEnum[]
  }

  /**
   * PostTemp findFirstOrThrow
   */
  export type PostTempFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Filter, which PostTemp to fetch.
     */
    where?: PostTempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTemps to fetch.
     */
    orderBy?: PostTempOrderByWithRelationInput | PostTempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTemps.
     */
    cursor?: PostTempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTemps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTemps.
     */
    distinct?: PostTempScalarFieldEnum | PostTempScalarFieldEnum[]
  }

  /**
   * PostTemp findMany
   */
  export type PostTempFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Filter, which PostTemps to fetch.
     */
    where?: PostTempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTemps to fetch.
     */
    orderBy?: PostTempOrderByWithRelationInput | PostTempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTemps.
     */
    cursor?: PostTempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTemps.
     */
    skip?: number
    distinct?: PostTempScalarFieldEnum | PostTempScalarFieldEnum[]
  }

  /**
   * PostTemp create
   */
  export type PostTempCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * The data needed to create a PostTemp.
     */
    data: XOR<PostTempCreateInput, PostTempUncheckedCreateInput>
  }

  /**
   * PostTemp createMany
   */
  export type PostTempCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTemps.
     */
    data: PostTempCreateManyInput | PostTempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostTemp createManyAndReturn
   */
  export type PostTempCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * The data used to create many PostTemps.
     */
    data: PostTempCreateManyInput | PostTempCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostTemp update
   */
  export type PostTempUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * The data needed to update a PostTemp.
     */
    data: XOR<PostTempUpdateInput, PostTempUncheckedUpdateInput>
    /**
     * Choose, which PostTemp to update.
     */
    where: PostTempWhereUniqueInput
  }

  /**
   * PostTemp updateMany
   */
  export type PostTempUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTemps.
     */
    data: XOR<PostTempUpdateManyMutationInput, PostTempUncheckedUpdateManyInput>
    /**
     * Filter which PostTemps to update
     */
    where?: PostTempWhereInput
    /**
     * Limit how many PostTemps to update.
     */
    limit?: number
  }

  /**
   * PostTemp updateManyAndReturn
   */
  export type PostTempUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * The data used to update PostTemps.
     */
    data: XOR<PostTempUpdateManyMutationInput, PostTempUncheckedUpdateManyInput>
    /**
     * Filter which PostTemps to update
     */
    where?: PostTempWhereInput
    /**
     * Limit how many PostTemps to update.
     */
    limit?: number
  }

  /**
   * PostTemp upsert
   */
  export type PostTempUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * The filter to search for the PostTemp to update in case it exists.
     */
    where: PostTempWhereUniqueInput
    /**
     * In case the PostTemp found by the `where` argument doesn't exist, create a new PostTemp with this data.
     */
    create: XOR<PostTempCreateInput, PostTempUncheckedCreateInput>
    /**
     * In case the PostTemp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTempUpdateInput, PostTempUncheckedUpdateInput>
  }

  /**
   * PostTemp delete
   */
  export type PostTempDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
    /**
     * Filter which PostTemp to delete.
     */
    where: PostTempWhereUniqueInput
  }

  /**
   * PostTemp deleteMany
   */
  export type PostTempDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTemps to delete
     */
    where?: PostTempWhereInput
    /**
     * Limit how many PostTemps to delete.
     */
    limit?: number
  }

  /**
   * PostTemp without action
   */
  export type PostTempDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTemp
     */
    select?: PostTempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTemp
     */
    omit?: PostTempOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    profileImg: 'profileImg',
    introduction: 'introduction',
    backgroundImg: 'backgroundImg',
    provider: 'provider',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    title: 'title',
    content: 'content',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    aiSummary: 'aiSummary',
    isPublic: 'isPublic',
    thumbnailUrl: 'thumbnailUrl',
    useAi: 'useAi',
    aiUsageCount: 'aiUsageCount'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    postsId: 'postsId',
    senderId: 'senderId',
    receiverId: 'receiverId',
    type: 'type',
    createdAt: 'createdAt',
    checkStatus: 'checkStatus'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const BookMarkScalarFieldEnum: {
    id: 'id',
    postsId: 'postsId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type BookMarkScalarFieldEnum = (typeof BookMarkScalarFieldEnum)[keyof typeof BookMarkScalarFieldEnum]


  export const PostLikeScalarFieldEnum: {
    id: 'id',
    postsId: 'postsId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PostLikeScalarFieldEnum = (typeof PostLikeScalarFieldEnum)[keyof typeof PostLikeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    postsId: 'postsId',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SubscribeScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    responseId: 'responseId',
    createdAt: 'createdAt'
  };

  export type SubscribeScalarFieldEnum = (typeof SubscribeScalarFieldEnum)[keyof typeof SubscribeScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PostTempScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    tags: 'tags',
    createdAt: 'createdAt'
  };

  export type PostTempScalarFieldEnum = (typeof PostTempScalarFieldEnum)[keyof typeof PostTempScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profileImg?: StringNullableFilter<"User"> | string | null
    introduction?: StringNullableFilter<"User"> | string | null
    backgroundImg?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    blogPost?: BlogPostListRelationFilter
    bookMark?: BookMarkListRelationFilter
    comments?: CommentListRelationFilter
    receivedNotifications?: NotificationListRelationFilter
    sentNotifications?: NotificationListRelationFilter
    likes?: PostLikeListRelationFilter
    requestSubscribe?: SubscribeListRelationFilter
    responseSubscribe?: SubscribeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImg?: SortOrderInput | SortOrder
    introduction?: SortOrderInput | SortOrder
    backgroundImg?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    blogPost?: BlogPostOrderByRelationAggregateInput
    bookMark?: BookMarkOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    receivedNotifications?: NotificationOrderByRelationAggregateInput
    sentNotifications?: NotificationOrderByRelationAggregateInput
    likes?: PostLikeOrderByRelationAggregateInput
    requestSubscribe?: SubscribeOrderByRelationAggregateInput
    responseSubscribe?: SubscribeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    profileImg?: StringNullableFilter<"User"> | string | null
    introduction?: StringNullableFilter<"User"> | string | null
    backgroundImg?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    blogPost?: BlogPostListRelationFilter
    bookMark?: BookMarkListRelationFilter
    comments?: CommentListRelationFilter
    receivedNotifications?: NotificationListRelationFilter
    sentNotifications?: NotificationListRelationFilter
    likes?: PostLikeListRelationFilter
    requestSubscribe?: SubscribeListRelationFilter
    responseSubscribe?: SubscribeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImg?: SortOrderInput | SortOrder
    introduction?: SortOrderInput | SortOrder
    backgroundImg?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    profileImg?: StringNullableWithAggregatesFilter<"User"> | string | null
    introduction?: StringNullableWithAggregatesFilter<"User"> | string | null
    backgroundImg?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: IntFilter<"BlogPost"> | number
    userId?: StringFilter<"BlogPost"> | string
    categoryId?: IntNullableFilter<"BlogPost"> | number | null
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    aiSummary?: StringNullableFilter<"BlogPost"> | string | null
    isPublic?: IntFilter<"BlogPost"> | number
    thumbnailUrl?: StringNullableFilter<"BlogPost"> | string | null
    useAi?: IntFilter<"BlogPost"> | number
    aiUsageCount?: IntFilter<"BlogPost"> | number
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookMark?: BookMarkListRelationFilter
    comments?: CommentListRelationFilter
    notification?: NotificationListRelationFilter
    likes?: PostLikeListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    useAi?: SortOrder
    aiUsageCount?: SortOrder
    category?: CategoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    bookMark?: BookMarkOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    notification?: NotificationOrderByRelationAggregateInput
    likes?: PostLikeOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    categoryId?: number
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    userId?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    aiSummary?: StringNullableFilter<"BlogPost"> | string | null
    isPublic?: IntFilter<"BlogPost"> | number
    thumbnailUrl?: StringNullableFilter<"BlogPost"> | string | null
    useAi?: IntFilter<"BlogPost"> | number
    aiUsageCount?: IntFilter<"BlogPost"> | number
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookMark?: BookMarkListRelationFilter
    comments?: CommentListRelationFilter
    notification?: NotificationListRelationFilter
    likes?: PostLikeListRelationFilter
  }, "id" | "categoryId">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    useAi?: SortOrder
    aiUsageCount?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _avg?: BlogPostAvgOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
    _sum?: BlogPostSumOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlogPost"> | number
    userId?: StringWithAggregatesFilter<"BlogPost"> | string
    categoryId?: IntNullableWithAggregatesFilter<"BlogPost"> | number | null
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    aiSummary?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    isPublic?: IntWithAggregatesFilter<"BlogPost"> | number
    thumbnailUrl?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    useAi?: IntWithAggregatesFilter<"BlogPost"> | number
    aiUsageCount?: IntWithAggregatesFilter<"BlogPost"> | number
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    postsId?: IntFilter<"Notification"> | number
    senderId?: StringFilter<"Notification"> | string
    receiverId?: StringFilter<"Notification"> | string
    type?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    checkStatus?: IntFilter<"Notification"> | number
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    postsId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    checkStatus?: SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    postsId?: IntFilter<"Notification"> | number
    senderId?: StringFilter<"Notification"> | string
    receiverId?: StringFilter<"Notification"> | string
    type?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    checkStatus?: IntFilter<"Notification"> | number
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    postsId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    checkStatus?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    postsId?: IntWithAggregatesFilter<"Notification"> | number
    senderId?: StringWithAggregatesFilter<"Notification"> | string
    receiverId?: StringWithAggregatesFilter<"Notification"> | string
    type?: IntWithAggregatesFilter<"Notification"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    checkStatus?: IntWithAggregatesFilter<"Notification"> | number
  }

  export type BookMarkWhereInput = {
    AND?: BookMarkWhereInput | BookMarkWhereInput[]
    OR?: BookMarkWhereInput[]
    NOT?: BookMarkWhereInput | BookMarkWhereInput[]
    id?: IntFilter<"BookMark"> | number
    postsId?: IntFilter<"BookMark"> | number
    userId?: StringFilter<"BookMark"> | string
    createdAt?: DateTimeFilter<"BookMark"> | Date | string
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BookMarkOrderByWithRelationInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BookMarkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookMarkWhereInput | BookMarkWhereInput[]
    OR?: BookMarkWhereInput[]
    NOT?: BookMarkWhereInput | BookMarkWhereInput[]
    postsId?: IntFilter<"BookMark"> | number
    userId?: StringFilter<"BookMark"> | string
    createdAt?: DateTimeFilter<"BookMark"> | Date | string
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BookMarkOrderByWithAggregationInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: BookMarkCountOrderByAggregateInput
    _avg?: BookMarkAvgOrderByAggregateInput
    _max?: BookMarkMaxOrderByAggregateInput
    _min?: BookMarkMinOrderByAggregateInput
    _sum?: BookMarkSumOrderByAggregateInput
  }

  export type BookMarkScalarWhereWithAggregatesInput = {
    AND?: BookMarkScalarWhereWithAggregatesInput | BookMarkScalarWhereWithAggregatesInput[]
    OR?: BookMarkScalarWhereWithAggregatesInput[]
    NOT?: BookMarkScalarWhereWithAggregatesInput | BookMarkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookMark"> | number
    postsId?: IntWithAggregatesFilter<"BookMark"> | number
    userId?: StringWithAggregatesFilter<"BookMark"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BookMark"> | Date | string
  }

  export type PostLikeWhereInput = {
    AND?: PostLikeWhereInput | PostLikeWhereInput[]
    OR?: PostLikeWhereInput[]
    NOT?: PostLikeWhereInput | PostLikeWhereInput[]
    id?: IntFilter<"PostLike"> | number
    postsId?: IntFilter<"PostLike"> | number
    userId?: StringFilter<"PostLike"> | string
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostLikeOrderByWithRelationInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PostLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostLikeWhereInput | PostLikeWhereInput[]
    OR?: PostLikeWhereInput[]
    NOT?: PostLikeWhereInput | PostLikeWhereInput[]
    postsId?: IntFilter<"PostLike"> | number
    userId?: StringFilter<"PostLike"> | string
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostLikeOrderByWithAggregationInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PostLikeCountOrderByAggregateInput
    _avg?: PostLikeAvgOrderByAggregateInput
    _max?: PostLikeMaxOrderByAggregateInput
    _min?: PostLikeMinOrderByAggregateInput
    _sum?: PostLikeSumOrderByAggregateInput
  }

  export type PostLikeScalarWhereWithAggregatesInput = {
    AND?: PostLikeScalarWhereWithAggregatesInput | PostLikeScalarWhereWithAggregatesInput[]
    OR?: PostLikeScalarWhereWithAggregatesInput[]
    NOT?: PostLikeScalarWhereWithAggregatesInput | PostLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostLike"> | number
    postsId?: IntWithAggregatesFilter<"PostLike"> | number
    userId?: StringWithAggregatesFilter<"PostLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostLike"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    postsId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    postsId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    postsId?: IntWithAggregatesFilter<"Comment"> | number
    userId?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
  }

  export type SubscribeWhereInput = {
    AND?: SubscribeWhereInput | SubscribeWhereInput[]
    OR?: SubscribeWhereInput[]
    NOT?: SubscribeWhereInput | SubscribeWhereInput[]
    id?: IntFilter<"Subscribe"> | number
    requestId?: StringFilter<"Subscribe"> | string
    responseId?: StringFilter<"Subscribe"> | string
    createdAt?: DateTimeFilter<"Subscribe"> | Date | string
    requestSubscribe?: XOR<UserScalarRelationFilter, UserWhereInput>
    responseSubscribe?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscribeOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    responseId?: SortOrder
    createdAt?: SortOrder
    requestSubscribe?: UserOrderByWithRelationInput
    responseSubscribe?: UserOrderByWithRelationInput
  }

  export type SubscribeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubscribeWhereInput | SubscribeWhereInput[]
    OR?: SubscribeWhereInput[]
    NOT?: SubscribeWhereInput | SubscribeWhereInput[]
    requestId?: StringFilter<"Subscribe"> | string
    responseId?: StringFilter<"Subscribe"> | string
    createdAt?: DateTimeFilter<"Subscribe"> | Date | string
    requestSubscribe?: XOR<UserScalarRelationFilter, UserWhereInput>
    responseSubscribe?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SubscribeOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    responseId?: SortOrder
    createdAt?: SortOrder
    _count?: SubscribeCountOrderByAggregateInput
    _avg?: SubscribeAvgOrderByAggregateInput
    _max?: SubscribeMaxOrderByAggregateInput
    _min?: SubscribeMinOrderByAggregateInput
    _sum?: SubscribeSumOrderByAggregateInput
  }

  export type SubscribeScalarWhereWithAggregatesInput = {
    AND?: SubscribeScalarWhereWithAggregatesInput | SubscribeScalarWhereWithAggregatesInput[]
    OR?: SubscribeScalarWhereWithAggregatesInput[]
    NOT?: SubscribeScalarWhereWithAggregatesInput | SubscribeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscribe"> | number
    requestId?: StringWithAggregatesFilter<"Subscribe"> | string
    responseId?: StringWithAggregatesFilter<"Subscribe"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscribe"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    blogPost?: XOR<BlogPostNullableScalarRelationFilter, BlogPostWhereInput> | null
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    blogPost?: XOR<BlogPostNullableScalarRelationFilter, BlogPostWhereInput> | null
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
  }

  export type PostTempWhereInput = {
    AND?: PostTempWhereInput | PostTempWhereInput[]
    OR?: PostTempWhereInput[]
    NOT?: PostTempWhereInput | PostTempWhereInput[]
    id?: IntFilter<"PostTemp"> | number
    userId?: StringFilter<"PostTemp"> | string
    title?: StringFilter<"PostTemp"> | string
    content?: StringFilter<"PostTemp"> | string
    tags?: StringNullableListFilter<"PostTemp">
    createdAt?: DateTimeFilter<"PostTemp"> | Date | string
  }

  export type PostTempOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
  }

  export type PostTempWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostTempWhereInput | PostTempWhereInput[]
    OR?: PostTempWhereInput[]
    NOT?: PostTempWhereInput | PostTempWhereInput[]
    userId?: StringFilter<"PostTemp"> | string
    title?: StringFilter<"PostTemp"> | string
    content?: StringFilter<"PostTemp"> | string
    tags?: StringNullableListFilter<"PostTemp">
    createdAt?: DateTimeFilter<"PostTemp"> | Date | string
  }, "id">

  export type PostTempOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    _count?: PostTempCountOrderByAggregateInput
    _avg?: PostTempAvgOrderByAggregateInput
    _max?: PostTempMaxOrderByAggregateInput
    _min?: PostTempMinOrderByAggregateInput
    _sum?: PostTempSumOrderByAggregateInput
  }

  export type PostTempScalarWhereWithAggregatesInput = {
    AND?: PostTempScalarWhereWithAggregatesInput | PostTempScalarWhereWithAggregatesInput[]
    OR?: PostTempScalarWhereWithAggregatesInput[]
    NOT?: PostTempScalarWhereWithAggregatesInput | PostTempScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostTemp"> | number
    userId?: StringWithAggregatesFilter<"PostTemp"> | string
    title?: StringWithAggregatesFilter<"PostTemp"> | string
    content?: StringWithAggregatesFilter<"PostTemp"> | string
    tags?: StringNullableListFilter<"PostTemp">
    createdAt?: DateTimeWithAggregatesFilter<"PostTemp"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    likes?: PostLikeCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeUncheckedCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeUncheckedCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUncheckedUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUncheckedUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogPostCreateInput = {
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    category?: CategoryCreateNestedOneWithoutBlogPostInput
    user: UserCreateNestedOneWithoutBlogPostInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogPostInput
    comments?: CommentCreateNestedManyWithoutBlogPostInput
    notification?: NotificationCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: number
    userId: string
    categoryId?: number | null
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogPostInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutBlogPostNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogPostNestedInput
    comments?: CommentUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    id?: number
    userId: string
    categoryId?: number | null
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
  }

  export type BlogPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateInput = {
    type: number
    createdAt?: Date | string
    checkStatus?: number
    blogPost: BlogPostCreateNestedOneWithoutNotificationInput
    receiver: UserCreateNestedOneWithoutReceivedNotificationsInput
    sender: UserCreateNestedOneWithoutSentNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    postsId: number
    senderId: string
    receiverId: string
    type: number
    createdAt?: Date | string
    checkStatus?: number
  }

  export type NotificationUpdateInput = {
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
    blogPost?: BlogPostUpdateOneRequiredWithoutNotificationNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateManyInput = {
    id?: number
    postsId: number
    senderId: string
    receiverId: string
    type: number
    createdAt?: Date | string
    checkStatus?: number
  }

  export type NotificationUpdateManyMutationInput = {
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
  }

  export type BookMarkCreateInput = {
    createdAt?: Date | string
    blogPost: BlogPostCreateNestedOneWithoutBookMarkInput
    user: UserCreateNestedOneWithoutBookMarkInput
  }

  export type BookMarkUncheckedCreateInput = {
    id?: number
    postsId: number
    userId: string
    createdAt?: Date | string
  }

  export type BookMarkUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneRequiredWithoutBookMarkNestedInput
    user?: UserUpdateOneRequiredWithoutBookMarkNestedInput
  }

  export type BookMarkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookMarkCreateManyInput = {
    id?: number
    postsId: number
    userId: string
    createdAt?: Date | string
  }

  export type BookMarkUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookMarkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeCreateInput = {
    createdAt?: Date | string
    blogPost: BlogPostCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type PostLikeUncheckedCreateInput = {
    id?: number
    postsId: number
    userId: string
    createdAt?: Date | string
  }

  export type PostLikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type PostLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeCreateManyInput = {
    id?: number
    postsId: number
    userId: string
    createdAt?: Date | string
  }

  export type PostLikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    blogPost: BlogPostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    postsId: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentCreateManyInput = {
    id?: number
    postsId: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscribeCreateInput = {
    createdAt?: Date | string
    requestSubscribe: UserCreateNestedOneWithoutRequestSubscribeInput
    responseSubscribe: UserCreateNestedOneWithoutResponseSubscribeInput
  }

  export type SubscribeUncheckedCreateInput = {
    id?: number
    requestId: string
    responseId: string
    createdAt?: Date | string
  }

  export type SubscribeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestSubscribe?: UserUpdateOneRequiredWithoutRequestSubscribeNestedInput
    responseSubscribe?: UserUpdateOneRequiredWithoutResponseSubscribeNestedInput
  }

  export type SubscribeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribeCreateManyInput = {
    id?: number
    requestId: string
    responseId: string
    createdAt?: Date | string
  }

  export type SubscribeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    blogPost?: BlogPostCreateNestedOneWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    blogPost?: BlogPostUncheckedCreateNestedOneWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateOneWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUncheckedUpdateOneWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostTempCreateInput = {
    userId: string
    title: string
    content: string
    tags?: PostTempCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type PostTempUncheckedCreateInput = {
    id?: number
    userId: string
    title: string
    content: string
    tags?: PostTempCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type PostTempUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: PostTempUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTempUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: PostTempUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTempCreateManyInput = {
    id?: number
    userId: string
    title: string
    content: string
    tags?: PostTempCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type PostTempUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: PostTempUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTempUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: PostTempUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type BookMarkListRelationFilter = {
    every?: BookMarkWhereInput
    some?: BookMarkWhereInput
    none?: BookMarkWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PostLikeListRelationFilter = {
    every?: PostLikeWhereInput
    some?: PostLikeWhereInput
    none?: PostLikeWhereInput
  }

  export type SubscribeListRelationFilter = {
    every?: SubscribeWhereInput
    some?: SubscribeWhereInput
    none?: SubscribeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookMarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscribeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImg?: SortOrder
    introduction?: SortOrder
    backgroundImg?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImg?: SortOrder
    introduction?: SortOrder
    backgroundImg?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImg?: SortOrder
    introduction?: SortOrder
    backgroundImg?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiSummary?: SortOrder
    isPublic?: SortOrder
    thumbnailUrl?: SortOrder
    useAi?: SortOrder
    aiUsageCount?: SortOrder
  }

  export type BlogPostAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    isPublic?: SortOrder
    useAi?: SortOrder
    aiUsageCount?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiSummary?: SortOrder
    isPublic?: SortOrder
    thumbnailUrl?: SortOrder
    useAi?: SortOrder
    aiUsageCount?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiSummary?: SortOrder
    isPublic?: SortOrder
    thumbnailUrl?: SortOrder
    useAi?: SortOrder
    aiUsageCount?: SortOrder
  }

  export type BlogPostSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    isPublic?: SortOrder
    useAi?: SortOrder
    aiUsageCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BlogPostScalarRelationFilter = {
    is?: BlogPostWhereInput
    isNot?: BlogPostWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    checkStatus?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    type?: SortOrder
    checkStatus?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    checkStatus?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    checkStatus?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    type?: SortOrder
    checkStatus?: SortOrder
  }

  export type BookMarkCountOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookMarkAvgOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
  }

  export type BookMarkMaxOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookMarkMinOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookMarkSumOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
  }

  export type PostLikeCountOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
  }

  export type PostLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikeMinOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikeSumOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    postsId?: SortOrder
  }

  export type SubscribeCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    responseId?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscribeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubscribeMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    responseId?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscribeMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    responseId?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscribeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlogPostNullableScalarRelationFilter = {
    is?: BlogPostWhereInput | null
    isNot?: BlogPostWhereInput | null
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostTempCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
  }

  export type PostTempAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostTempMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type PostTempMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type PostTempSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlogPostCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BookMarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput> | BookMarkCreateWithoutUserInput[] | BookMarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutUserInput | BookMarkCreateOrConnectWithoutUserInput[]
    createMany?: BookMarkCreateManyUserInputEnvelope
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutReceiverInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutSenderInput = {
    create?: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput> | NotificationCreateWithoutSenderInput[] | NotificationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutSenderInput | NotificationCreateOrConnectWithoutSenderInput[]
    createMany?: NotificationCreateManySenderInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PostLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type SubscribeCreateNestedManyWithoutRequestSubscribeInput = {
    create?: XOR<SubscribeCreateWithoutRequestSubscribeInput, SubscribeUncheckedCreateWithoutRequestSubscribeInput> | SubscribeCreateWithoutRequestSubscribeInput[] | SubscribeUncheckedCreateWithoutRequestSubscribeInput[]
    connectOrCreate?: SubscribeCreateOrConnectWithoutRequestSubscribeInput | SubscribeCreateOrConnectWithoutRequestSubscribeInput[]
    createMany?: SubscribeCreateManyRequestSubscribeInputEnvelope
    connect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
  }

  export type SubscribeCreateNestedManyWithoutResponseSubscribeInput = {
    create?: XOR<SubscribeCreateWithoutResponseSubscribeInput, SubscribeUncheckedCreateWithoutResponseSubscribeInput> | SubscribeCreateWithoutResponseSubscribeInput[] | SubscribeUncheckedCreateWithoutResponseSubscribeInput[]
    connectOrCreate?: SubscribeCreateOrConnectWithoutResponseSubscribeInput | SubscribeCreateOrConnectWithoutResponseSubscribeInput[]
    createMany?: SubscribeCreateManyResponseSubscribeInputEnvelope
    connect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BookMarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput> | BookMarkCreateWithoutUserInput[] | BookMarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutUserInput | BookMarkCreateOrConnectWithoutUserInput[]
    createMany?: BookMarkCreateManyUserInputEnvelope
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput> | NotificationCreateWithoutSenderInput[] | NotificationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutSenderInput | NotificationCreateOrConnectWithoutSenderInput[]
    createMany?: NotificationCreateManySenderInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PostLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type SubscribeUncheckedCreateNestedManyWithoutRequestSubscribeInput = {
    create?: XOR<SubscribeCreateWithoutRequestSubscribeInput, SubscribeUncheckedCreateWithoutRequestSubscribeInput> | SubscribeCreateWithoutRequestSubscribeInput[] | SubscribeUncheckedCreateWithoutRequestSubscribeInput[]
    connectOrCreate?: SubscribeCreateOrConnectWithoutRequestSubscribeInput | SubscribeCreateOrConnectWithoutRequestSubscribeInput[]
    createMany?: SubscribeCreateManyRequestSubscribeInputEnvelope
    connect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
  }

  export type SubscribeUncheckedCreateNestedManyWithoutResponseSubscribeInput = {
    create?: XOR<SubscribeCreateWithoutResponseSubscribeInput, SubscribeUncheckedCreateWithoutResponseSubscribeInput> | SubscribeCreateWithoutResponseSubscribeInput[] | SubscribeUncheckedCreateWithoutResponseSubscribeInput[]
    connectOrCreate?: SubscribeCreateOrConnectWithoutResponseSubscribeInput | SubscribeCreateOrConnectWithoutResponseSubscribeInput[]
    createMany?: SubscribeCreateManyResponseSubscribeInputEnvelope
    connect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BlogPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutUserInput | BlogPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutUserInput | BlogPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutUserInput | BlogPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BookMarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput> | BookMarkCreateWithoutUserInput[] | BookMarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutUserInput | BookMarkCreateOrConnectWithoutUserInput[]
    upsert?: BookMarkUpsertWithWhereUniqueWithoutUserInput | BookMarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookMarkCreateManyUserInputEnvelope
    set?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    disconnect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    delete?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    update?: BookMarkUpdateWithWhereUniqueWithoutUserInput | BookMarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookMarkUpdateManyWithWhereWithoutUserInput | BookMarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutReceiverInput | NotificationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutReceiverInput | NotificationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutReceiverInput | NotificationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutSenderNestedInput = {
    create?: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput> | NotificationCreateWithoutSenderInput[] | NotificationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutSenderInput | NotificationCreateOrConnectWithoutSenderInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutSenderInput | NotificationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: NotificationCreateManySenderInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutSenderInput | NotificationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutSenderInput | NotificationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PostLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput | PostLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutUserInput | PostLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput | PostLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type SubscribeUpdateManyWithoutRequestSubscribeNestedInput = {
    create?: XOR<SubscribeCreateWithoutRequestSubscribeInput, SubscribeUncheckedCreateWithoutRequestSubscribeInput> | SubscribeCreateWithoutRequestSubscribeInput[] | SubscribeUncheckedCreateWithoutRequestSubscribeInput[]
    connectOrCreate?: SubscribeCreateOrConnectWithoutRequestSubscribeInput | SubscribeCreateOrConnectWithoutRequestSubscribeInput[]
    upsert?: SubscribeUpsertWithWhereUniqueWithoutRequestSubscribeInput | SubscribeUpsertWithWhereUniqueWithoutRequestSubscribeInput[]
    createMany?: SubscribeCreateManyRequestSubscribeInputEnvelope
    set?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    disconnect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    delete?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    connect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    update?: SubscribeUpdateWithWhereUniqueWithoutRequestSubscribeInput | SubscribeUpdateWithWhereUniqueWithoutRequestSubscribeInput[]
    updateMany?: SubscribeUpdateManyWithWhereWithoutRequestSubscribeInput | SubscribeUpdateManyWithWhereWithoutRequestSubscribeInput[]
    deleteMany?: SubscribeScalarWhereInput | SubscribeScalarWhereInput[]
  }

  export type SubscribeUpdateManyWithoutResponseSubscribeNestedInput = {
    create?: XOR<SubscribeCreateWithoutResponseSubscribeInput, SubscribeUncheckedCreateWithoutResponseSubscribeInput> | SubscribeCreateWithoutResponseSubscribeInput[] | SubscribeUncheckedCreateWithoutResponseSubscribeInput[]
    connectOrCreate?: SubscribeCreateOrConnectWithoutResponseSubscribeInput | SubscribeCreateOrConnectWithoutResponseSubscribeInput[]
    upsert?: SubscribeUpsertWithWhereUniqueWithoutResponseSubscribeInput | SubscribeUpsertWithWhereUniqueWithoutResponseSubscribeInput[]
    createMany?: SubscribeCreateManyResponseSubscribeInputEnvelope
    set?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    disconnect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    delete?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    connect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    update?: SubscribeUpdateWithWhereUniqueWithoutResponseSubscribeInput | SubscribeUpdateWithWhereUniqueWithoutResponseSubscribeInput[]
    updateMany?: SubscribeUpdateManyWithWhereWithoutResponseSubscribeInput | SubscribeUpdateManyWithWhereWithoutResponseSubscribeInput[]
    deleteMany?: SubscribeScalarWhereInput | SubscribeScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutUserInput | BlogPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutUserInput | BlogPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutUserInput | BlogPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BookMarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput> | BookMarkCreateWithoutUserInput[] | BookMarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutUserInput | BookMarkCreateOrConnectWithoutUserInput[]
    upsert?: BookMarkUpsertWithWhereUniqueWithoutUserInput | BookMarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookMarkCreateManyUserInputEnvelope
    set?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    disconnect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    delete?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    update?: BookMarkUpdateWithWhereUniqueWithoutUserInput | BookMarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookMarkUpdateManyWithWhereWithoutUserInput | BookMarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutReceiverInput | NotificationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutReceiverInput | NotificationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutReceiverInput | NotificationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput> | NotificationCreateWithoutSenderInput[] | NotificationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutSenderInput | NotificationCreateOrConnectWithoutSenderInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutSenderInput | NotificationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: NotificationCreateManySenderInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutSenderInput | NotificationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutSenderInput | NotificationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PostLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput | PostLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutUserInput | PostLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput | PostLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type SubscribeUncheckedUpdateManyWithoutRequestSubscribeNestedInput = {
    create?: XOR<SubscribeCreateWithoutRequestSubscribeInput, SubscribeUncheckedCreateWithoutRequestSubscribeInput> | SubscribeCreateWithoutRequestSubscribeInput[] | SubscribeUncheckedCreateWithoutRequestSubscribeInput[]
    connectOrCreate?: SubscribeCreateOrConnectWithoutRequestSubscribeInput | SubscribeCreateOrConnectWithoutRequestSubscribeInput[]
    upsert?: SubscribeUpsertWithWhereUniqueWithoutRequestSubscribeInput | SubscribeUpsertWithWhereUniqueWithoutRequestSubscribeInput[]
    createMany?: SubscribeCreateManyRequestSubscribeInputEnvelope
    set?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    disconnect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    delete?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    connect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    update?: SubscribeUpdateWithWhereUniqueWithoutRequestSubscribeInput | SubscribeUpdateWithWhereUniqueWithoutRequestSubscribeInput[]
    updateMany?: SubscribeUpdateManyWithWhereWithoutRequestSubscribeInput | SubscribeUpdateManyWithWhereWithoutRequestSubscribeInput[]
    deleteMany?: SubscribeScalarWhereInput | SubscribeScalarWhereInput[]
  }

  export type SubscribeUncheckedUpdateManyWithoutResponseSubscribeNestedInput = {
    create?: XOR<SubscribeCreateWithoutResponseSubscribeInput, SubscribeUncheckedCreateWithoutResponseSubscribeInput> | SubscribeCreateWithoutResponseSubscribeInput[] | SubscribeUncheckedCreateWithoutResponseSubscribeInput[]
    connectOrCreate?: SubscribeCreateOrConnectWithoutResponseSubscribeInput | SubscribeCreateOrConnectWithoutResponseSubscribeInput[]
    upsert?: SubscribeUpsertWithWhereUniqueWithoutResponseSubscribeInput | SubscribeUpsertWithWhereUniqueWithoutResponseSubscribeInput[]
    createMany?: SubscribeCreateManyResponseSubscribeInputEnvelope
    set?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    disconnect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    delete?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    connect?: SubscribeWhereUniqueInput | SubscribeWhereUniqueInput[]
    update?: SubscribeUpdateWithWhereUniqueWithoutResponseSubscribeInput | SubscribeUpdateWithWhereUniqueWithoutResponseSubscribeInput[]
    updateMany?: SubscribeUpdateManyWithWhereWithoutResponseSubscribeInput | SubscribeUpdateManyWithWhereWithoutResponseSubscribeInput[]
    deleteMany?: SubscribeScalarWhereInput | SubscribeScalarWhereInput[]
  }

  export type BlogPostCreatetagsInput = {
    set: string[]
  }

  export type CategoryCreateNestedOneWithoutBlogPostInput = {
    create?: XOR<CategoryCreateWithoutBlogPostInput, CategoryUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBlogPostInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlogPostInput = {
    create?: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostInput
    connect?: UserWhereUniqueInput
  }

  export type BookMarkCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<BookMarkCreateWithoutBlogPostInput, BookMarkUncheckedCreateWithoutBlogPostInput> | BookMarkCreateWithoutBlogPostInput[] | BookMarkUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutBlogPostInput | BookMarkCreateOrConnectWithoutBlogPostInput[]
    createMany?: BookMarkCreateManyBlogPostInputEnvelope
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<CommentCreateWithoutBlogPostInput, CommentUncheckedCreateWithoutBlogPostInput> | CommentCreateWithoutBlogPostInput[] | CommentUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogPostInput | CommentCreateOrConnectWithoutBlogPostInput[]
    createMany?: CommentCreateManyBlogPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<NotificationCreateWithoutBlogPostInput, NotificationUncheckedCreateWithoutBlogPostInput> | NotificationCreateWithoutBlogPostInput[] | NotificationUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBlogPostInput | NotificationCreateOrConnectWithoutBlogPostInput[]
    createMany?: NotificationCreateManyBlogPostInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PostLikeCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<PostLikeCreateWithoutBlogPostInput, PostLikeUncheckedCreateWithoutBlogPostInput> | PostLikeCreateWithoutBlogPostInput[] | PostLikeUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutBlogPostInput | PostLikeCreateOrConnectWithoutBlogPostInput[]
    createMany?: PostLikeCreateManyBlogPostInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type BookMarkUncheckedCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<BookMarkCreateWithoutBlogPostInput, BookMarkUncheckedCreateWithoutBlogPostInput> | BookMarkCreateWithoutBlogPostInput[] | BookMarkUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutBlogPostInput | BookMarkCreateOrConnectWithoutBlogPostInput[]
    createMany?: BookMarkCreateManyBlogPostInputEnvelope
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<CommentCreateWithoutBlogPostInput, CommentUncheckedCreateWithoutBlogPostInput> | CommentCreateWithoutBlogPostInput[] | CommentUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogPostInput | CommentCreateOrConnectWithoutBlogPostInput[]
    createMany?: CommentCreateManyBlogPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<NotificationCreateWithoutBlogPostInput, NotificationUncheckedCreateWithoutBlogPostInput> | NotificationCreateWithoutBlogPostInput[] | NotificationUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBlogPostInput | NotificationCreateOrConnectWithoutBlogPostInput[]
    createMany?: NotificationCreateManyBlogPostInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PostLikeUncheckedCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<PostLikeCreateWithoutBlogPostInput, PostLikeUncheckedCreateWithoutBlogPostInput> | PostLikeCreateWithoutBlogPostInput[] | PostLikeUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutBlogPostInput | PostLikeCreateOrConnectWithoutBlogPostInput[]
    createMany?: PostLikeCreateManyBlogPostInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type BlogPostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneWithoutBlogPostNestedInput = {
    create?: XOR<CategoryCreateWithoutBlogPostInput, CategoryUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBlogPostInput
    upsert?: CategoryUpsertWithoutBlogPostInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBlogPostInput, CategoryUpdateWithoutBlogPostInput>, CategoryUncheckedUpdateWithoutBlogPostInput>
  }

  export type UserUpdateOneRequiredWithoutBlogPostNestedInput = {
    create?: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostInput
    upsert?: UserUpsertWithoutBlogPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogPostInput, UserUpdateWithoutBlogPostInput>, UserUncheckedUpdateWithoutBlogPostInput>
  }

  export type BookMarkUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<BookMarkCreateWithoutBlogPostInput, BookMarkUncheckedCreateWithoutBlogPostInput> | BookMarkCreateWithoutBlogPostInput[] | BookMarkUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutBlogPostInput | BookMarkCreateOrConnectWithoutBlogPostInput[]
    upsert?: BookMarkUpsertWithWhereUniqueWithoutBlogPostInput | BookMarkUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: BookMarkCreateManyBlogPostInputEnvelope
    set?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    disconnect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    delete?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    update?: BookMarkUpdateWithWhereUniqueWithoutBlogPostInput | BookMarkUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: BookMarkUpdateManyWithWhereWithoutBlogPostInput | BookMarkUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<CommentCreateWithoutBlogPostInput, CommentUncheckedCreateWithoutBlogPostInput> | CommentCreateWithoutBlogPostInput[] | CommentUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogPostInput | CommentCreateOrConnectWithoutBlogPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBlogPostInput | CommentUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: CommentCreateManyBlogPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBlogPostInput | CommentUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBlogPostInput | CommentUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<NotificationCreateWithoutBlogPostInput, NotificationUncheckedCreateWithoutBlogPostInput> | NotificationCreateWithoutBlogPostInput[] | NotificationUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBlogPostInput | NotificationCreateOrConnectWithoutBlogPostInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutBlogPostInput | NotificationUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: NotificationCreateManyBlogPostInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutBlogPostInput | NotificationUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutBlogPostInput | NotificationUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PostLikeUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<PostLikeCreateWithoutBlogPostInput, PostLikeUncheckedCreateWithoutBlogPostInput> | PostLikeCreateWithoutBlogPostInput[] | PostLikeUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutBlogPostInput | PostLikeCreateOrConnectWithoutBlogPostInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutBlogPostInput | PostLikeUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: PostLikeCreateManyBlogPostInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutBlogPostInput | PostLikeUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutBlogPostInput | PostLikeUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookMarkUncheckedUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<BookMarkCreateWithoutBlogPostInput, BookMarkUncheckedCreateWithoutBlogPostInput> | BookMarkCreateWithoutBlogPostInput[] | BookMarkUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BookMarkCreateOrConnectWithoutBlogPostInput | BookMarkCreateOrConnectWithoutBlogPostInput[]
    upsert?: BookMarkUpsertWithWhereUniqueWithoutBlogPostInput | BookMarkUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: BookMarkCreateManyBlogPostInputEnvelope
    set?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    disconnect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    delete?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    connect?: BookMarkWhereUniqueInput | BookMarkWhereUniqueInput[]
    update?: BookMarkUpdateWithWhereUniqueWithoutBlogPostInput | BookMarkUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: BookMarkUpdateManyWithWhereWithoutBlogPostInput | BookMarkUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<CommentCreateWithoutBlogPostInput, CommentUncheckedCreateWithoutBlogPostInput> | CommentCreateWithoutBlogPostInput[] | CommentUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogPostInput | CommentCreateOrConnectWithoutBlogPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBlogPostInput | CommentUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: CommentCreateManyBlogPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBlogPostInput | CommentUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBlogPostInput | CommentUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<NotificationCreateWithoutBlogPostInput, NotificationUncheckedCreateWithoutBlogPostInput> | NotificationCreateWithoutBlogPostInput[] | NotificationUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBlogPostInput | NotificationCreateOrConnectWithoutBlogPostInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutBlogPostInput | NotificationUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: NotificationCreateManyBlogPostInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutBlogPostInput | NotificationUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutBlogPostInput | NotificationUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PostLikeUncheckedUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<PostLikeCreateWithoutBlogPostInput, PostLikeUncheckedCreateWithoutBlogPostInput> | PostLikeCreateWithoutBlogPostInput[] | PostLikeUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutBlogPostInput | PostLikeCreateOrConnectWithoutBlogPostInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutBlogPostInput | PostLikeUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: PostLikeCreateManyBlogPostInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutBlogPostInput | PostLikeUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutBlogPostInput | PostLikeUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type BlogPostCreateNestedOneWithoutNotificationInput = {
    create?: XOR<BlogPostCreateWithoutNotificationInput, BlogPostUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutNotificationInput
    connect?: BlogPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedNotificationsInput = {
    create?: XOR<UserCreateWithoutReceivedNotificationsInput, UserUncheckedCreateWithoutReceivedNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentNotificationsInput = {
    create?: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<BlogPostCreateWithoutNotificationInput, BlogPostUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutNotificationInput
    upsert?: BlogPostUpsertWithoutNotificationInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutNotificationInput, BlogPostUpdateWithoutNotificationInput>, BlogPostUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedNotificationsInput, UserUncheckedCreateWithoutReceivedNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedNotificationsInput
    upsert?: UserUpsertWithoutReceivedNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedNotificationsInput, UserUpdateWithoutReceivedNotificationsInput>, UserUncheckedUpdateWithoutReceivedNotificationsInput>
  }

  export type UserUpdateOneRequiredWithoutSentNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentNotificationsInput
    upsert?: UserUpsertWithoutSentNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentNotificationsInput, UserUpdateWithoutSentNotificationsInput>, UserUncheckedUpdateWithoutSentNotificationsInput>
  }

  export type BlogPostCreateNestedOneWithoutBookMarkInput = {
    create?: XOR<BlogPostCreateWithoutBookMarkInput, BlogPostUncheckedCreateWithoutBookMarkInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutBookMarkInput
    connect?: BlogPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookMarkInput = {
    create?: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookMarkInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutBookMarkNestedInput = {
    create?: XOR<BlogPostCreateWithoutBookMarkInput, BlogPostUncheckedCreateWithoutBookMarkInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutBookMarkInput
    upsert?: BlogPostUpsertWithoutBookMarkInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutBookMarkInput, BlogPostUpdateWithoutBookMarkInput>, BlogPostUncheckedUpdateWithoutBookMarkInput>
  }

  export type UserUpdateOneRequiredWithoutBookMarkNestedInput = {
    create?: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookMarkInput
    upsert?: UserUpsertWithoutBookMarkInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookMarkInput, UserUpdateWithoutBookMarkInput>, UserUncheckedUpdateWithoutBookMarkInput>
  }

  export type BlogPostCreateNestedOneWithoutLikesInput = {
    create?: XOR<BlogPostCreateWithoutLikesInput, BlogPostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutLikesInput
    connect?: BlogPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<BlogPostCreateWithoutLikesInput, BlogPostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutLikesInput
    upsert?: BlogPostUpsertWithoutLikesInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutLikesInput, BlogPostUpdateWithoutLikesInput>, BlogPostUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type BlogPostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput
    upsert?: BlogPostUpsertWithoutCommentsInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutCommentsInput, BlogPostUpdateWithoutCommentsInput>, BlogPostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutRequestSubscribeInput = {
    create?: XOR<UserCreateWithoutRequestSubscribeInput, UserUncheckedCreateWithoutRequestSubscribeInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestSubscribeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResponseSubscribeInput = {
    create?: XOR<UserCreateWithoutResponseSubscribeInput, UserUncheckedCreateWithoutResponseSubscribeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponseSubscribeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRequestSubscribeNestedInput = {
    create?: XOR<UserCreateWithoutRequestSubscribeInput, UserUncheckedCreateWithoutRequestSubscribeInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestSubscribeInput
    upsert?: UserUpsertWithoutRequestSubscribeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestSubscribeInput, UserUpdateWithoutRequestSubscribeInput>, UserUncheckedUpdateWithoutRequestSubscribeInput>
  }

  export type UserUpdateOneRequiredWithoutResponseSubscribeNestedInput = {
    create?: XOR<UserCreateWithoutResponseSubscribeInput, UserUncheckedCreateWithoutResponseSubscribeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponseSubscribeInput
    upsert?: UserUpsertWithoutResponseSubscribeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponseSubscribeInput, UserUpdateWithoutResponseSubscribeInput>, UserUncheckedUpdateWithoutResponseSubscribeInput>
  }

  export type BlogPostCreateNestedOneWithoutCategoryInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput
    connect?: BlogPostWhereUniqueInput
  }

  export type BlogPostUncheckedCreateNestedOneWithoutCategoryInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput
    connect?: BlogPostWhereUniqueInput
  }

  export type BlogPostUpdateOneWithoutCategoryNestedInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput
    upsert?: BlogPostUpsertWithoutCategoryInput
    disconnect?: BlogPostWhereInput | boolean
    delete?: BlogPostWhereInput | boolean
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutCategoryInput, BlogPostUpdateWithoutCategoryInput>, BlogPostUncheckedUpdateWithoutCategoryInput>
  }

  export type BlogPostUncheckedUpdateOneWithoutCategoryNestedInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput
    upsert?: BlogPostUpsertWithoutCategoryInput
    disconnect?: BlogPostWhereInput | boolean
    delete?: BlogPostWhereInput | boolean
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutCategoryInput, BlogPostUpdateWithoutCategoryInput>, BlogPostUncheckedUpdateWithoutCategoryInput>
  }

  export type PostTempCreatetagsInput = {
    set: string[]
  }

  export type PostTempUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BlogPostCreateWithoutUserInput = {
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    category?: CategoryCreateNestedOneWithoutBlogPostInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogPostInput
    comments?: CommentCreateNestedManyWithoutBlogPostInput
    notification?: NotificationCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId?: number | null
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogPostInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutUserInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput>
  }

  export type BlogPostCreateManyUserInputEnvelope = {
    data: BlogPostCreateManyUserInput | BlogPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookMarkCreateWithoutUserInput = {
    createdAt?: Date | string
    blogPost: BlogPostCreateNestedOneWithoutBookMarkInput
  }

  export type BookMarkUncheckedCreateWithoutUserInput = {
    id?: number
    postsId: number
    createdAt?: Date | string
  }

  export type BookMarkCreateOrConnectWithoutUserInput = {
    where: BookMarkWhereUniqueInput
    create: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput>
  }

  export type BookMarkCreateManyUserInputEnvelope = {
    data: BookMarkCreateManyUserInput | BookMarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    blogPost: BlogPostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    postsId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutReceiverInput = {
    type: number
    createdAt?: Date | string
    checkStatus?: number
    blogPost: BlogPostCreateNestedOneWithoutNotificationInput
    sender: UserCreateNestedOneWithoutSentNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutReceiverInput = {
    id?: number
    postsId: number
    senderId: string
    type: number
    createdAt?: Date | string
    checkStatus?: number
  }

  export type NotificationCreateOrConnectWithoutReceiverInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput>
  }

  export type NotificationCreateManyReceiverInputEnvelope = {
    data: NotificationCreateManyReceiverInput | NotificationCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutSenderInput = {
    type: number
    createdAt?: Date | string
    checkStatus?: number
    blogPost: BlogPostCreateNestedOneWithoutNotificationInput
    receiver: UserCreateNestedOneWithoutReceivedNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutSenderInput = {
    id?: number
    postsId: number
    receiverId: string
    type: number
    createdAt?: Date | string
    checkStatus?: number
  }

  export type NotificationCreateOrConnectWithoutSenderInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput>
  }

  export type NotificationCreateManySenderInputEnvelope = {
    data: NotificationCreateManySenderInput | NotificationCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PostLikeCreateWithoutUserInput = {
    createdAt?: Date | string
    blogPost: BlogPostCreateNestedOneWithoutLikesInput
  }

  export type PostLikeUncheckedCreateWithoutUserInput = {
    id?: number
    postsId: number
    createdAt?: Date | string
  }

  export type PostLikeCreateOrConnectWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    create: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput>
  }

  export type PostLikeCreateManyUserInputEnvelope = {
    data: PostLikeCreateManyUserInput | PostLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscribeCreateWithoutRequestSubscribeInput = {
    createdAt?: Date | string
    responseSubscribe: UserCreateNestedOneWithoutResponseSubscribeInput
  }

  export type SubscribeUncheckedCreateWithoutRequestSubscribeInput = {
    id?: number
    responseId: string
    createdAt?: Date | string
  }

  export type SubscribeCreateOrConnectWithoutRequestSubscribeInput = {
    where: SubscribeWhereUniqueInput
    create: XOR<SubscribeCreateWithoutRequestSubscribeInput, SubscribeUncheckedCreateWithoutRequestSubscribeInput>
  }

  export type SubscribeCreateManyRequestSubscribeInputEnvelope = {
    data: SubscribeCreateManyRequestSubscribeInput | SubscribeCreateManyRequestSubscribeInput[]
    skipDuplicates?: boolean
  }

  export type SubscribeCreateWithoutResponseSubscribeInput = {
    createdAt?: Date | string
    requestSubscribe: UserCreateNestedOneWithoutRequestSubscribeInput
  }

  export type SubscribeUncheckedCreateWithoutResponseSubscribeInput = {
    id?: number
    requestId: string
    createdAt?: Date | string
  }

  export type SubscribeCreateOrConnectWithoutResponseSubscribeInput = {
    where: SubscribeWhereUniqueInput
    create: XOR<SubscribeCreateWithoutResponseSubscribeInput, SubscribeUncheckedCreateWithoutResponseSubscribeInput>
  }

  export type SubscribeCreateManyResponseSubscribeInputEnvelope = {
    data: SubscribeCreateManyResponseSubscribeInput | SubscribeCreateManyResponseSubscribeInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutUserInput, BlogPostUncheckedUpdateWithoutUserInput>
    create: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutUserInput, BlogPostUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutUserInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: IntFilter<"BlogPost"> | number
    userId?: StringFilter<"BlogPost"> | string
    categoryId?: IntNullableFilter<"BlogPost"> | number | null
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    aiSummary?: StringNullableFilter<"BlogPost"> | string | null
    isPublic?: IntFilter<"BlogPost"> | number
    thumbnailUrl?: StringNullableFilter<"BlogPost"> | string | null
    useAi?: IntFilter<"BlogPost"> | number
    aiUsageCount?: IntFilter<"BlogPost"> | number
  }

  export type BookMarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookMarkWhereUniqueInput
    update: XOR<BookMarkUpdateWithoutUserInput, BookMarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookMarkCreateWithoutUserInput, BookMarkUncheckedCreateWithoutUserInput>
  }

  export type BookMarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookMarkWhereUniqueInput
    data: XOR<BookMarkUpdateWithoutUserInput, BookMarkUncheckedUpdateWithoutUserInput>
  }

  export type BookMarkUpdateManyWithWhereWithoutUserInput = {
    where: BookMarkScalarWhereInput
    data: XOR<BookMarkUpdateManyMutationInput, BookMarkUncheckedUpdateManyWithoutUserInput>
  }

  export type BookMarkScalarWhereInput = {
    AND?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
    OR?: BookMarkScalarWhereInput[]
    NOT?: BookMarkScalarWhereInput | BookMarkScalarWhereInput[]
    id?: IntFilter<"BookMark"> | number
    postsId?: IntFilter<"BookMark"> | number
    userId?: StringFilter<"BookMark"> | string
    createdAt?: DateTimeFilter<"BookMark"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    postsId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutReceiverInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutReceiverInput, NotificationUncheckedUpdateWithoutReceiverInput>
    create: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutReceiverInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutReceiverInput, NotificationUncheckedUpdateWithoutReceiverInput>
  }

  export type NotificationUpdateManyWithWhereWithoutReceiverInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutReceiverInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    postsId?: IntFilter<"Notification"> | number
    senderId?: StringFilter<"Notification"> | string
    receiverId?: StringFilter<"Notification"> | string
    type?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    checkStatus?: IntFilter<"Notification"> | number
  }

  export type NotificationUpsertWithWhereUniqueWithoutSenderInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutSenderInput, NotificationUncheckedUpdateWithoutSenderInput>
    create: XOR<NotificationCreateWithoutSenderInput, NotificationUncheckedCreateWithoutSenderInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutSenderInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutSenderInput, NotificationUncheckedUpdateWithoutSenderInput>
  }

  export type NotificationUpdateManyWithWhereWithoutSenderInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutSenderInput>
  }

  export type PostLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    update: XOR<PostLikeUpdateWithoutUserInput, PostLikeUncheckedUpdateWithoutUserInput>
    create: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput>
  }

  export type PostLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    data: XOR<PostLikeUpdateWithoutUserInput, PostLikeUncheckedUpdateWithoutUserInput>
  }

  export type PostLikeUpdateManyWithWhereWithoutUserInput = {
    where: PostLikeScalarWhereInput
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type PostLikeScalarWhereInput = {
    AND?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
    OR?: PostLikeScalarWhereInput[]
    NOT?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
    id?: IntFilter<"PostLike"> | number
    postsId?: IntFilter<"PostLike"> | number
    userId?: StringFilter<"PostLike"> | string
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
  }

  export type SubscribeUpsertWithWhereUniqueWithoutRequestSubscribeInput = {
    where: SubscribeWhereUniqueInput
    update: XOR<SubscribeUpdateWithoutRequestSubscribeInput, SubscribeUncheckedUpdateWithoutRequestSubscribeInput>
    create: XOR<SubscribeCreateWithoutRequestSubscribeInput, SubscribeUncheckedCreateWithoutRequestSubscribeInput>
  }

  export type SubscribeUpdateWithWhereUniqueWithoutRequestSubscribeInput = {
    where: SubscribeWhereUniqueInput
    data: XOR<SubscribeUpdateWithoutRequestSubscribeInput, SubscribeUncheckedUpdateWithoutRequestSubscribeInput>
  }

  export type SubscribeUpdateManyWithWhereWithoutRequestSubscribeInput = {
    where: SubscribeScalarWhereInput
    data: XOR<SubscribeUpdateManyMutationInput, SubscribeUncheckedUpdateManyWithoutRequestSubscribeInput>
  }

  export type SubscribeScalarWhereInput = {
    AND?: SubscribeScalarWhereInput | SubscribeScalarWhereInput[]
    OR?: SubscribeScalarWhereInput[]
    NOT?: SubscribeScalarWhereInput | SubscribeScalarWhereInput[]
    id?: IntFilter<"Subscribe"> | number
    requestId?: StringFilter<"Subscribe"> | string
    responseId?: StringFilter<"Subscribe"> | string
    createdAt?: DateTimeFilter<"Subscribe"> | Date | string
  }

  export type SubscribeUpsertWithWhereUniqueWithoutResponseSubscribeInput = {
    where: SubscribeWhereUniqueInput
    update: XOR<SubscribeUpdateWithoutResponseSubscribeInput, SubscribeUncheckedUpdateWithoutResponseSubscribeInput>
    create: XOR<SubscribeCreateWithoutResponseSubscribeInput, SubscribeUncheckedCreateWithoutResponseSubscribeInput>
  }

  export type SubscribeUpdateWithWhereUniqueWithoutResponseSubscribeInput = {
    where: SubscribeWhereUniqueInput
    data: XOR<SubscribeUpdateWithoutResponseSubscribeInput, SubscribeUncheckedUpdateWithoutResponseSubscribeInput>
  }

  export type SubscribeUpdateManyWithWhereWithoutResponseSubscribeInput = {
    where: SubscribeScalarWhereInput
    data: XOR<SubscribeUpdateManyMutationInput, SubscribeUncheckedUpdateManyWithoutResponseSubscribeInput>
  }

  export type CategoryCreateWithoutBlogPostInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CategoryUncheckedCreateWithoutBlogPostInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CategoryCreateOrConnectWithoutBlogPostInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBlogPostInput, CategoryUncheckedCreateWithoutBlogPostInput>
  }

  export type UserCreateWithoutBlogPostInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    likes?: PostLikeCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserUncheckedCreateWithoutBlogPostInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeUncheckedCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeUncheckedCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserCreateOrConnectWithoutBlogPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
  }

  export type BookMarkCreateWithoutBlogPostInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookMarkInput
  }

  export type BookMarkUncheckedCreateWithoutBlogPostInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type BookMarkCreateOrConnectWithoutBlogPostInput = {
    where: BookMarkWhereUniqueInput
    create: XOR<BookMarkCreateWithoutBlogPostInput, BookMarkUncheckedCreateWithoutBlogPostInput>
  }

  export type BookMarkCreateManyBlogPostInputEnvelope = {
    data: BookMarkCreateManyBlogPostInput | BookMarkCreateManyBlogPostInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutBlogPostInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutBlogPostInput = {
    id?: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CommentCreateOrConnectWithoutBlogPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutBlogPostInput, CommentUncheckedCreateWithoutBlogPostInput>
  }

  export type CommentCreateManyBlogPostInputEnvelope = {
    data: CommentCreateManyBlogPostInput | CommentCreateManyBlogPostInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutBlogPostInput = {
    type: number
    createdAt?: Date | string
    checkStatus?: number
    receiver: UserCreateNestedOneWithoutReceivedNotificationsInput
    sender: UserCreateNestedOneWithoutSentNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutBlogPostInput = {
    id?: number
    senderId: string
    receiverId: string
    type: number
    createdAt?: Date | string
    checkStatus?: number
  }

  export type NotificationCreateOrConnectWithoutBlogPostInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutBlogPostInput, NotificationUncheckedCreateWithoutBlogPostInput>
  }

  export type NotificationCreateManyBlogPostInputEnvelope = {
    data: NotificationCreateManyBlogPostInput | NotificationCreateManyBlogPostInput[]
    skipDuplicates?: boolean
  }

  export type PostLikeCreateWithoutBlogPostInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type PostLikeUncheckedCreateWithoutBlogPostInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type PostLikeCreateOrConnectWithoutBlogPostInput = {
    where: PostLikeWhereUniqueInput
    create: XOR<PostLikeCreateWithoutBlogPostInput, PostLikeUncheckedCreateWithoutBlogPostInput>
  }

  export type PostLikeCreateManyBlogPostInputEnvelope = {
    data: PostLikeCreateManyBlogPostInput | PostLikeCreateManyBlogPostInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutBlogPostInput = {
    update: XOR<CategoryUpdateWithoutBlogPostInput, CategoryUncheckedUpdateWithoutBlogPostInput>
    create: XOR<CategoryCreateWithoutBlogPostInput, CategoryUncheckedCreateWithoutBlogPostInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBlogPostInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBlogPostInput, CategoryUncheckedUpdateWithoutBlogPostInput>
  }

  export type CategoryUpdateWithoutBlogPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutBlogPostInput = {
    update: XOR<UserUpdateWithoutBlogPostInput, UserUncheckedUpdateWithoutBlogPostInput>
    create: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogPostInput, UserUncheckedUpdateWithoutBlogPostInput>
  }

  export type UserUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUncheckedUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUncheckedUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type BookMarkUpsertWithWhereUniqueWithoutBlogPostInput = {
    where: BookMarkWhereUniqueInput
    update: XOR<BookMarkUpdateWithoutBlogPostInput, BookMarkUncheckedUpdateWithoutBlogPostInput>
    create: XOR<BookMarkCreateWithoutBlogPostInput, BookMarkUncheckedCreateWithoutBlogPostInput>
  }

  export type BookMarkUpdateWithWhereUniqueWithoutBlogPostInput = {
    where: BookMarkWhereUniqueInput
    data: XOR<BookMarkUpdateWithoutBlogPostInput, BookMarkUncheckedUpdateWithoutBlogPostInput>
  }

  export type BookMarkUpdateManyWithWhereWithoutBlogPostInput = {
    where: BookMarkScalarWhereInput
    data: XOR<BookMarkUpdateManyMutationInput, BookMarkUncheckedUpdateManyWithoutBlogPostInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutBlogPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutBlogPostInput, CommentUncheckedUpdateWithoutBlogPostInput>
    create: XOR<CommentCreateWithoutBlogPostInput, CommentUncheckedCreateWithoutBlogPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutBlogPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutBlogPostInput, CommentUncheckedUpdateWithoutBlogPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutBlogPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutBlogPostInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutBlogPostInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutBlogPostInput, NotificationUncheckedUpdateWithoutBlogPostInput>
    create: XOR<NotificationCreateWithoutBlogPostInput, NotificationUncheckedCreateWithoutBlogPostInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutBlogPostInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutBlogPostInput, NotificationUncheckedUpdateWithoutBlogPostInput>
  }

  export type NotificationUpdateManyWithWhereWithoutBlogPostInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutBlogPostInput>
  }

  export type PostLikeUpsertWithWhereUniqueWithoutBlogPostInput = {
    where: PostLikeWhereUniqueInput
    update: XOR<PostLikeUpdateWithoutBlogPostInput, PostLikeUncheckedUpdateWithoutBlogPostInput>
    create: XOR<PostLikeCreateWithoutBlogPostInput, PostLikeUncheckedCreateWithoutBlogPostInput>
  }

  export type PostLikeUpdateWithWhereUniqueWithoutBlogPostInput = {
    where: PostLikeWhereUniqueInput
    data: XOR<PostLikeUpdateWithoutBlogPostInput, PostLikeUncheckedUpdateWithoutBlogPostInput>
  }

  export type PostLikeUpdateManyWithWhereWithoutBlogPostInput = {
    where: PostLikeScalarWhereInput
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyWithoutBlogPostInput>
  }

  export type BlogPostCreateWithoutNotificationInput = {
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    category?: CategoryCreateNestedOneWithoutBlogPostInput
    user: UserCreateNestedOneWithoutBlogPostInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogPostInput
    comments?: CommentCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutNotificationInput = {
    id?: number
    userId: string
    categoryId?: number | null
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutNotificationInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutNotificationInput, BlogPostUncheckedCreateWithoutNotificationInput>
  }

  export type UserCreateWithoutReceivedNotificationsInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    likes?: PostLikeCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserUncheckedCreateWithoutReceivedNotificationsInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeUncheckedCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeUncheckedCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserCreateOrConnectWithoutReceivedNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedNotificationsInput, UserUncheckedCreateWithoutReceivedNotificationsInput>
  }

  export type UserCreateWithoutSentNotificationsInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    likes?: PostLikeCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserUncheckedCreateWithoutSentNotificationsInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeUncheckedCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeUncheckedCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserCreateOrConnectWithoutSentNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
  }

  export type BlogPostUpsertWithoutNotificationInput = {
    update: XOR<BlogPostUpdateWithoutNotificationInput, BlogPostUncheckedUpdateWithoutNotificationInput>
    create: XOR<BlogPostCreateWithoutNotificationInput, BlogPostUncheckedCreateWithoutNotificationInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutNotificationInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutNotificationInput, BlogPostUncheckedUpdateWithoutNotificationInput>
  }

  export type BlogPostUpdateWithoutNotificationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutBlogPostNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogPostNestedInput
    comments?: CommentUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type UserUpsertWithoutReceivedNotificationsInput = {
    update: XOR<UserUpdateWithoutReceivedNotificationsInput, UserUncheckedUpdateWithoutReceivedNotificationsInput>
    create: XOR<UserCreateWithoutReceivedNotificationsInput, UserUncheckedCreateWithoutReceivedNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedNotificationsInput, UserUncheckedUpdateWithoutReceivedNotificationsInput>
  }

  export type UserUpdateWithoutReceivedNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUncheckedUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUncheckedUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserUpsertWithoutSentNotificationsInput = {
    update: XOR<UserUpdateWithoutSentNotificationsInput, UserUncheckedUpdateWithoutSentNotificationsInput>
    create: XOR<UserCreateWithoutSentNotificationsInput, UserUncheckedCreateWithoutSentNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentNotificationsInput, UserUncheckedUpdateWithoutSentNotificationsInput>
  }

  export type UserUpdateWithoutSentNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    likes?: PostLikeUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserUncheckedUpdateWithoutSentNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUncheckedUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUncheckedUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type BlogPostCreateWithoutBookMarkInput = {
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    category?: CategoryCreateNestedOneWithoutBlogPostInput
    user: UserCreateNestedOneWithoutBlogPostInput
    comments?: CommentCreateNestedManyWithoutBlogPostInput
    notification?: NotificationCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutBookMarkInput = {
    id?: number
    userId: string
    categoryId?: number | null
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    comments?: CommentUncheckedCreateNestedManyWithoutBlogPostInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutBookMarkInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutBookMarkInput, BlogPostUncheckedCreateWithoutBookMarkInput>
  }

  export type UserCreateWithoutBookMarkInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    likes?: PostLikeCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserUncheckedCreateWithoutBookMarkInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeUncheckedCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeUncheckedCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserCreateOrConnectWithoutBookMarkInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
  }

  export type BlogPostUpsertWithoutBookMarkInput = {
    update: XOR<BlogPostUpdateWithoutBookMarkInput, BlogPostUncheckedUpdateWithoutBookMarkInput>
    create: XOR<BlogPostCreateWithoutBookMarkInput, BlogPostUncheckedCreateWithoutBookMarkInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutBookMarkInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutBookMarkInput, BlogPostUncheckedUpdateWithoutBookMarkInput>
  }

  export type BlogPostUpdateWithoutBookMarkInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutBlogPostNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    comments?: CommentUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutBookMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type UserUpsertWithoutBookMarkInput = {
    update: XOR<UserUpdateWithoutBookMarkInput, UserUncheckedUpdateWithoutBookMarkInput>
    create: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookMarkInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookMarkInput, UserUncheckedUpdateWithoutBookMarkInput>
  }

  export type UserUpdateWithoutBookMarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserUncheckedUpdateWithoutBookMarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUncheckedUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUncheckedUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type BlogPostCreateWithoutLikesInput = {
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    category?: CategoryCreateNestedOneWithoutBlogPostInput
    user: UserCreateNestedOneWithoutBlogPostInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogPostInput
    comments?: CommentCreateNestedManyWithoutBlogPostInput
    notification?: NotificationCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutLikesInput = {
    id?: number
    userId: string
    categoryId?: number | null
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogPostInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutLikesInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutLikesInput, BlogPostUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    requestSubscribe?: SubscribeCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    requestSubscribe?: SubscribeUncheckedCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeUncheckedCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type BlogPostUpsertWithoutLikesInput = {
    update: XOR<BlogPostUpdateWithoutLikesInput, BlogPostUncheckedUpdateWithoutLikesInput>
    create: XOR<BlogPostCreateWithoutLikesInput, BlogPostUncheckedCreateWithoutLikesInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutLikesInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutLikesInput, BlogPostUncheckedUpdateWithoutLikesInput>
  }

  export type BlogPostUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutBlogPostNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogPostNestedInput
    comments?: CommentUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    requestSubscribe?: SubscribeUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    requestSubscribe?: SubscribeUncheckedUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUncheckedUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type BlogPostCreateWithoutCommentsInput = {
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    category?: CategoryCreateNestedOneWithoutBlogPostInput
    user: UserCreateNestedOneWithoutBlogPostInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogPostInput
    notification?: NotificationCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutCommentsInput = {
    id?: number
    userId: string
    categoryId?: number | null
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogPostInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutCommentsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    likes?: PostLikeCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeUncheckedCreateNestedManyWithoutRequestSubscribeInput
    responseSubscribe?: SubscribeUncheckedCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type BlogPostUpsertWithoutCommentsInput = {
    update: XOR<BlogPostUpdateWithoutCommentsInput, BlogPostUncheckedUpdateWithoutCommentsInput>
    create: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutCommentsInput, BlogPostUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogPostUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutBlogPostNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUncheckedUpdateManyWithoutRequestSubscribeNestedInput
    responseSubscribe?: SubscribeUncheckedUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserCreateWithoutRequestSubscribeInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    likes?: PostLikeCreateNestedManyWithoutUserInput
    responseSubscribe?: SubscribeCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserUncheckedCreateWithoutRequestSubscribeInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    responseSubscribe?: SubscribeUncheckedCreateNestedManyWithoutResponseSubscribeInput
  }

  export type UserCreateOrConnectWithoutRequestSubscribeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestSubscribeInput, UserUncheckedCreateWithoutRequestSubscribeInput>
  }

  export type UserCreateWithoutResponseSubscribeInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
    bookMark?: BookMarkCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationCreateNestedManyWithoutSenderInput
    likes?: PostLikeCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeCreateNestedManyWithoutRequestSubscribeInput
  }

  export type UserUncheckedCreateWithoutResponseSubscribeInput = {
    id?: string
    name: string
    email: string
    profileImg?: string | null
    introduction?: string | null
    backgroundImg?: string | null
    provider?: string | null
    createdAt?: Date | string
    deletedAt?: Date | string | null
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentNotifications?: NotificationUncheckedCreateNestedManyWithoutSenderInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    requestSubscribe?: SubscribeUncheckedCreateNestedManyWithoutRequestSubscribeInput
  }

  export type UserCreateOrConnectWithoutResponseSubscribeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponseSubscribeInput, UserUncheckedCreateWithoutResponseSubscribeInput>
  }

  export type UserUpsertWithoutRequestSubscribeInput = {
    update: XOR<UserUpdateWithoutRequestSubscribeInput, UserUncheckedUpdateWithoutRequestSubscribeInput>
    create: XOR<UserCreateWithoutRequestSubscribeInput, UserUncheckedCreateWithoutRequestSubscribeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestSubscribeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestSubscribeInput, UserUncheckedUpdateWithoutRequestSubscribeInput>
  }

  export type UserUpdateWithoutRequestSubscribeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUpdateManyWithoutUserNestedInput
    responseSubscribe?: SubscribeUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestSubscribeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    responseSubscribe?: SubscribeUncheckedUpdateManyWithoutResponseSubscribeNestedInput
  }

  export type UserUpsertWithoutResponseSubscribeInput = {
    update: XOR<UserUpdateWithoutResponseSubscribeInput, UserUncheckedUpdateWithoutResponseSubscribeInput>
    create: XOR<UserCreateWithoutResponseSubscribeInput, UserUncheckedCreateWithoutResponseSubscribeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponseSubscribeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponseSubscribeInput, UserUncheckedUpdateWithoutResponseSubscribeInput>
  }

  export type UserUpdateWithoutResponseSubscribeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUpdateManyWithoutRequestSubscribeNestedInput
  }

  export type UserUncheckedUpdateWithoutResponseSubscribeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImg?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookMarkUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentNotifications?: NotificationUncheckedUpdateManyWithoutSenderNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    requestSubscribe?: SubscribeUncheckedUpdateManyWithoutRequestSubscribeNestedInput
  }

  export type BlogPostCreateWithoutCategoryInput = {
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    user: UserCreateNestedOneWithoutBlogPostInput
    bookMark?: BookMarkCreateNestedManyWithoutBlogPostInput
    comments?: CommentCreateNestedManyWithoutBlogPostInput
    notification?: NotificationCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: string
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
    bookMark?: BookMarkUncheckedCreateNestedManyWithoutBlogPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutBlogPostInput
    notification?: NotificationUncheckedCreateNestedManyWithoutBlogPostInput
    likes?: PostLikeUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutCategoryInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
  }

  export type BlogPostUpsertWithoutCategoryInput = {
    update: XOR<BlogPostUpdateWithoutCategoryInput, BlogPostUncheckedUpdateWithoutCategoryInput>
    create: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutCategoryInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutCategoryInput, BlogPostUncheckedUpdateWithoutCategoryInput>
  }

  export type BlogPostUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogPostNestedInput
    comments?: CommentUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostCreateManyUserInput = {
    id?: number
    categoryId?: number | null
    title: string
    content: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    aiSummary?: string | null
    isPublic?: number
    thumbnailUrl?: string | null
    useAi?: number
    aiUsageCount?: number
  }

  export type BookMarkCreateManyUserInput = {
    id?: number
    postsId: number
    createdAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    postsId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NotificationCreateManyReceiverInput = {
    id?: number
    postsId: number
    senderId: string
    type: number
    createdAt?: Date | string
    checkStatus?: number
  }

  export type NotificationCreateManySenderInput = {
    id?: number
    postsId: number
    receiverId: string
    type: number
    createdAt?: Date | string
    checkStatus?: number
  }

  export type PostLikeCreateManyUserInput = {
    id?: number
    postsId: number
    createdAt?: Date | string
  }

  export type SubscribeCreateManyRequestSubscribeInput = {
    id?: number
    responseId: string
    createdAt?: Date | string
  }

  export type SubscribeCreateManyResponseSubscribeInput = {
    id?: number
    requestId: string
    createdAt?: Date | string
  }

  export type BlogPostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutBlogPostNestedInput
    bookMark?: BookMarkUpdateManyWithoutBlogPostNestedInput
    comments?: CommentUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
    bookMark?: BookMarkUncheckedUpdateManyWithoutBlogPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBlogPostNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutBlogPostNestedInput
    likes?: PostLikeUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    useAi?: IntFieldUpdateOperationsInput | number
    aiUsageCount?: IntFieldUpdateOperationsInput | number
  }

  export type BookMarkUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneRequiredWithoutBookMarkNestedInput
  }

  export type BookMarkUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookMarkUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    blogPost?: BlogPostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutReceiverInput = {
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
    blogPost?: BlogPostUpdateOneRequiredWithoutNotificationNestedInput
    sender?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutSenderInput = {
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
    blogPost?: BlogPostUpdateOneRequiredWithoutNotificationNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    receiverId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type PostLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postsId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribeUpdateWithoutRequestSubscribeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseSubscribe?: UserUpdateOneRequiredWithoutResponseSubscribeNestedInput
  }

  export type SubscribeUncheckedUpdateWithoutRequestSubscribeInput = {
    id?: IntFieldUpdateOperationsInput | number
    responseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribeUncheckedUpdateManyWithoutRequestSubscribeInput = {
    id?: IntFieldUpdateOperationsInput | number
    responseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribeUpdateWithoutResponseSubscribeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestSubscribe?: UserUpdateOneRequiredWithoutRequestSubscribeNestedInput
  }

  export type SubscribeUncheckedUpdateWithoutResponseSubscribeInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribeUncheckedUpdateManyWithoutResponseSubscribeInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookMarkCreateManyBlogPostInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type CommentCreateManyBlogPostInput = {
    id?: number
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NotificationCreateManyBlogPostInput = {
    id?: number
    senderId: string
    receiverId: string
    type: number
    createdAt?: Date | string
    checkStatus?: number
  }

  export type PostLikeCreateManyBlogPostInput = {
    id?: number
    userId: string
    createdAt?: Date | string
  }

  export type BookMarkUpdateWithoutBlogPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookMarkNestedInput
  }

  export type BookMarkUncheckedUpdateWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookMarkUncheckedUpdateManyWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutBlogPostInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateManyWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutBlogPostInput = {
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
    receiver?: UserUpdateOneRequiredWithoutReceivedNotificationsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUncheckedUpdateManyWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkStatus?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeUpdateWithoutBlogPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type PostLikeUncheckedUpdateWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUncheckedUpdateManyWithoutBlogPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}