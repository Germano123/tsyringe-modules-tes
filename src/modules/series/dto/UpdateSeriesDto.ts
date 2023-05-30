import { AbstractDto } from '../../../common/AbstractDto';

export class UpdateSeriesDto extends AbstractDto {
    name: string;
    seasons: number;
}
