import { container } from 'tsyringe';
import { IRepository } from '../../interfaces/IRepository';
import { CreateSeriesDto } from './dto/CreateSeriesDto';
import { SeriesDto } from './dto/SeriesDto';
import { UpdateSeriesDto } from './dto/UpdateSeriesDto';
import { SeriesEntity } from './series.entity';

export class SeriesRepository implements IRepository<CreateSeriesDto, UpdateSeriesDto, SeriesEntity> {
    async create(c: CreateSeriesDto): Promise<SeriesEntity> {
        return new SeriesEntity("", 0);
    }
    
    async get(id: string): Promise<SeriesEntity> {
        return new SeriesEntity("", 0);
    }

    async getAll(): Promise<SeriesEntity[]> {
        return [new SeriesEntity("", 0)];
    }
    
    async update(id: string, u: Partial<SeriesDto>): Promise<SeriesEntity> {
        return new SeriesEntity("", 0);
    }
    
    async delete(id: string): Promise<SeriesEntity> {
        return new SeriesEntity("", 0);
    }
}

container.registerSingleton<SeriesRepository>('SeriesRepository', SeriesRepository);
