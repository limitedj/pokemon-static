import { NoFavorites } from '@/components/ui'
import { Layout } from '../../components/layouts'
import { localFavorites } from '@/utils';
import { useEffect, useState } from 'react';
import FavoritePokemons from '../../components/pokemon/FavoritePokemons';

const Favorites = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    
    setFavoritePokemons( localFavorites.pokemons() )
  }, [])
  

  return (
    <Layout title='Pokémon - Favoritos'>
        
      {
        favoritePokemons.length === 0
        ?(<NoFavorites  />)
        :(<FavoritePokemons pokemons= {favoritePokemons}/>)
      }

    </Layout>
  )
}

export default Favorites