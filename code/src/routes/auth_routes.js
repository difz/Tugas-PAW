import express from "express"
import { signin, signout, signup } from "../controller/auth.contorller.js"
import  { verifyToken } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/create", signup)
router.post("/signin", signin)
router.get("/signout", verifyToken, signout)

export default router