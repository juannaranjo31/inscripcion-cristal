import data from '../application/departamentos.json';

export const getMunicipios = () => {
    const {atlantico} = data;
    const {ciudades} = atlantico;
    
    return ciudades;
}
