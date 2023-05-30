import { AbstractEntity } from "../../common/abstract.entity";

// @Entity({ name: "Series "})
export class SeriesEntity extends AbstractEntity {
    // @Column()
    name: string;
    // @Column()
    seasons: number;

    constructor(name: string, seasons: number) {
        super();
        this.name = name;
        this.seasons = seasons;
    }
}
