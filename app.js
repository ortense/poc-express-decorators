import express           from 'express'
import {controller, get} from 'express-decorators'

const app = express()

app.set('port', 3000)

@controller('/api')
class ApiController {
	constructor() {}

	@get('/:target')
    async sayHelloAction(request, response) {
		let target = request.params.target || 'world'
        response.send(`hello ${target}!!`)
    }
}

let api = new ApiController()

api.register(app)

export default app
