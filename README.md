# Entity-state-adapter

Entity State adapter for managing record collections (based on [@ngrx/entity](https://github.com/ngrx/platform))

`Entity-state-adapter` provides an API to manipulate and query entity collections.

Reduces boilerplate for creating reducers that manage a collection of models.
Provides performant CRUD operations for managing entity collections.
Extensible adapters for selecting entity information.

### usage

in your reducer file

```javascript
export function selectUserId(a) {
  //In this case this would be optional since primary key is id
  return a.id;
}

export function sortByName(a, b): number {
  return a.name.localeCompare(b.name);
}

export const adapter = createEntityAdapter({
  selectId: selectUserId,
  sortComparer: sortByName
});
```

### Adapter Collection Methods

The entity adapter also provides methods for operations against an entity. These methods can change one to many records at a time. Each method returns the newly modified state if changes were made and the same state if no changes were made.

- `addOne`: Add one entity to the collection
- `addMany`: Add multiple entities to the collection
- `addAll`: Replace current collection with provided collection
- `removeOne`: Remove one entity from the collection
- `removeMany`: Remove multiple entities from the collection, by id or by predicate
- `removeAll`: Clear entity collection
- `updateOne`: Update one entity in the collection
- `updateMany`: Update multiple entities in the collection
- `upsertOne`: Add or Update one entity in the collection
- `upsertMany`: Add or Update multiple entities in the collection
- `map`: Update multiple entities in the collection by defining a map function, similar to Array.map

On the reducer

```javascript
export function userReducer(state, action) {
  switch (action.type) {
    case ADD_ALL:
      return adapter.addMany(action.payload.users, state);

    case ADD_ONE:
      return adapter.addOne(action.payload.user, state);

    case UPSERT_ONE:
      return adapter.upsertOne(action.payload.user, state);

    case UPSERT_ALL:
      return adapter.upsertUsers(action.payload.users, state);
    case UPDATE_ONE:
      return adapter.updateOne(action.payload.user, state);

    case UPDATE_ALL:
      return adapter.updateMany(action.payload.users, state);

    case MAP_ALL:
      return adapter.map(action.payload.entityMap, state);

    case DELETE_ONE:
      return adapter.removeOne(action.payload.id, state);

    case DELETE_ALL_BY_IDS:
      return adapter.removeMany(action.payload.ids, state);

    case DELETE_ALL_BY_PREDICAT:
      return adapter.removeMany(action.payload.predicate, state);

    case CLEAR_SELECTED_USER:
      return adapter.removeAll({ ...state, selectedUserId: null });

    default:
      return state;
  }
}
```

---

Paix et Guerisons - with <3 [Thony](https://github.com/thonymg)
