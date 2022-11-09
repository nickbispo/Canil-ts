import { Router } from "express";
import * as pageController from "../controllers/pageController";
import * as searchController from "../controllers/searchController";

const router = Router();
// pageControllers
router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/cats', pageController.cats);
router.get('/fishes', pageController.fishes);
//searchControllers
router.get('/search', searchController.search);
export default router;