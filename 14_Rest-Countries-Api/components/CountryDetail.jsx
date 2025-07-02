import { useEffect, useState } from 'react';
import countryList from '../countriesData'
import { Link, useOutletContext, useParams } from 'react-router-dom';
import './style2.css'

// if we fetch queryString through given 2 line then we cant able to re render when query string change on click of ancher tag of border country list
// const fullQueryString=new URLSearchParams(location.search);
// const countryName=fullQueryString.get('name');
// that's why we need this useParam hook and hook can't call from outside of function that way putted into function.


export default function CountryDetail(){
    const params=useParams();
const countryName=params.country;
const [isDark] = useOutletContext();
 
    const [country,setCountry]=useState(null);
    const [notFound,setNotFound]=useState(false);
        
    useEffect(()=>{
         fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
         .then((res)=>res.json()).then(([data])=>{
            setCountry({
                name:data.name.common,
                nativeName:Object.values(data.name.nativeName)[0].common,
                population:data.population,
                region:data.region,
                subregion:data.subregion,
                capital:data.capital,
                flag:data.flags.svg,
                tld:data.tld,
                languages:Object.values(data.languages).join(', '),
                currencies:Object.values(data.currencies).map((currency)=>currency.name).join(', '),
                borders:[]

            })
            if(!data.borders){
                data.borders=[]
            }

            Promise.all(data.borders.map((border)=>{
                return fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=>res.json()).then(([borderCountry])=>borderCountry.name.common)})).then((borders)=>{
                    setCountry((prevState)=>({...prevState,borders}))
                })
         }).catch((err)=>{
            // console.log(err);
            setNotFound(true);
         })
    },[countryName])

    if(notFound){
        return <div>Country Not Found</div>
    }
    
    return country===null ? ('loading...') : (
        <main className={isDark ?'dark':''}>
            <div className="country-details-container">
                <span className="back-button" onClick={()=>history.back()}>
                    <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
                </span>
            </div>
            <div className="country-details">
                <img src={country.flag} alt={`${country.name} flag`}/>
                <div className="details-text-container">
                    <h1>{country.name}</h1>
                    <div className="details-text">
                        <p><b>Native Name: </b><span className="native-name">{country.nativeName}</span></p>
                        <p><b>Population: </b><span className="population">{country.population}</span></p>
                        <p><b>Region: </b><span className="region">{country.region}</span></p>
                        <p><b>Sub Region: </b><span className="sub-region">{country.subregion}</span></p>
                        <p><b>Capital: </b><span className="capital">{country.capital}</span></p>
                        <p><b>Top Level Domain: </b><span className="top-level-domain">{country.tld}</span></p>
                        <p><b>Currencies: </b><span className="currencies">{country.currencies}</span></p>
                        <p><b>Languages: </b><span className="language">{country.languages}</span></p>
                    </div>
                    <div className="border-container">
                        <b>Border Countries: {country.borders.map((border)=><Link key={border} className="countryLink" to={`/${border}`}>{border}</Link>)
                        }</b>
                    </div>
                </div>
            </div>
        </main>
     
    )
}