const psi = require('psi');
const  page = 'https://best.ngrok.dev/bebe/bebe-fille/combinaison-bloomer-et-salopette/Ensemble-bebe-fille-ceremonie/p/2037233_701';
(async () => {
  // Get the PageSpeed Insights report
  const { data } = await psi(page);
  console.log('Speed score:', data.lighthouseResult.categories.performance.score);

  // Output a formatted report to the terminal
  await psi.output(page);
  console.log('Done');

  // Supply options to PSI and get back speed
  const data2 = await psi(page, {
    nokey: 'true',
    strategy: 'mobile'
  });
  console.log('Speed score:', data2.data.lighthouseResult.categories.performance.score);
})();
