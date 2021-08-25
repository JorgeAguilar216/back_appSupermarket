import { Entity,Column, OneToMany, ObjectIdColumn, ObjectID, PrimaryColumn } from "typeorm";
import { Products } from "./Products";

@Entity()
export class Categories{
    @ObjectIdColumn()
    idCategory: ObjectID;

    @Column()
    name: string;
    
}