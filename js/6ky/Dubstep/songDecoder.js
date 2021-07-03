const bit = 'WUB';

export const songDecoder = (song) => {
  return song.split(bit).filter(Boolean).join(' ');
};
