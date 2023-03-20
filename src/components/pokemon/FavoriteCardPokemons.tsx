import { Card, Grid } from '@nextui-org/react'
import { RouteKind } from 'next/dist/server/future/route-kind';
import { Router, useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
    pokemonId:number;
}

const FavoriteCardPokemon:FC<Props> = ({pokemonId}) => {

const router = useRouter()

const onFavoritesPress = () => {
  
  router.push( `/pokemon/${pokemonId}` );

}

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={ onFavoritesPress }>
          <Card.Image

            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}

          />

    </Grid>
  )
}

export default FavoriteCardPokemon;