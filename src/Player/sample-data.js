export const mp3Urls = [
  'https://rss.art19.com/episodes/9bead20d-767f-48b3-aaab-a1b5a21cf8fd.mp3',
  'https://play.podtrac.com/npr-510308/npr.mc.tritondigital.com/NPR_510308/media/anon.npr-podcasts/podcast/npr/hiddenbrain/2018/01/20180101_hiddenbrain_buying-2dc10992-f4f2-4fbd-8ced-f2684a6b41a3.mp3',
  'http://media.blubrry.com/exponent/p/content.blubrry.com/exponent/exponent137.mp3',
];

export const getEpisodeUrl = episodes => {
  const randomEpUrl = Math.floor(Math.random(episodes.length));
  return mp3Urls[randomEpUrl];
};
