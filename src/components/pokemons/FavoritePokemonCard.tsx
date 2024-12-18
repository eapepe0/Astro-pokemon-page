import type {FavoritePokemon} from '@interfaces/favorite-pokemon';
import { createSignal, Show, type Component } from 'solid-js';



interface Props {
    pokemon : FavoritePokemon,
}

export const FavoritePokemonCard : Component<Props> = ({pokemon}) => {

    const [isVisible , setIsVisible] = createSignal(true);

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

    const deleteFav = () => {
        const favoritos = JSON.parse(localStorage.getItem('favorites') ?? "[]") as FavoritePokemon[]

        const newFavoritos = favoritos.filter((p)=> p.id !== pokemon.id);

        localStorage.setItem('favorites',JSON.stringify(newFavoritos));
        setIsVisible(false)
    }

    return (
        <Show when={isVisible()}>
        <div class="flex flex-col justify-center items-center">
            <a href={`/pokemons/${pokemon.name}`}>
            <img src={imageSrc} alt={pokemon.name}  width={96} height={96}/>
            <p class="capitalize">#{pokemon.id}  <strong>{pokemon.name}</strong></p>
            </a>
            <button  onClick={deleteFav} class='text-red-500'> Borrar </button>
        </div>
        </Show>
    );
}