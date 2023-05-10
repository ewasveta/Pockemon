

async function getPocks()
{
    try 
    {
        const res = await fetch('https://raw.githubusercontent.com/alon121/Pokemon-Simple-Json/master/pokemon.json')
        const data = await res.json()
        return data.pokemons;
        //console.log(data.pokemons)
    } 
    catch (error) 
    {
        console.log("Error resource fetching ",error)
    }
}
//getPocks()

async function fillCaro() 
{
    const pocks = await getPocks()

    const btns = document.querySelector("#btnInd") 
    const pics = document.querySelector("#caroIn")  
   
    pocks.forEach((p) => 
    {
        const beast = new Pockemon(p.pkdx_id, p.name, p.description, p.art_url, p.types)

        btns.innerHTML += beast.createBtns();
        pics.innerHTML += beast.createPics();
    }); 
    
}
  
fillCaro() 