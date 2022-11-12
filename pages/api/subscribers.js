export default async function handler(req, res) {
    await fetch(process.env.apiUrl + '/subscribers', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "subscriberEmail": req.body.subscriberEmail,
        "subscriberZipcode": req.body.subscriberZipcode
    }),
  })
      .then((response) => {
          res.status(response.status).json(response.json());
      })
      .catch((error) => {
        console.error(error);
          throw error;
      });
  }
  