import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import {Products} from '../entity/Products'

export const getProducts = async (req:Request,res:Response):Promise<Response>=>{
    const products = await getRepository(Products).find();
    return res.json(products);
}

export const getProduct = async (req:Request,res:Response):Promise<Response>=>{
    const result = await getRepository(Products).findOne(req.params.id);
    return res.json(result);
}

export const createProduct = async (req:Request,res:Response):Promise<Response>=>{
    console.log("createproduct prueba");
    const newProduct = await getRepository(Products).create(req.body);
    const results = await getRepository(Products).save(newProduct);
    return res.json(results);
}

export const updateProduct = async (req:Request,res:Response):Promise<Response>=>{
    const product = await getRepository(Products).findOne(req.params.id)
    console.log(req.body,product,"updateproduct");
    if (product){
        getRepository(Products).merge(product,req.body);
        const result = await getRepository(Products).save(product);
        return res.json(result);
    }
    return res.status(404).json({msg:'Category not found'});
}

export const deleteProduct = async (req:Request,res:Response):Promise<Response>=>{
    const result = await getRepository(Products).delete(req.params.id);
    return res.json(result);
}