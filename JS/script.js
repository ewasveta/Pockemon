async function getPocks()
{
    try 
    {
        const res = await fetch('https://raw.githubusercontent.com/alon121/Pokemon-Simple-Json/master/pokemon.json')
        const data = await res.json()
        return data.pokemons;
        //console.log(data.pokemons)//.result.records)
    } 
    catch (error) 
    {
        console.log("Error resource fetching ",error)
    }
}
//getPocks()

async function setup() 
{
    const pocks = await getPocks()

    const tbody = document.querySelector("#preview")   
   
    pocks.forEach((p) => 
    {
        const beast = new Pockemon(p.pkdx_id, p.name, p.description, p.art_url)

        tbody.innerHTML += beast.createRow();
    }); 
    
}
  
setup() 