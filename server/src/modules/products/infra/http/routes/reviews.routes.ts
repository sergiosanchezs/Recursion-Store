import { Router } from "express";

import ReviewsController from "../controllers/ReviewsController";

import ensureAuthenticated from "@modules/users/infra/http/middleware/ensureAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

import interactionRouter from "./interaction.routes";

const reviewsController = new ReviewsController();
const reviewsRouter = Router();

reviewsRouter.use('/interaction', interactionRouter);

reviewsRouter.post("/", ensureAuthenticated, reviewsController.create);

reviewsRouter.put("/:id", ensureAuthenticated, checkIsValidMongoId, reviewsController.update);

reviewsRouter.delete("/:id", ensureAuthenticated, checkIsValidMongoId, reviewsController.delete);

export default reviewsRouter;