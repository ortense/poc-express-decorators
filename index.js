import app from './app'

const PORT = app.get('port')

app.listen(PORT, () =>
	console.log(`App running on port ${PORT}`))
