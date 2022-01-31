async function tempo(req, res) {
  const dynamicDate = new Date();
  const endpoint = process.env.ENDPOINT;
  //const gifResponse = await fetch(
  //  'https://api.satou-chan.xyz/api/endpoint/happy'
  //);
  //const gifResponseJson = await gifResponse.json();
  //const url = gifResponseJson.url;

  res.json({
    date: dynamicDate.toGMTString(),
    endpoint: endpoint,
    //gif: url,
  });
}

export default tempo;
