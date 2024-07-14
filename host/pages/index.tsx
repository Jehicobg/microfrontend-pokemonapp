import MainTemplate from "@/components/templates/MainTemplate";
import Head from "next/head";

export default function Host() {

  const handleButtonClick = () => {
    const randomPokemonId = Math.floor(Math.random() * 150) + 1;
    const event = new CustomEvent<number>('pokemonChange', {
      detail: randomPokemonId,
    });
    document.dispatchEvent(event);
  };

  return (
    <>
      <Head>
        <title>Host - Microfontend</title>
        <MainTemplate handleButtonClick={handleButtonClick} />
      </Head>
    </>

  )
}
