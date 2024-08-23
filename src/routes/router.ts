import { Router } from "express";
import { searchController } from "../controller/SearchController";
import { authController } from "../controller/AuthController";

const router: Router = Router();

router.get("/", searchController.search);

router.get("/auth", authController.auth);

export { router };
