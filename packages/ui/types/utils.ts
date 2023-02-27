export type RecordWithRequiredKeys<K extends PropertyKey, T extends Record<K, unknown>> = T &
  Partial<Record<Exclude<keyof T, K>, unknown>>;
