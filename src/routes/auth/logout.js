export function post(req, res) {
	delete req.session.user;
	delete req.session.token;
	res.end(JSON.stringify({ ok: true }));
}