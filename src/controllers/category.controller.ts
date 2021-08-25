import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import {Categories} from '../entity/Categories'

export const getCategories = async (req:Request,res:Response):Promise<Response>=>{
    const categories = await getRepository(Categories).find();
    return res.json(categories);
}

export const getCategory = async (req:Request,res:Response):Promise<Response>=>{
    const result = await getRepository(Categories).findOne(req.params.id);
    return res.json(result);
}

export const createCategory = async (req:Request,res:Response):Promise<Response>=>{
    const newCategory = await getRepository(Categories).create(req.body);
    const results = await getRepository(Categories).save(newCategory);
    return res.json(results);
}

export const updateCategory = async (req:Request,res:Response):Promise<Response>=>{
    const category = await getRepository(Categories).findOne(req.params.id)
    if (category){
        getRepository(Categories).merge(category,req.body);
        const result = await getRepository(Categories).save(category);
        return res.json(result);
    }
    return res.status(404).json({msg:'Category not found'});
}

export const deleteCategory = async (req:Request,res:Response):Promise<Response>=>{
    const result = await getRepository(Categories).delete(req.params.id);
    return res.json(result);
}