import db from "../database/db.js";

async function getParticipantByName(name){
    return await db.collection('participants').findOne({name: name});
}

async function createParticipant(participant){
     return await db.collection('participants').insertOne(participant);
}

async function getAllParticipants(){
    return await db.collection("participants").find().toArray();
}

export {
    getParticipantByName,
    createParticipant,
    getAllParticipants
}
