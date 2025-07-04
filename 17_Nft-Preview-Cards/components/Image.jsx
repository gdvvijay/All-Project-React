export default function Image({iName,cName,url}){
    
    return(
        <img src={url} alt={iName} className={`${cName} ${cName&&cName.includes('w-') ? '':'w-full'} ${cName&&cName.includes('p-') ? '':'p-5'} rounded-[30px]`}/>
    )
}