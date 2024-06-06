import { Router } from "express";
import {ProductoController} from "../controller/ProductosController";

const routes=Router();

routes.get("",ProductoController.getAll)
routes.post("", ProductoController.create)

export default routes