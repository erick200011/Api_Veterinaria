//Importar el modelos
import jwt from 'jsonwebtoken'
import Veterinario from '../models/Veterinario.js'

//Definir el modelo para  para validar jwt
const verificarAutenticacion = async (req,res,next)=>{

 //Validacion de JWT
//req.bdy
//req.params
//req.headers.auhotrization
if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"})    

   //Obtener el JWT
    const {authorization} = req.headers
    try {
        //Obtener solo el token y verificar el mismo
        const {id} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
        //Obtneer el usuario en base BD
        req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
        //next
        next()
    } catch (error) {
        //Mandar sms de error
        const e = new Error("Formato del token no válido")
        return res.status(404).json({msg:e.message})
    }
}
//exportar la funcion
export default verificarAutenticacion