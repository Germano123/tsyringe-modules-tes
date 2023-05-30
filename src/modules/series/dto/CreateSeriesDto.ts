import { AbstractDto } from '../../../common/AbstractDto';

export class CreateSeriesDto extends AbstractDto {
    name: string;
    seasons: number;
}
