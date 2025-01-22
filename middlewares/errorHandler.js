export default function errorHandler(err, req, res, next){
    if(err.code === "Conflict"){
        return res.status(409).send(err.message);
    }
    if(err.code === "UnprocessableEntry"){
        return res.status(422).send(err.message);
    }
}