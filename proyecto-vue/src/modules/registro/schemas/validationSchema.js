import * as yup from 'yup';

export const schema = yup.object().shape({
    nombre: yup.string().required(),
    //aqui utlice expresiones regulares para validar en este caso
    //que tenga al menos un numero en la direccion 
    direccion: yup.string().matches(/\d/, 'La dirección debe contener al menos un número').required(),
    //aqui que solo tenga digitos :)
    telefono: yup.string().matches(/^\d+$/, 'solo numeros').required('El número de teléfono es obligatorio'),
    correo: yup.string().email().required()
});
/* Yup se puede usar junto con vee-validate para validar formularios en Vue.js. 
Esto se logra estableciendo un esquema de validación con Yup y pasando este esquema a vee-validate,
 que se encarga de aplicar las reglas en el formulario info de chatgpt :( */