import { Router } from "express";
import testRoutes from "./testRoutes";
import notFound from "./notFound";
import mainRoutes from "./main";

const router = Router();

router.use(testRoutes);
router.use(mainRoutes);
//route notFounded
router.use(notFound);

export default router;