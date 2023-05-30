import { container, injectable } from "tsyringe";
import { inject } from "tsyringe/dist/typings/decorators";
import { SeriesRepository } from "./series.repository";

@injectable()
export class SeriesService {
    constructor(
        @inject('SeriesRepository') private repo: SeriesRepository
    ) {}
    
    // Create
    async create(): Promise<any> {
        return 'This should create a new series';
    }

    // Read
    async get(id: string): Promise<any> {
        return `This should return #${id} series`;
    }

    // ReadAll
    async getAll(): Promise<any> {
        return 'This should get all series';
    }

    // Update
    async update(id: string): Promise<any> {
        return `This should return #${id} series`;
    }
    
    // Delete
    async delete(id: string): Promise<any> {
        return `This should return #${id} series`;
    }
}

container.registerSingleton<SeriesService>('SeriesService', SeriesService);
