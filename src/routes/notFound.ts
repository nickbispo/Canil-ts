import { Router, Request, Response } from "express";


const router = Router();

router.use((req: Request, res: Response) => {
  res.status(404).send("<a href='/'>Pagina nao encontrada. clique aqui para retornar.</a>")
})

export default router;