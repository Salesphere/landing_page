'use client';

import React, { useState, useEffect } from 'react';
import { TokenImage } from './TokenImage';

// Define a type for the token data
type TokenData = {
  src: string;
  position: { x: string | number; y: number };
  size: number;
  duration: number;
};

const tokensData: TokenData[] = [
  {
    src: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    position: { x: '10%', y: 100 },
    size: 48,
    duration: 15
  },
  {
    src: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
    position: { x: '85%', y: 150 },
    size: 56,
    duration: 18
  },
  {
    src: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    position: { x: '25%', y: 200 },
    size: 40,
    duration: 20
  },
  {
    src: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png",
    position: { x: '75%', y: 250 },
    size: 52,
    duration: 17
  },
  {
    src: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png",
    position: { x: '60%', y: 120 },
    size: 44,
    duration: 19
  }
];

export function FloatingTokens() {
  const [tokens, setTokens] = useState<TokenData[]>(tokensData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updatedTokens = tokensData.map(token => ({
        ...token,
        position: {
          x: typeof token.position.x === 'string'
            ? parseFloat(token.position.x) / 100 * window.innerWidth
            : token.position.x,
          y: token.position.y
        }
      }));
      setTokens(updatedTokens);
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${isLoaded ? 'visible' : 'invisible'}`}>
      {tokens.map((token, index) => (
        <TokenImage
          key={index}
          src={token.src}
          size={token.size}
          initialPosition={{
            x: typeof token.position.x === 'string'
              ? parseFloat(token.position.x) / 100 * (typeof window !== 'undefined' ? window.innerWidth : 0)
              : token.position.x,
            y: token.position.y
          }}
          animationDuration={token.duration}
        />
      ))}
    </div>
  );
}