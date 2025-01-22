export function schemaValidator(schema){
    return (req, res, next) => {
        const {error} = schema.validate(req.body, { abortEarly: false});
        if(error){
            const errorMessage = error.details.map((detail)=> detail.message);
            throw { code: "UnprocessableEntry", message: errorMessage}
        };
        next();
    };
};