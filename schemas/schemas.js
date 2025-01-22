import joi from "joi";

export const schemas = {
    participantSchema: joi.object().keys({
        name: joi.string().required(),
    })
}