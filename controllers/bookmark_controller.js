async function create(req, res) {
    const { title, url } = req.body;
    req.user.bookmarks.push({ title, url });
    await req.user.save();
    res.json(req.user.bookmarks);
}

function index(req, res) {
   return res.json(req.user.bookmarks); 
}

module.exports = {
    create,
    index
}