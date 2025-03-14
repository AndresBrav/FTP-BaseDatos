const {obtenerUsuarios,obtenerUnUsuario,existeUsuario,eliminarUnUsuario,aniadirUsuario} = require('../services/servicesusers');

const User = require("../models/modeluser");

const getUsers = async (req, res) => {

    /*const listaCarros = await Carro.findAll();*/
    const listaUsuarios = await obtenerUsuarios()

    res.send(listaUsuarios);
};

const getOneUser = async (req, res) => {
    // const data = req.body
    const { id } = req.params

    const user = await obtenerUnUsuario(req, res)

    const existe = await existeUsuario(id)
    console.log(`el usuario existe ? ${existe}`);
    try {
        if (existe) {
            res.json(user);
        }
        else{
            res.json(
                { msg: `el usuario con id:${id} no existe`}
            )
        }
    }
    catch (error) {
        res.send(error)
        //res.end();
    }

};


const delUser = async (req, res) => {

    await eliminarUnUsuario(req, res)

};

const addUser = async (req, res) => {

    await aniadirUsuario(req, res)

};


const updateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const carro = await User.findByPk(id);

    if (carro) {
        await carro.update(body);
        res.json({
            msg: "El usuario  fue actualizado con éxito"
        });
    } else {
        res.json({
            msg: "No existe un usuario con el ID ingresado"
        });
    }
};

module.exports = {getUsers,getOneUser,delUser,addUser,updateUser}