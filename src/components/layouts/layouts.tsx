import React, { PropsWithChildren } from "react";

import Head from "next/head";
import { Navbar } from '../ui';

interface Props {
    title?:string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout = ({children, title}:PropsWithChildren<Props> ) => {

  

  return (
    <>
        <Head>
            <title>{title || 'Pokemon'}</title>
            <meta name="author" content="Ronald Paniagua" />
            <meta name="description" content = {`Información sobre Pokémon ${ title }`} />
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
            <meta property="og:title" content={`Información sobre el Pokémon ${ title }`} />
            <meta property="og:description" content={`Esta es la página del Pokémon ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
