export type Nominal<T, Name extends string> = T & {
  [Symbol.species]: Name;
};

export type Timestamp = Nominal<number, 'Timestamp'>;
