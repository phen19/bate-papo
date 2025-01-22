import * as messageRepository from "../repositories/messageRepository.js";

async function createMessage(message){
    return await messageRepository.createMessage(message);
}

export{
    createMessage
}