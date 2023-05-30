export class AbstractEntity {
    // @Column()
    id: string;
    // @Column()
    createdAt: Date;
    // @Column()
    updatedAt: Date;

    constructor() {
        this.id = "";
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
