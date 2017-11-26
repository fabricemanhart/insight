interface LazySearch<T> {
  searchById<T>(id: number);
  searchByName<T>(term: string);
}
