import type { FavoritePokemon } from "@interfaces/favorite-pokemon"
import { createSignal, For } from "solid-js"
import { FavoritePokemonCard } from "./FavoritePokemonCard"

const getLocalStoregePokemons = () : FavoritePokemon[] => {
    // Buscamos en el LS el item favorites y lo guardamos en favoritePokemons o un Array vacio
    const favoritePokemons = JSON.parse(
        localStorage.getItem('favorites') ?? '[]'
    )

    return favoritePokemons
}



export const FavoritePokemons = () => {

    const [pokemons , setPokemons] = createSignal(getLocalStoregePokemons());


    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            <For each={pokemons()}>
                {(pokemon) => <FavoritePokemonCard pokemon={pokemon}/>}
            </For>
        </div>
    )
}
