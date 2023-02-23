// /api/new-meetup
// POST /api/new-meetup

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // the expected fields coming from the incoming request body
    const { title, image, address, description } = data;
  }
}

export default handler;
