import { Router } from "express";
import * as participantController from "../controller/participantController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { schemas } from "../schemas/schemas.js";

const participantRouter = Router();

participantRouter.post("/participants", schemaValidator(schemas.participantSchema), participantController.createParticipant);

export default participantRouter;