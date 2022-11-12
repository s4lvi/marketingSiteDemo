// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  await fetch(process.env.apiUrl + '/zipcodes/validate', {

    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"zipcode": req.body.zipcode}),
})
    .then((response) => {
        res.status(response.status).json(response.json());
    })
    .catch((error) => {
      console.error(error);
        throw error;
    });
}
