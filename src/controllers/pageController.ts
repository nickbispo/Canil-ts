import {Request, Response} from "express";


export const home = (req: Request, res: Response) => {
  res.render('index');
}

export const dogs = (req: Request, res: Response) => {
  res.render('index');
}

export const cats = (req: Request, res: Response) => {
  res.render('index');
}

export const fishes = (req: Request, res: Response) => {
  res.render('index');
}