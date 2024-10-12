import { Router } from "express";
import User from "../models/User.js"
import {alluser, userByRole} from "../controllers/users/read.js";


const router = Router()

router.get('/all', alluser)

router.get('/role/:rol', userByRole)

export default router