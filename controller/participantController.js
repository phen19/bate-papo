import dayjs from 'dayjs';
import * as participantService from '../services/participantService.js';
import * as messageService from '../services/messageService.js'

async function createParticipant(req, res){
    const participant = req.body;
    const entry = { 
        from: participant.name, 
        to: 'Todos', 
        text: 'entra na sala...', 
        type:'status', 
        time: dayjs(participant.lastStatus).format("HH:mm:ss")}

    await messageService.createMessage(entry);
    await participantService.createParticipant(participant);

    res.status(201).send("Usuário Criado");
}

async function getAllParticipants(req, res){
    const participants = await participantService.getAllParticipants();
    res.send(participants)
}

export{
    createParticipant
}