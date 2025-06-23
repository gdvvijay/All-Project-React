export default function ImageSection({url,name}){
    return (
        <section className='img'>
            <img src={url} alt={name}/>
        </section>
    )
}