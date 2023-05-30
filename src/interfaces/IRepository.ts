export interface IRepository<C, U, T> {
    create(c: C): Promise<T>;
    get(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    update(id: string, u: U): Promise<T>;
    delete(id: string): Promise<T>;
}
