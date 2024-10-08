import {Router} from 'express';
import healthCheck from "../controllers/healthcheck.controller.js";

const healthCheckRouter = Router();

healthCheckRouter.route("/healthcheck").get(healthCheck)

export default healthCheckRouter;