export const fetchPokemons = async(limit:number) => {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );

      if (!res.ok) {
        throw new Error("API error");
      }

      const data = await res.json();   
      return data.results;
}
