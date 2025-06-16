
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
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model StoredMessage
 * 
 */
export type StoredMessage = $Result.DefaultSelection<Prisma.$StoredMessagePayload>
/**
 * Model Keys
 * 
 */
export type Keys = $Result.DefaultSelection<Prisma.$KeysPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  user: 'user',
  assistant: 'assistant'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chats
 * const chats = await prisma.chat.findMany()
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
   * // Fetch zero or more Chats
   * const chats = await prisma.chat.findMany()
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
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storedMessage`: Exposes CRUD operations for the **StoredMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoredMessages
    * const storedMessages = await prisma.storedMessage.findMany()
    * ```
    */
  get storedMessage(): Prisma.StoredMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keys`: Exposes CRUD operations for the **Keys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keys
    * const keys = await prisma.keys.findMany()
    * ```
    */
  get keys(): Prisma.KeysDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    Chat: 'Chat',
    StoredMessage: 'StoredMessage',
    Keys: 'Keys'
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
      modelProps: "chat" | "storedMessage" | "keys"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      StoredMessage: {
        payload: Prisma.$StoredMessagePayload<ExtArgs>
        fields: Prisma.StoredMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoredMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoredMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload>
          }
          findFirst: {
            args: Prisma.StoredMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoredMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload>
          }
          findMany: {
            args: Prisma.StoredMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload>[]
          }
          create: {
            args: Prisma.StoredMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload>
          }
          createMany: {
            args: Prisma.StoredMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoredMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload>[]
          }
          delete: {
            args: Prisma.StoredMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload>
          }
          update: {
            args: Prisma.StoredMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload>
          }
          deleteMany: {
            args: Prisma.StoredMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoredMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoredMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload>[]
          }
          upsert: {
            args: Prisma.StoredMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredMessagePayload>
          }
          aggregate: {
            args: Prisma.StoredMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoredMessage>
          }
          groupBy: {
            args: Prisma.StoredMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoredMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoredMessageCountArgs<ExtArgs>
            result: $Utils.Optional<StoredMessageCountAggregateOutputType> | number
          }
        }
      }
      Keys: {
        payload: Prisma.$KeysPayload<ExtArgs>
        fields: Prisma.KeysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          findFirst: {
            args: Prisma.KeysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          findMany: {
            args: Prisma.KeysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>[]
          }
          create: {
            args: Prisma.KeysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          createMany: {
            args: Prisma.KeysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>[]
          }
          delete: {
            args: Prisma.KeysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          update: {
            args: Prisma.KeysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          deleteMany: {
            args: Prisma.KeysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>[]
          }
          upsert: {
            args: Prisma.KeysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeysPayload>
          }
          aggregate: {
            args: Prisma.KeysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeys>
          }
          groupBy: {
            args: Prisma.KeysGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeysGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeysCountArgs<ExtArgs>
            result: $Utils.Optional<KeysCountAggregateOutputType> | number
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
    chat?: ChatOmit
    storedMessage?: StoredMessageOmit
    keys?: KeysOmit
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
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    StoredMessage: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StoredMessage?: boolean | ChatCountOutputTypeCountStoredMessageArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountStoredMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoredMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userEmail: string | null
    title: string | null
    created_at: Date | null
    updated_at: Date | null
    lastSynced: Date | null
    empty: boolean | null
    parentId: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userEmail: string | null
    title: string | null
    created_at: Date | null
    updated_at: Date | null
    lastSynced: Date | null
    empty: boolean | null
    parentId: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    userId: number
    userEmail: number
    title: number
    created_at: number
    updated_at: number
    lastSynced: number
    empty: number
    parentId: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    userId?: true
    userEmail?: true
    title?: true
    created_at?: true
    updated_at?: true
    lastSynced?: true
    empty?: true
    parentId?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    userId?: true
    userEmail?: true
    title?: true
    created_at?: true
    updated_at?: true
    lastSynced?: true
    empty?: true
    parentId?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    userId?: true
    userEmail?: true
    title?: true
    created_at?: true
    updated_at?: true
    lastSynced?: true
    empty?: true
    parentId?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    userId: string
    userEmail: string
    title: string | null
    created_at: Date
    updated_at: Date
    lastSynced: Date | null
    empty: boolean
    parentId: string | null
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userEmail?: boolean
    title?: boolean
    created_at?: boolean
    updated_at?: boolean
    lastSynced?: boolean
    empty?: boolean
    parentId?: boolean
    StoredMessage?: boolean | Chat$StoredMessageArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userEmail?: boolean
    title?: boolean
    created_at?: boolean
    updated_at?: boolean
    lastSynced?: boolean
    empty?: boolean
    parentId?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userEmail?: boolean
    title?: boolean
    created_at?: boolean
    updated_at?: boolean
    lastSynced?: boolean
    empty?: boolean
    parentId?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    userId?: boolean
    userEmail?: boolean
    title?: boolean
    created_at?: boolean
    updated_at?: boolean
    lastSynced?: boolean
    empty?: boolean
    parentId?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userEmail" | "title" | "created_at" | "updated_at" | "lastSynced" | "empty" | "parentId", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StoredMessage?: boolean | Chat$StoredMessageArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      StoredMessage: Prisma.$StoredMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userEmail: string
      title: string | null
      created_at: Date
      updated_at: Date
      lastSynced: Date | null
      empty: boolean
      parentId: string | null
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    StoredMessage<T extends Chat$StoredMessageArgs<ExtArgs> = {}>(args?: Subset<T, Chat$StoredMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly userId: FieldRef<"Chat", 'String'>
    readonly userEmail: FieldRef<"Chat", 'String'>
    readonly title: FieldRef<"Chat", 'String'>
    readonly created_at: FieldRef<"Chat", 'DateTime'>
    readonly updated_at: FieldRef<"Chat", 'DateTime'>
    readonly lastSynced: FieldRef<"Chat", 'DateTime'>
    readonly empty: FieldRef<"Chat", 'Boolean'>
    readonly parentId: FieldRef<"Chat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.StoredMessage
   */
  export type Chat$StoredMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
    where?: StoredMessageWhereInput
    orderBy?: StoredMessageOrderByWithRelationInput | StoredMessageOrderByWithRelationInput[]
    cursor?: StoredMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoredMessageScalarFieldEnum | StoredMessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model StoredMessage
   */

  export type AggregateStoredMessage = {
    _count: StoredMessageCountAggregateOutputType | null
    _min: StoredMessageMinAggregateOutputType | null
    _max: StoredMessageMaxAggregateOutputType | null
  }

  export type StoredMessageMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    content: string | null
    role: $Enums.Role | null
    created_at: Date | null
    isPartial: boolean | null
    model: string | null
    lastModified: Date | null
  }

  export type StoredMessageMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    content: string | null
    role: $Enums.Role | null
    created_at: Date | null
    isPartial: boolean | null
    model: string | null
    lastModified: Date | null
  }

  export type StoredMessageCountAggregateOutputType = {
    id: number
    chatId: number
    content: number
    role: number
    created_at: number
    isPartial: number
    model: number
    lastModified: number
    _all: number
  }


  export type StoredMessageMinAggregateInputType = {
    id?: true
    chatId?: true
    content?: true
    role?: true
    created_at?: true
    isPartial?: true
    model?: true
    lastModified?: true
  }

  export type StoredMessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    content?: true
    role?: true
    created_at?: true
    isPartial?: true
    model?: true
    lastModified?: true
  }

  export type StoredMessageCountAggregateInputType = {
    id?: true
    chatId?: true
    content?: true
    role?: true
    created_at?: true
    isPartial?: true
    model?: true
    lastModified?: true
    _all?: true
  }

  export type StoredMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoredMessage to aggregate.
     */
    where?: StoredMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoredMessages to fetch.
     */
    orderBy?: StoredMessageOrderByWithRelationInput | StoredMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoredMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoredMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoredMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoredMessages
    **/
    _count?: true | StoredMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoredMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoredMessageMaxAggregateInputType
  }

  export type GetStoredMessageAggregateType<T extends StoredMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateStoredMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoredMessage[P]>
      : GetScalarType<T[P], AggregateStoredMessage[P]>
  }




  export type StoredMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoredMessageWhereInput
    orderBy?: StoredMessageOrderByWithAggregationInput | StoredMessageOrderByWithAggregationInput[]
    by: StoredMessageScalarFieldEnum[] | StoredMessageScalarFieldEnum
    having?: StoredMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoredMessageCountAggregateInputType | true
    _min?: StoredMessageMinAggregateInputType
    _max?: StoredMessageMaxAggregateInputType
  }

  export type StoredMessageGroupByOutputType = {
    id: string
    chatId: string
    content: string
    role: $Enums.Role
    created_at: Date
    isPartial: boolean | null
    model: string
    lastModified: Date | null
    _count: StoredMessageCountAggregateOutputType | null
    _min: StoredMessageMinAggregateOutputType | null
    _max: StoredMessageMaxAggregateOutputType | null
  }

  type GetStoredMessageGroupByPayload<T extends StoredMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoredMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoredMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoredMessageGroupByOutputType[P]>
            : GetScalarType<T[P], StoredMessageGroupByOutputType[P]>
        }
      >
    >


  export type StoredMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    content?: boolean
    role?: boolean
    created_at?: boolean
    isPartial?: boolean
    model?: boolean
    lastModified?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storedMessage"]>

  export type StoredMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    content?: boolean
    role?: boolean
    created_at?: boolean
    isPartial?: boolean
    model?: boolean
    lastModified?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storedMessage"]>

  export type StoredMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    content?: boolean
    role?: boolean
    created_at?: boolean
    isPartial?: boolean
    model?: boolean
    lastModified?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storedMessage"]>

  export type StoredMessageSelectScalar = {
    id?: boolean
    chatId?: boolean
    content?: boolean
    role?: boolean
    created_at?: boolean
    isPartial?: boolean
    model?: boolean
    lastModified?: boolean
  }

  export type StoredMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "content" | "role" | "created_at" | "isPartial" | "model" | "lastModified", ExtArgs["result"]["storedMessage"]>
  export type StoredMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type StoredMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type StoredMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $StoredMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoredMessage"
    objects: {
      Chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      content: string
      role: $Enums.Role
      created_at: Date
      isPartial: boolean | null
      model: string
      lastModified: Date | null
    }, ExtArgs["result"]["storedMessage"]>
    composites: {}
  }

  type StoredMessageGetPayload<S extends boolean | null | undefined | StoredMessageDefaultArgs> = $Result.GetResult<Prisma.$StoredMessagePayload, S>

  type StoredMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoredMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoredMessageCountAggregateInputType | true
    }

  export interface StoredMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoredMessage'], meta: { name: 'StoredMessage' } }
    /**
     * Find zero or one StoredMessage that matches the filter.
     * @param {StoredMessageFindUniqueArgs} args - Arguments to find a StoredMessage
     * @example
     * // Get one StoredMessage
     * const storedMessage = await prisma.storedMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoredMessageFindUniqueArgs>(args: SelectSubset<T, StoredMessageFindUniqueArgs<ExtArgs>>): Prisma__StoredMessageClient<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoredMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoredMessageFindUniqueOrThrowArgs} args - Arguments to find a StoredMessage
     * @example
     * // Get one StoredMessage
     * const storedMessage = await prisma.storedMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoredMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, StoredMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoredMessageClient<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoredMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredMessageFindFirstArgs} args - Arguments to find a StoredMessage
     * @example
     * // Get one StoredMessage
     * const storedMessage = await prisma.storedMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoredMessageFindFirstArgs>(args?: SelectSubset<T, StoredMessageFindFirstArgs<ExtArgs>>): Prisma__StoredMessageClient<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoredMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredMessageFindFirstOrThrowArgs} args - Arguments to find a StoredMessage
     * @example
     * // Get one StoredMessage
     * const storedMessage = await prisma.storedMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoredMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, StoredMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoredMessageClient<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoredMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoredMessages
     * const storedMessages = await prisma.storedMessage.findMany()
     * 
     * // Get first 10 StoredMessages
     * const storedMessages = await prisma.storedMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storedMessageWithIdOnly = await prisma.storedMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoredMessageFindManyArgs>(args?: SelectSubset<T, StoredMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoredMessage.
     * @param {StoredMessageCreateArgs} args - Arguments to create a StoredMessage.
     * @example
     * // Create one StoredMessage
     * const StoredMessage = await prisma.storedMessage.create({
     *   data: {
     *     // ... data to create a StoredMessage
     *   }
     * })
     * 
     */
    create<T extends StoredMessageCreateArgs>(args: SelectSubset<T, StoredMessageCreateArgs<ExtArgs>>): Prisma__StoredMessageClient<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoredMessages.
     * @param {StoredMessageCreateManyArgs} args - Arguments to create many StoredMessages.
     * @example
     * // Create many StoredMessages
     * const storedMessage = await prisma.storedMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoredMessageCreateManyArgs>(args?: SelectSubset<T, StoredMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoredMessages and returns the data saved in the database.
     * @param {StoredMessageCreateManyAndReturnArgs} args - Arguments to create many StoredMessages.
     * @example
     * // Create many StoredMessages
     * const storedMessage = await prisma.storedMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoredMessages and only return the `id`
     * const storedMessageWithIdOnly = await prisma.storedMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoredMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, StoredMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoredMessage.
     * @param {StoredMessageDeleteArgs} args - Arguments to delete one StoredMessage.
     * @example
     * // Delete one StoredMessage
     * const StoredMessage = await prisma.storedMessage.delete({
     *   where: {
     *     // ... filter to delete one StoredMessage
     *   }
     * })
     * 
     */
    delete<T extends StoredMessageDeleteArgs>(args: SelectSubset<T, StoredMessageDeleteArgs<ExtArgs>>): Prisma__StoredMessageClient<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoredMessage.
     * @param {StoredMessageUpdateArgs} args - Arguments to update one StoredMessage.
     * @example
     * // Update one StoredMessage
     * const storedMessage = await prisma.storedMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoredMessageUpdateArgs>(args: SelectSubset<T, StoredMessageUpdateArgs<ExtArgs>>): Prisma__StoredMessageClient<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoredMessages.
     * @param {StoredMessageDeleteManyArgs} args - Arguments to filter StoredMessages to delete.
     * @example
     * // Delete a few StoredMessages
     * const { count } = await prisma.storedMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoredMessageDeleteManyArgs>(args?: SelectSubset<T, StoredMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoredMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoredMessages
     * const storedMessage = await prisma.storedMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoredMessageUpdateManyArgs>(args: SelectSubset<T, StoredMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoredMessages and returns the data updated in the database.
     * @param {StoredMessageUpdateManyAndReturnArgs} args - Arguments to update many StoredMessages.
     * @example
     * // Update many StoredMessages
     * const storedMessage = await prisma.storedMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoredMessages and only return the `id`
     * const storedMessageWithIdOnly = await prisma.storedMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends StoredMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, StoredMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoredMessage.
     * @param {StoredMessageUpsertArgs} args - Arguments to update or create a StoredMessage.
     * @example
     * // Update or create a StoredMessage
     * const storedMessage = await prisma.storedMessage.upsert({
     *   create: {
     *     // ... data to create a StoredMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoredMessage we want to update
     *   }
     * })
     */
    upsert<T extends StoredMessageUpsertArgs>(args: SelectSubset<T, StoredMessageUpsertArgs<ExtArgs>>): Prisma__StoredMessageClient<$Result.GetResult<Prisma.$StoredMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoredMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredMessageCountArgs} args - Arguments to filter StoredMessages to count.
     * @example
     * // Count the number of StoredMessages
     * const count = await prisma.storedMessage.count({
     *   where: {
     *     // ... the filter for the StoredMessages we want to count
     *   }
     * })
    **/
    count<T extends StoredMessageCountArgs>(
      args?: Subset<T, StoredMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoredMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoredMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoredMessageAggregateArgs>(args: Subset<T, StoredMessageAggregateArgs>): Prisma.PrismaPromise<GetStoredMessageAggregateType<T>>

    /**
     * Group by StoredMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredMessageGroupByArgs} args - Group by arguments.
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
      T extends StoredMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoredMessageGroupByArgs['orderBy'] }
        : { orderBy?: StoredMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoredMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoredMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoredMessage model
   */
  readonly fields: StoredMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoredMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoredMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StoredMessage model
   */
  interface StoredMessageFieldRefs {
    readonly id: FieldRef<"StoredMessage", 'String'>
    readonly chatId: FieldRef<"StoredMessage", 'String'>
    readonly content: FieldRef<"StoredMessage", 'String'>
    readonly role: FieldRef<"StoredMessage", 'Role'>
    readonly created_at: FieldRef<"StoredMessage", 'DateTime'>
    readonly isPartial: FieldRef<"StoredMessage", 'Boolean'>
    readonly model: FieldRef<"StoredMessage", 'String'>
    readonly lastModified: FieldRef<"StoredMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoredMessage findUnique
   */
  export type StoredMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
    /**
     * Filter, which StoredMessage to fetch.
     */
    where: StoredMessageWhereUniqueInput
  }

  /**
   * StoredMessage findUniqueOrThrow
   */
  export type StoredMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
    /**
     * Filter, which StoredMessage to fetch.
     */
    where: StoredMessageWhereUniqueInput
  }

  /**
   * StoredMessage findFirst
   */
  export type StoredMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
    /**
     * Filter, which StoredMessage to fetch.
     */
    where?: StoredMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoredMessages to fetch.
     */
    orderBy?: StoredMessageOrderByWithRelationInput | StoredMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoredMessages.
     */
    cursor?: StoredMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoredMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoredMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoredMessages.
     */
    distinct?: StoredMessageScalarFieldEnum | StoredMessageScalarFieldEnum[]
  }

  /**
   * StoredMessage findFirstOrThrow
   */
  export type StoredMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
    /**
     * Filter, which StoredMessage to fetch.
     */
    where?: StoredMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoredMessages to fetch.
     */
    orderBy?: StoredMessageOrderByWithRelationInput | StoredMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoredMessages.
     */
    cursor?: StoredMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoredMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoredMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoredMessages.
     */
    distinct?: StoredMessageScalarFieldEnum | StoredMessageScalarFieldEnum[]
  }

  /**
   * StoredMessage findMany
   */
  export type StoredMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
    /**
     * Filter, which StoredMessages to fetch.
     */
    where?: StoredMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoredMessages to fetch.
     */
    orderBy?: StoredMessageOrderByWithRelationInput | StoredMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoredMessages.
     */
    cursor?: StoredMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoredMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoredMessages.
     */
    skip?: number
    distinct?: StoredMessageScalarFieldEnum | StoredMessageScalarFieldEnum[]
  }

  /**
   * StoredMessage create
   */
  export type StoredMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a StoredMessage.
     */
    data: XOR<StoredMessageCreateInput, StoredMessageUncheckedCreateInput>
  }

  /**
   * StoredMessage createMany
   */
  export type StoredMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoredMessages.
     */
    data: StoredMessageCreateManyInput | StoredMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoredMessage createManyAndReturn
   */
  export type StoredMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * The data used to create many StoredMessages.
     */
    data: StoredMessageCreateManyInput | StoredMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoredMessage update
   */
  export type StoredMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a StoredMessage.
     */
    data: XOR<StoredMessageUpdateInput, StoredMessageUncheckedUpdateInput>
    /**
     * Choose, which StoredMessage to update.
     */
    where: StoredMessageWhereUniqueInput
  }

  /**
   * StoredMessage updateMany
   */
  export type StoredMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoredMessages.
     */
    data: XOR<StoredMessageUpdateManyMutationInput, StoredMessageUncheckedUpdateManyInput>
    /**
     * Filter which StoredMessages to update
     */
    where?: StoredMessageWhereInput
    /**
     * Limit how many StoredMessages to update.
     */
    limit?: number
  }

  /**
   * StoredMessage updateManyAndReturn
   */
  export type StoredMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * The data used to update StoredMessages.
     */
    data: XOR<StoredMessageUpdateManyMutationInput, StoredMessageUncheckedUpdateManyInput>
    /**
     * Filter which StoredMessages to update
     */
    where?: StoredMessageWhereInput
    /**
     * Limit how many StoredMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoredMessage upsert
   */
  export type StoredMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the StoredMessage to update in case it exists.
     */
    where: StoredMessageWhereUniqueInput
    /**
     * In case the StoredMessage found by the `where` argument doesn't exist, create a new StoredMessage with this data.
     */
    create: XOR<StoredMessageCreateInput, StoredMessageUncheckedCreateInput>
    /**
     * In case the StoredMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoredMessageUpdateInput, StoredMessageUncheckedUpdateInput>
  }

  /**
   * StoredMessage delete
   */
  export type StoredMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
    /**
     * Filter which StoredMessage to delete.
     */
    where: StoredMessageWhereUniqueInput
  }

  /**
   * StoredMessage deleteMany
   */
  export type StoredMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoredMessages to delete
     */
    where?: StoredMessageWhereInput
    /**
     * Limit how many StoredMessages to delete.
     */
    limit?: number
  }

  /**
   * StoredMessage without action
   */
  export type StoredMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredMessage
     */
    select?: StoredMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredMessage
     */
    omit?: StoredMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredMessageInclude<ExtArgs> | null
  }


  /**
   * Model Keys
   */

  export type AggregateKeys = {
    _count: KeysCountAggregateOutputType | null
    _min: KeysMinAggregateOutputType | null
    _max: KeysMaxAggregateOutputType | null
  }

  export type KeysMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userEmail: string | null
    OpenAiKey: string | null
    OpenRouterKey: string | null
  }

  export type KeysMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userEmail: string | null
    OpenAiKey: string | null
    OpenRouterKey: string | null
  }

  export type KeysCountAggregateOutputType = {
    id: number
    userId: number
    userEmail: number
    OpenAiKey: number
    OpenRouterKey: number
    _all: number
  }


  export type KeysMinAggregateInputType = {
    id?: true
    userId?: true
    userEmail?: true
    OpenAiKey?: true
    OpenRouterKey?: true
  }

  export type KeysMaxAggregateInputType = {
    id?: true
    userId?: true
    userEmail?: true
    OpenAiKey?: true
    OpenRouterKey?: true
  }

  export type KeysCountAggregateInputType = {
    id?: true
    userId?: true
    userEmail?: true
    OpenAiKey?: true
    OpenRouterKey?: true
    _all?: true
  }

  export type KeysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keys to aggregate.
     */
    where?: KeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeysOrderByWithRelationInput | KeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keys
    **/
    _count?: true | KeysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeysMaxAggregateInputType
  }

  export type GetKeysAggregateType<T extends KeysAggregateArgs> = {
        [P in keyof T & keyof AggregateKeys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeys[P]>
      : GetScalarType<T[P], AggregateKeys[P]>
  }




  export type KeysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeysWhereInput
    orderBy?: KeysOrderByWithAggregationInput | KeysOrderByWithAggregationInput[]
    by: KeysScalarFieldEnum[] | KeysScalarFieldEnum
    having?: KeysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeysCountAggregateInputType | true
    _min?: KeysMinAggregateInputType
    _max?: KeysMaxAggregateInputType
  }

  export type KeysGroupByOutputType = {
    id: string
    userId: string
    userEmail: string
    OpenAiKey: string
    OpenRouterKey: string
    _count: KeysCountAggregateOutputType | null
    _min: KeysMinAggregateOutputType | null
    _max: KeysMaxAggregateOutputType | null
  }

  type GetKeysGroupByPayload<T extends KeysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeysGroupByOutputType[P]>
            : GetScalarType<T[P], KeysGroupByOutputType[P]>
        }
      >
    >


  export type KeysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userEmail?: boolean
    OpenAiKey?: boolean
    OpenRouterKey?: boolean
  }, ExtArgs["result"]["keys"]>

  export type KeysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userEmail?: boolean
    OpenAiKey?: boolean
    OpenRouterKey?: boolean
  }, ExtArgs["result"]["keys"]>

  export type KeysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userEmail?: boolean
    OpenAiKey?: boolean
    OpenRouterKey?: boolean
  }, ExtArgs["result"]["keys"]>

  export type KeysSelectScalar = {
    id?: boolean
    userId?: boolean
    userEmail?: boolean
    OpenAiKey?: boolean
    OpenRouterKey?: boolean
  }

  export type KeysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userEmail" | "OpenAiKey" | "OpenRouterKey", ExtArgs["result"]["keys"]>

  export type $KeysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keys"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userEmail: string
      OpenAiKey: string
      OpenRouterKey: string
    }, ExtArgs["result"]["keys"]>
    composites: {}
  }

  type KeysGetPayload<S extends boolean | null | undefined | KeysDefaultArgs> = $Result.GetResult<Prisma.$KeysPayload, S>

  type KeysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeysCountAggregateInputType | true
    }

  export interface KeysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keys'], meta: { name: 'Keys' } }
    /**
     * Find zero or one Keys that matches the filter.
     * @param {KeysFindUniqueArgs} args - Arguments to find a Keys
     * @example
     * // Get one Keys
     * const keys = await prisma.keys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeysFindUniqueArgs>(args: SelectSubset<T, KeysFindUniqueArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeysFindUniqueOrThrowArgs} args - Arguments to find a Keys
     * @example
     * // Get one Keys
     * const keys = await prisma.keys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeysFindUniqueOrThrowArgs>(args: SelectSubset<T, KeysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysFindFirstArgs} args - Arguments to find a Keys
     * @example
     * // Get one Keys
     * const keys = await prisma.keys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeysFindFirstArgs>(args?: SelectSubset<T, KeysFindFirstArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysFindFirstOrThrowArgs} args - Arguments to find a Keys
     * @example
     * // Get one Keys
     * const keys = await prisma.keys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeysFindFirstOrThrowArgs>(args?: SelectSubset<T, KeysFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keys
     * const keys = await prisma.keys.findMany()
     * 
     * // Get first 10 Keys
     * const keys = await prisma.keys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keysWithIdOnly = await prisma.keys.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeysFindManyArgs>(args?: SelectSubset<T, KeysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keys.
     * @param {KeysCreateArgs} args - Arguments to create a Keys.
     * @example
     * // Create one Keys
     * const Keys = await prisma.keys.create({
     *   data: {
     *     // ... data to create a Keys
     *   }
     * })
     * 
     */
    create<T extends KeysCreateArgs>(args: SelectSubset<T, KeysCreateArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keys.
     * @param {KeysCreateManyArgs} args - Arguments to create many Keys.
     * @example
     * // Create many Keys
     * const keys = await prisma.keys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeysCreateManyArgs>(args?: SelectSubset<T, KeysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keys and returns the data saved in the database.
     * @param {KeysCreateManyAndReturnArgs} args - Arguments to create many Keys.
     * @example
     * // Create many Keys
     * const keys = await prisma.keys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keys and only return the `id`
     * const keysWithIdOnly = await prisma.keys.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeysCreateManyAndReturnArgs>(args?: SelectSubset<T, KeysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keys.
     * @param {KeysDeleteArgs} args - Arguments to delete one Keys.
     * @example
     * // Delete one Keys
     * const Keys = await prisma.keys.delete({
     *   where: {
     *     // ... filter to delete one Keys
     *   }
     * })
     * 
     */
    delete<T extends KeysDeleteArgs>(args: SelectSubset<T, KeysDeleteArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keys.
     * @param {KeysUpdateArgs} args - Arguments to update one Keys.
     * @example
     * // Update one Keys
     * const keys = await prisma.keys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeysUpdateArgs>(args: SelectSubset<T, KeysUpdateArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keys.
     * @param {KeysDeleteManyArgs} args - Arguments to filter Keys to delete.
     * @example
     * // Delete a few Keys
     * const { count } = await prisma.keys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeysDeleteManyArgs>(args?: SelectSubset<T, KeysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keys
     * const keys = await prisma.keys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeysUpdateManyArgs>(args: SelectSubset<T, KeysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keys and returns the data updated in the database.
     * @param {KeysUpdateManyAndReturnArgs} args - Arguments to update many Keys.
     * @example
     * // Update many Keys
     * const keys = await prisma.keys.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keys and only return the `id`
     * const keysWithIdOnly = await prisma.keys.updateManyAndReturn({
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
    updateManyAndReturn<T extends KeysUpdateManyAndReturnArgs>(args: SelectSubset<T, KeysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keys.
     * @param {KeysUpsertArgs} args - Arguments to update or create a Keys.
     * @example
     * // Update or create a Keys
     * const keys = await prisma.keys.upsert({
     *   create: {
     *     // ... data to create a Keys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keys we want to update
     *   }
     * })
     */
    upsert<T extends KeysUpsertArgs>(args: SelectSubset<T, KeysUpsertArgs<ExtArgs>>): Prisma__KeysClient<$Result.GetResult<Prisma.$KeysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysCountArgs} args - Arguments to filter Keys to count.
     * @example
     * // Count the number of Keys
     * const count = await prisma.keys.count({
     *   where: {
     *     // ... the filter for the Keys we want to count
     *   }
     * })
    **/
    count<T extends KeysCountArgs>(
      args?: Subset<T, KeysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeysAggregateArgs>(args: Subset<T, KeysAggregateArgs>): Prisma.PrismaPromise<GetKeysAggregateType<T>>

    /**
     * Group by Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeysGroupByArgs} args - Group by arguments.
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
      T extends KeysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeysGroupByArgs['orderBy'] }
        : { orderBy?: KeysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keys model
   */
  readonly fields: KeysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Keys model
   */
  interface KeysFieldRefs {
    readonly id: FieldRef<"Keys", 'String'>
    readonly userId: FieldRef<"Keys", 'String'>
    readonly userEmail: FieldRef<"Keys", 'String'>
    readonly OpenAiKey: FieldRef<"Keys", 'String'>
    readonly OpenRouterKey: FieldRef<"Keys", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Keys findUnique
   */
  export type KeysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where: KeysWhereUniqueInput
  }

  /**
   * Keys findUniqueOrThrow
   */
  export type KeysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where: KeysWhereUniqueInput
  }

  /**
   * Keys findFirst
   */
  export type KeysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where?: KeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeysOrderByWithRelationInput | KeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeysScalarFieldEnum | KeysScalarFieldEnum[]
  }

  /**
   * Keys findFirstOrThrow
   */
  export type KeysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where?: KeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeysOrderByWithRelationInput | KeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeysScalarFieldEnum | KeysScalarFieldEnum[]
  }

  /**
   * Keys findMany
   */
  export type KeysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where?: KeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeysOrderByWithRelationInput | KeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keys.
     */
    cursor?: KeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    distinct?: KeysScalarFieldEnum | KeysScalarFieldEnum[]
  }

  /**
   * Keys create
   */
  export type KeysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * The data needed to create a Keys.
     */
    data: XOR<KeysCreateInput, KeysUncheckedCreateInput>
  }

  /**
   * Keys createMany
   */
  export type KeysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keys.
     */
    data: KeysCreateManyInput | KeysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keys createManyAndReturn
   */
  export type KeysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * The data used to create many Keys.
     */
    data: KeysCreateManyInput | KeysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keys update
   */
  export type KeysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * The data needed to update a Keys.
     */
    data: XOR<KeysUpdateInput, KeysUncheckedUpdateInput>
    /**
     * Choose, which Keys to update.
     */
    where: KeysWhereUniqueInput
  }

  /**
   * Keys updateMany
   */
  export type KeysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keys.
     */
    data: XOR<KeysUpdateManyMutationInput, KeysUncheckedUpdateManyInput>
    /**
     * Filter which Keys to update
     */
    where?: KeysWhereInput
    /**
     * Limit how many Keys to update.
     */
    limit?: number
  }

  /**
   * Keys updateManyAndReturn
   */
  export type KeysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * The data used to update Keys.
     */
    data: XOR<KeysUpdateManyMutationInput, KeysUncheckedUpdateManyInput>
    /**
     * Filter which Keys to update
     */
    where?: KeysWhereInput
    /**
     * Limit how many Keys to update.
     */
    limit?: number
  }

  /**
   * Keys upsert
   */
  export type KeysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * The filter to search for the Keys to update in case it exists.
     */
    where: KeysWhereUniqueInput
    /**
     * In case the Keys found by the `where` argument doesn't exist, create a new Keys with this data.
     */
    create: XOR<KeysCreateInput, KeysUncheckedCreateInput>
    /**
     * In case the Keys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeysUpdateInput, KeysUncheckedUpdateInput>
  }

  /**
   * Keys delete
   */
  export type KeysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
    /**
     * Filter which Keys to delete.
     */
    where: KeysWhereUniqueInput
  }

  /**
   * Keys deleteMany
   */
  export type KeysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keys to delete
     */
    where?: KeysWhereInput
    /**
     * Limit how many Keys to delete.
     */
    limit?: number
  }

  /**
   * Keys without action
   */
  export type KeysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keys
     */
    select?: KeysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keys
     */
    omit?: KeysOmit<ExtArgs> | null
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


  export const ChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userEmail: 'userEmail',
    title: 'title',
    created_at: 'created_at',
    updated_at: 'updated_at',
    lastSynced: 'lastSynced',
    empty: 'empty',
    parentId: 'parentId'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const StoredMessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    content: 'content',
    role: 'role',
    created_at: 'created_at',
    isPartial: 'isPartial',
    model: 'model',
    lastModified: 'lastModified'
  };

  export type StoredMessageScalarFieldEnum = (typeof StoredMessageScalarFieldEnum)[keyof typeof StoredMessageScalarFieldEnum]


  export const KeysScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userEmail: 'userEmail',
    OpenAiKey: 'OpenAiKey',
    OpenRouterKey: 'OpenRouterKey'
  };

  export type KeysScalarFieldEnum = (typeof KeysScalarFieldEnum)[keyof typeof KeysScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    userEmail?: StringFilter<"Chat"> | string
    title?: StringNullableFilter<"Chat"> | string | null
    created_at?: DateTimeFilter<"Chat"> | Date | string
    updated_at?: DateTimeFilter<"Chat"> | Date | string
    lastSynced?: DateTimeNullableFilter<"Chat"> | Date | string | null
    empty?: BoolFilter<"Chat"> | boolean
    parentId?: StringNullableFilter<"Chat"> | string | null
    StoredMessage?: StoredMessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    title?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lastSynced?: SortOrderInput | SortOrder
    empty?: SortOrder
    parentId?: SortOrderInput | SortOrder
    StoredMessage?: StoredMessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    userId?: StringFilter<"Chat"> | string
    userEmail?: StringFilter<"Chat"> | string
    title?: StringNullableFilter<"Chat"> | string | null
    created_at?: DateTimeFilter<"Chat"> | Date | string
    updated_at?: DateTimeFilter<"Chat"> | Date | string
    lastSynced?: DateTimeNullableFilter<"Chat"> | Date | string | null
    empty?: BoolFilter<"Chat"> | boolean
    parentId?: StringNullableFilter<"Chat"> | string | null
    StoredMessage?: StoredMessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    title?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lastSynced?: SortOrderInput | SortOrder
    empty?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    userId?: StringWithAggregatesFilter<"Chat"> | string
    userEmail?: StringWithAggregatesFilter<"Chat"> | string
    title?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    lastSynced?: DateTimeNullableWithAggregatesFilter<"Chat"> | Date | string | null
    empty?: BoolWithAggregatesFilter<"Chat"> | boolean
    parentId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
  }

  export type StoredMessageWhereInput = {
    AND?: StoredMessageWhereInput | StoredMessageWhereInput[]
    OR?: StoredMessageWhereInput[]
    NOT?: StoredMessageWhereInput | StoredMessageWhereInput[]
    id?: StringFilter<"StoredMessage"> | string
    chatId?: StringFilter<"StoredMessage"> | string
    content?: StringFilter<"StoredMessage"> | string
    role?: EnumRoleFilter<"StoredMessage"> | $Enums.Role
    created_at?: DateTimeFilter<"StoredMessage"> | Date | string
    isPartial?: BoolNullableFilter<"StoredMessage"> | boolean | null
    model?: StringFilter<"StoredMessage"> | string
    lastModified?: DateTimeNullableFilter<"StoredMessage"> | Date | string | null
    Chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type StoredMessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    isPartial?: SortOrderInput | SortOrder
    model?: SortOrder
    lastModified?: SortOrderInput | SortOrder
    Chat?: ChatOrderByWithRelationInput
  }

  export type StoredMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoredMessageWhereInput | StoredMessageWhereInput[]
    OR?: StoredMessageWhereInput[]
    NOT?: StoredMessageWhereInput | StoredMessageWhereInput[]
    chatId?: StringFilter<"StoredMessage"> | string
    content?: StringFilter<"StoredMessage"> | string
    role?: EnumRoleFilter<"StoredMessage"> | $Enums.Role
    created_at?: DateTimeFilter<"StoredMessage"> | Date | string
    isPartial?: BoolNullableFilter<"StoredMessage"> | boolean | null
    model?: StringFilter<"StoredMessage"> | string
    lastModified?: DateTimeNullableFilter<"StoredMessage"> | Date | string | null
    Chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type StoredMessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    isPartial?: SortOrderInput | SortOrder
    model?: SortOrder
    lastModified?: SortOrderInput | SortOrder
    _count?: StoredMessageCountOrderByAggregateInput
    _max?: StoredMessageMaxOrderByAggregateInput
    _min?: StoredMessageMinOrderByAggregateInput
  }

  export type StoredMessageScalarWhereWithAggregatesInput = {
    AND?: StoredMessageScalarWhereWithAggregatesInput | StoredMessageScalarWhereWithAggregatesInput[]
    OR?: StoredMessageScalarWhereWithAggregatesInput[]
    NOT?: StoredMessageScalarWhereWithAggregatesInput | StoredMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoredMessage"> | string
    chatId?: StringWithAggregatesFilter<"StoredMessage"> | string
    content?: StringWithAggregatesFilter<"StoredMessage"> | string
    role?: EnumRoleWithAggregatesFilter<"StoredMessage"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"StoredMessage"> | Date | string
    isPartial?: BoolNullableWithAggregatesFilter<"StoredMessage"> | boolean | null
    model?: StringWithAggregatesFilter<"StoredMessage"> | string
    lastModified?: DateTimeNullableWithAggregatesFilter<"StoredMessage"> | Date | string | null
  }

  export type KeysWhereInput = {
    AND?: KeysWhereInput | KeysWhereInput[]
    OR?: KeysWhereInput[]
    NOT?: KeysWhereInput | KeysWhereInput[]
    id?: StringFilter<"Keys"> | string
    userId?: StringFilter<"Keys"> | string
    userEmail?: StringFilter<"Keys"> | string
    OpenAiKey?: StringFilter<"Keys"> | string
    OpenRouterKey?: StringFilter<"Keys"> | string
  }

  export type KeysOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    OpenAiKey?: SortOrder
    OpenRouterKey?: SortOrder
  }

  export type KeysWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: KeysWhereInput | KeysWhereInput[]
    OR?: KeysWhereInput[]
    NOT?: KeysWhereInput | KeysWhereInput[]
    userEmail?: StringFilter<"Keys"> | string
    OpenAiKey?: StringFilter<"Keys"> | string
    OpenRouterKey?: StringFilter<"Keys"> | string
  }, "id" | "userId">

  export type KeysOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    OpenAiKey?: SortOrder
    OpenRouterKey?: SortOrder
    _count?: KeysCountOrderByAggregateInput
    _max?: KeysMaxOrderByAggregateInput
    _min?: KeysMinOrderByAggregateInput
  }

  export type KeysScalarWhereWithAggregatesInput = {
    AND?: KeysScalarWhereWithAggregatesInput | KeysScalarWhereWithAggregatesInput[]
    OR?: KeysScalarWhereWithAggregatesInput[]
    NOT?: KeysScalarWhereWithAggregatesInput | KeysScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Keys"> | string
    userId?: StringWithAggregatesFilter<"Keys"> | string
    userEmail?: StringWithAggregatesFilter<"Keys"> | string
    OpenAiKey?: StringWithAggregatesFilter<"Keys"> | string
    OpenRouterKey?: StringWithAggregatesFilter<"Keys"> | string
  }

  export type ChatCreateInput = {
    id?: string
    userId: string
    userEmail: string
    title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    lastSynced?: Date | string | null
    empty: boolean
    parentId?: string | null
    StoredMessage?: StoredMessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    userId: string
    userEmail: string
    title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    lastSynced?: Date | string | null
    empty: boolean
    parentId?: string | null
    StoredMessage?: StoredMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empty?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    StoredMessage?: StoredMessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empty?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    StoredMessage?: StoredMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    userId: string
    userEmail: string
    title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    lastSynced?: Date | string | null
    empty: boolean
    parentId?: string | null
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empty?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empty?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoredMessageCreateInput = {
    id?: string
    content: string
    role: $Enums.Role
    created_at?: Date | string
    isPartial?: boolean | null
    model: string
    lastModified?: Date | string | null
    Chat: ChatCreateNestedOneWithoutStoredMessageInput
  }

  export type StoredMessageUncheckedCreateInput = {
    id?: string
    chatId: string
    content: string
    role: $Enums.Role
    created_at?: Date | string
    isPartial?: boolean | null
    model: string
    lastModified?: Date | string | null
  }

  export type StoredMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPartial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model?: StringFieldUpdateOperationsInput | string
    lastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Chat?: ChatUpdateOneRequiredWithoutStoredMessageNestedInput
  }

  export type StoredMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPartial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model?: StringFieldUpdateOperationsInput | string
    lastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoredMessageCreateManyInput = {
    id?: string
    chatId: string
    content: string
    role: $Enums.Role
    created_at?: Date | string
    isPartial?: boolean | null
    model: string
    lastModified?: Date | string | null
  }

  export type StoredMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPartial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model?: StringFieldUpdateOperationsInput | string
    lastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoredMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPartial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model?: StringFieldUpdateOperationsInput | string
    lastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KeysCreateInput = {
    id?: string
    userId: string
    userEmail: string
    OpenAiKey: string
    OpenRouterKey: string
  }

  export type KeysUncheckedCreateInput = {
    id?: string
    userId: string
    userEmail: string
    OpenAiKey: string
    OpenRouterKey: string
  }

  export type KeysUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    OpenAiKey?: StringFieldUpdateOperationsInput | string
    OpenRouterKey?: StringFieldUpdateOperationsInput | string
  }

  export type KeysUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    OpenAiKey?: StringFieldUpdateOperationsInput | string
    OpenRouterKey?: StringFieldUpdateOperationsInput | string
  }

  export type KeysCreateManyInput = {
    id?: string
    userId: string
    userEmail: string
    OpenAiKey: string
    OpenRouterKey: string
  }

  export type KeysUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    OpenAiKey?: StringFieldUpdateOperationsInput | string
    OpenRouterKey?: StringFieldUpdateOperationsInput | string
  }

  export type KeysUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    OpenAiKey?: StringFieldUpdateOperationsInput | string
    OpenRouterKey?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StoredMessageListRelationFilter = {
    every?: StoredMessageWhereInput
    some?: StoredMessageWhereInput
    none?: StoredMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StoredMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lastSynced?: SortOrder
    empty?: SortOrder
    parentId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lastSynced?: SortOrder
    empty?: SortOrder
    parentId?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lastSynced?: SortOrder
    empty?: SortOrder
    parentId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type StoredMessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    isPartial?: SortOrder
    model?: SortOrder
    lastModified?: SortOrder
  }

  export type StoredMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    isPartial?: SortOrder
    model?: SortOrder
    lastModified?: SortOrder
  }

  export type StoredMessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    content?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    isPartial?: SortOrder
    model?: SortOrder
    lastModified?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type KeysCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    OpenAiKey?: SortOrder
    OpenRouterKey?: SortOrder
  }

  export type KeysMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    OpenAiKey?: SortOrder
    OpenRouterKey?: SortOrder
  }

  export type KeysMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userEmail?: SortOrder
    OpenAiKey?: SortOrder
    OpenRouterKey?: SortOrder
  }

  export type StoredMessageCreateNestedManyWithoutChatInput = {
    create?: XOR<StoredMessageCreateWithoutChatInput, StoredMessageUncheckedCreateWithoutChatInput> | StoredMessageCreateWithoutChatInput[] | StoredMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: StoredMessageCreateOrConnectWithoutChatInput | StoredMessageCreateOrConnectWithoutChatInput[]
    createMany?: StoredMessageCreateManyChatInputEnvelope
    connect?: StoredMessageWhereUniqueInput | StoredMessageWhereUniqueInput[]
  }

  export type StoredMessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<StoredMessageCreateWithoutChatInput, StoredMessageUncheckedCreateWithoutChatInput> | StoredMessageCreateWithoutChatInput[] | StoredMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: StoredMessageCreateOrConnectWithoutChatInput | StoredMessageCreateOrConnectWithoutChatInput[]
    createMany?: StoredMessageCreateManyChatInputEnvelope
    connect?: StoredMessageWhereUniqueInput | StoredMessageWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StoredMessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<StoredMessageCreateWithoutChatInput, StoredMessageUncheckedCreateWithoutChatInput> | StoredMessageCreateWithoutChatInput[] | StoredMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: StoredMessageCreateOrConnectWithoutChatInput | StoredMessageCreateOrConnectWithoutChatInput[]
    upsert?: StoredMessageUpsertWithWhereUniqueWithoutChatInput | StoredMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: StoredMessageCreateManyChatInputEnvelope
    set?: StoredMessageWhereUniqueInput | StoredMessageWhereUniqueInput[]
    disconnect?: StoredMessageWhereUniqueInput | StoredMessageWhereUniqueInput[]
    delete?: StoredMessageWhereUniqueInput | StoredMessageWhereUniqueInput[]
    connect?: StoredMessageWhereUniqueInput | StoredMessageWhereUniqueInput[]
    update?: StoredMessageUpdateWithWhereUniqueWithoutChatInput | StoredMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: StoredMessageUpdateManyWithWhereWithoutChatInput | StoredMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: StoredMessageScalarWhereInput | StoredMessageScalarWhereInput[]
  }

  export type StoredMessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<StoredMessageCreateWithoutChatInput, StoredMessageUncheckedCreateWithoutChatInput> | StoredMessageCreateWithoutChatInput[] | StoredMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: StoredMessageCreateOrConnectWithoutChatInput | StoredMessageCreateOrConnectWithoutChatInput[]
    upsert?: StoredMessageUpsertWithWhereUniqueWithoutChatInput | StoredMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: StoredMessageCreateManyChatInputEnvelope
    set?: StoredMessageWhereUniqueInput | StoredMessageWhereUniqueInput[]
    disconnect?: StoredMessageWhereUniqueInput | StoredMessageWhereUniqueInput[]
    delete?: StoredMessageWhereUniqueInput | StoredMessageWhereUniqueInput[]
    connect?: StoredMessageWhereUniqueInput | StoredMessageWhereUniqueInput[]
    update?: StoredMessageUpdateWithWhereUniqueWithoutChatInput | StoredMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: StoredMessageUpdateManyWithWhereWithoutChatInput | StoredMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: StoredMessageScalarWhereInput | StoredMessageScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutStoredMessageInput = {
    create?: XOR<ChatCreateWithoutStoredMessageInput, ChatUncheckedCreateWithoutStoredMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutStoredMessageInput
    connect?: ChatWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ChatUpdateOneRequiredWithoutStoredMessageNestedInput = {
    create?: XOR<ChatCreateWithoutStoredMessageInput, ChatUncheckedCreateWithoutStoredMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutStoredMessageInput
    upsert?: ChatUpsertWithoutStoredMessageInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutStoredMessageInput, ChatUpdateWithoutStoredMessageInput>, ChatUncheckedUpdateWithoutStoredMessageInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StoredMessageCreateWithoutChatInput = {
    id?: string
    content: string
    role: $Enums.Role
    created_at?: Date | string
    isPartial?: boolean | null
    model: string
    lastModified?: Date | string | null
  }

  export type StoredMessageUncheckedCreateWithoutChatInput = {
    id?: string
    content: string
    role: $Enums.Role
    created_at?: Date | string
    isPartial?: boolean | null
    model: string
    lastModified?: Date | string | null
  }

  export type StoredMessageCreateOrConnectWithoutChatInput = {
    where: StoredMessageWhereUniqueInput
    create: XOR<StoredMessageCreateWithoutChatInput, StoredMessageUncheckedCreateWithoutChatInput>
  }

  export type StoredMessageCreateManyChatInputEnvelope = {
    data: StoredMessageCreateManyChatInput | StoredMessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type StoredMessageUpsertWithWhereUniqueWithoutChatInput = {
    where: StoredMessageWhereUniqueInput
    update: XOR<StoredMessageUpdateWithoutChatInput, StoredMessageUncheckedUpdateWithoutChatInput>
    create: XOR<StoredMessageCreateWithoutChatInput, StoredMessageUncheckedCreateWithoutChatInput>
  }

  export type StoredMessageUpdateWithWhereUniqueWithoutChatInput = {
    where: StoredMessageWhereUniqueInput
    data: XOR<StoredMessageUpdateWithoutChatInput, StoredMessageUncheckedUpdateWithoutChatInput>
  }

  export type StoredMessageUpdateManyWithWhereWithoutChatInput = {
    where: StoredMessageScalarWhereInput
    data: XOR<StoredMessageUpdateManyMutationInput, StoredMessageUncheckedUpdateManyWithoutChatInput>
  }

  export type StoredMessageScalarWhereInput = {
    AND?: StoredMessageScalarWhereInput | StoredMessageScalarWhereInput[]
    OR?: StoredMessageScalarWhereInput[]
    NOT?: StoredMessageScalarWhereInput | StoredMessageScalarWhereInput[]
    id?: StringFilter<"StoredMessage"> | string
    chatId?: StringFilter<"StoredMessage"> | string
    content?: StringFilter<"StoredMessage"> | string
    role?: EnumRoleFilter<"StoredMessage"> | $Enums.Role
    created_at?: DateTimeFilter<"StoredMessage"> | Date | string
    isPartial?: BoolNullableFilter<"StoredMessage"> | boolean | null
    model?: StringFilter<"StoredMessage"> | string
    lastModified?: DateTimeNullableFilter<"StoredMessage"> | Date | string | null
  }

  export type ChatCreateWithoutStoredMessageInput = {
    id?: string
    userId: string
    userEmail: string
    title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    lastSynced?: Date | string | null
    empty: boolean
    parentId?: string | null
  }

  export type ChatUncheckedCreateWithoutStoredMessageInput = {
    id?: string
    userId: string
    userEmail: string
    title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    lastSynced?: Date | string | null
    empty: boolean
    parentId?: string | null
  }

  export type ChatCreateOrConnectWithoutStoredMessageInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutStoredMessageInput, ChatUncheckedCreateWithoutStoredMessageInput>
  }

  export type ChatUpsertWithoutStoredMessageInput = {
    update: XOR<ChatUpdateWithoutStoredMessageInput, ChatUncheckedUpdateWithoutStoredMessageInput>
    create: XOR<ChatCreateWithoutStoredMessageInput, ChatUncheckedCreateWithoutStoredMessageInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutStoredMessageInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutStoredMessageInput, ChatUncheckedUpdateWithoutStoredMessageInput>
  }

  export type ChatUpdateWithoutStoredMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empty?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatUncheckedUpdateWithoutStoredMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empty?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoredMessageCreateManyChatInput = {
    id?: string
    content: string
    role: $Enums.Role
    created_at?: Date | string
    isPartial?: boolean | null
    model: string
    lastModified?: Date | string | null
  }

  export type StoredMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPartial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model?: StringFieldUpdateOperationsInput | string
    lastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoredMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPartial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model?: StringFieldUpdateOperationsInput | string
    lastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoredMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPartial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    model?: StringFieldUpdateOperationsInput | string
    lastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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