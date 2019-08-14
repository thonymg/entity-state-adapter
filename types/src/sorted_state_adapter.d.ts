import { IdSelector, Comparer, EntityStateAdapter } from "../types/models";
export declare function createSortedStateAdapter<T>(selectId: IdSelector<T>, sort: Comparer<T>): EntityStateAdapter<T>;
