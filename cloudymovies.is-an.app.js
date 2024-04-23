// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Cloudy Movies is a free movie streaming platform, free, without ads. Choose from a wide range of films, including classics and new releases.', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'cloudymovies', // desired subdomain name
  owner: {
    repo: 'https://cloudy-movies-blush.vercel.app/?p=1',
    email: 'ehsanhussaini975@gmail.com',
  },
  record: {
    TXT: ['vc-domain-verify=cloudymovies.is-an.app,f758fcd2ff11d12ac3e0'],
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
