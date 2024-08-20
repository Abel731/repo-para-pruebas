import * as yup from 'yup';

export const schema = yup.object({
    nombre: yup.string().required(),
    correo: yup.string.email().required()
});
/* Yup se puede usar junto con vee-validate para validar formularios en Vue.js. 
Esto se logra estableciendo un esquema de validación con Yup y pasando este esquema a vee-validate,
 que se encarga de aplicar las reglas en el formulario info de chatgpt :( */