import React from 'react'
import { getMunicipios } from '../helpers/getMunicipios'

export const CityOptions = () => {
    const municipios = getMunicipios();

    return (
        <>
            {
                municipios.map((c) => {
                    return <option value={c} key={c}>{c}</option>
                })
            }
        </>
  )
}
