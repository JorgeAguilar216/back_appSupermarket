import { Entity,Column,PrimaryGeneratedColumn, ManyToOne, ObjectIdColumn, PrimaryColumn, ObjectID } from "typeorm";
import {Categories} from './Categories';

@Entity()
export class Products{
    @ObjectIdColumn()
    idProduct: ObjectID;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @Column()
    category: string;
}