import { useEffect, useState } from "react";
import { PokemonCard, usePokemon, LoadingPokemonCard, ErrorPokemonCard } from "shared-components-challenge";

export default function PokemonRemoteApp() {
  const [pokemonId, setPokemonId] = useState<number | null>(null);
  const { data, loading, error } = usePokemon(pokemonId ?? 3);

  useEffect(() => {
    const handlePokemonChange = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      setPokemonId(customEvent.detail + 3);
    };

    document.addEventListener('pokemonChange', handlePokemonChange);

    return () => {
      document.removeEventListener('pokemonChange', handlePokemonChange);
    };
  }, []);


  if (loading) {
    return (<LoadingPokemonCard />)
  }

  if (error) {
    return (<ErrorPokemonCard />)
  }

  return (
    <div>
      {data && <PokemonCard pokemon={data} />}
    </div>
  )
}

