import axios from "axios";

export interface RegistersDates {
    encabezadoArchivo: string
    encabezadoLote: string
    registroDetalle: string
    fecha: string
    id?: number
}

const registerRecaudo = axios.create({
    baseURL: 'http://192.168.1.16:8004/registers/api/v1/registers/',
    headers: {
        'Authorization': 'Token 1d5bb5540c99951a4256426228ac9b70e01ca827'
      },

})

export const createRegister = (dates: RegistersDates) => registerRecaudo.post('/', dates)

export const getAllRegister = () => registerRecaudo.get('/')

export const deleteRegister = (id: number) => registerRecaudo.delete(`/${id}`)