import SearchFilter from "./SearchFilter";
import CountriesData from '../countriesData'
import { useState } from "react";
import { useOutletContext } from "react-router-dom";


export default function AllCountries(){
    
    const [isDark]=useOutletContext();
    
    const [filterInput,setFilterInput]=useState('');
    
    return(
        <main className={isDark ? 'dark' : ''}>
            <SearchFilter setFilterInput={setFilterInput}/>
            <div className="countries-container">
                {
                    CountriesData.filter((country)=>{
                        return(
                            country.name.common.toLowerCase().includes(filterInput.toLowerCase())
                        )
                    }).map((country,index)=>{
                        return(
                            <a key={index} className="country-card" href={`/${country.name.common}`}>
                                <img src={country.flags.svg} alt={`${country.name.common} flag`}/>
                                <div className="card-text">
                                    <h3 className="card-title">{country.name.common}</h3>
                                    <p><b>Population: </b>{country.region}</p>
                                    <p><b>Capital: </b>{country.capital?country.capital[0]:''}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </main>
    )
}