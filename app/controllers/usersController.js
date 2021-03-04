const { request } = require('express');
const dataBase = require('../models/modelUser');

const users = dataBase.users;

const find = (request, response) => {
    const id = request.params.id;

    users.findById(id)
        .then(data => {
            if(!data) return response.send({ message: `Pas trouver pour ${id}`})
            response.send(data);
        }).catch (error => response.send( `Une erreur est survenu ${error}`))
};

const findAll = (request, response) => {
    users.find()
        .then(data => {
            if(!data) return response.send({ message: `Pas de users`})
            response.send(data);
        }).catch (error => response.send( `Une erreur est survenu ${error}`))
};

const create = (request, response) => {
    // if(!request.body) response.send({ message: "Les champs sont obligatoires"});
    const {firstName, lastName, userName, mail, role, civilite, photo, dateNaissance, location} = request.body;
    const newUsers = new users(
        {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            mail: mail,
            role: role,
            civilite: civilite,
            photo: photo,
            dateNaissance: dateNaissance,
            location: {
                lattitude: location.lattitude,
                longitude: location.longitude
            }
        }
    );
    newUsers.save()
        .then(data => response.send(data))
        .catch(err => response.send(err))
};

const update = (request, response) => {
    // if(!request.body) return response.send({ message: "Les champs sont obligatoires pour mettre a jour"});
    const id = request.params.id;
    console.log(request.body)
    users.findByIdAndUpdate(id, request.body, { new: true })
        .then(data => {
            if(!data) return response.send({ message: `MAJ impossible, verifier l'id: ${id}` })
            response.send({ message: `MAJ reussite` })
        }).catch(err => response.send(err))
};

const deletes = (request, response) => {
    const id = request.params.id;

    users.findByIdAndRemove(id)
        .then(data => {
            if(!data) return response.send({ message: `impossible de supprimer, verifier l'id: ${id}` })
            response.send({ message: `Suppression reussite` })
        }).catch(err => response.send(err))
    
};

module.exports = {
    find,
    findAll,
    create,
    update,
    deletes
};

// module.exports = findAll;
// module.exports = create;
// module.exports = update;
// module.exports = deletes;
