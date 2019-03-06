const samples = {
  g:
    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Another%20Real%20Life%20Kit/248[kb]real-life-CRASH1.WAV.mp3",
  s:
    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Another%20Real%20Life%20Kit/49[kb]real-life-KICK1.WAV.mp3",
  l:
    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Another%20Real%20Life%20Kit/206[kb]real-life-RIDE.WAV.mp3",
  d:
    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Another%20Real%20Life%20Kit/32[kb]real-life-SN1.WAV.mp3",
  a:
    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/63[kb]real-01L1.UF-HiHat-M.wav.mp3",
  f:
    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/85[kb]real-02R3.UF-HiHat-M.wav.mp3",
  h:
    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Another%20Real%20Life%20Kit/92[kb]real-life-TOM1M.WAV.mp3",
  j:
    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Another%20Real%20Life%20Kit/100[kb]real-life-TOM1L.WAV.mp3",
  k:
    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Another%20Real%20Life%20Kit/99[kb]real-life-TOM1F.WAV.mp3"
};

Object.keys(samples).forEach(key => {
  samples[key] = new Audio(samples[key]);
});

export default samples;
