import { Router } from "express";
const router = Router()

import {createCategory, deleteCategory, getCategories, getCategory, updateCategory} from '../controllers/category.controller'

router.get('/categories',getCategories);
router.get('/categories/:id',getCategory);
router.post('/categories',createCategory);
router.put('/categories/:id',updateCategory);
router.delete('/categories/:id',deleteCategory);

export default router