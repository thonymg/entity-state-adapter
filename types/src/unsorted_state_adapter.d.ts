import { EntityStateAdapter, IdSelector } from "../types/models";
export declare function createUnsortedStateAdapter<T>(selectId: IdSelector<T>): EntityStateAdapter<T>;
