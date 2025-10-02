import axios from "axios";
const tokenRecaudos = import.meta.env.PUBLIC_COOVITEL_TOKEN;

export interface RegistersDates {
    encabezadoArchivo: string
    encabezadoLote: string
    registroDetalle: string
    fecha: string
    id?: number
}

const registerRecaudo = axios.create({
    baseURL: 'https://192.168.1.16:8004/registers/api/v1/registers/',
    headers: {
        'Authorization': `Token ${tokenRecaudos}`,
      },

})

export const createRegister = (dates: RegistersDates) => registerRecaudo.post('/', dates)

export const getAllRegister = () => registerRecaudo.get('/')

export const deleteRegister = (id: number) => registerRecaudo.delete(`/${id}`)