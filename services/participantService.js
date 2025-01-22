import * as participantRepository from "../repositories/participantRepository.js";

async function createParticipant(participant){
    const existingName = await participantRepository.getParticipantByName(participant.name);
    if(existingName){
        throw {code: "Conflict", message: "Participant already exists", name: existingName};
    }

    await participantRepository.createParticipant(participant);
}

async function getAllParticipants() {
    return await participantRepository.getAllParticipants();
}

export{
    createParticipant,
    getAllParticipants
}