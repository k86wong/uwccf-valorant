import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

function Stream() {
  return <TwitchEmbed channel="hoklaamc" id="hoklaamc" theme="dark" muted />;
}

export default Stream;
