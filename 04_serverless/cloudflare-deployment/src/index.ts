/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		return new Response('Hello World!');
// 	},
// } satisfies ExportedHandler<Env>;

// export default{
// 	async fetch(req: Request, env: Env, ctx: ExecutionContext){
// 		if(req.method === "GET"){
// 			return Response.json({
// 				msg : "GET request successful"
// 			})
// 		}
// 		else{
// 			return Response.json({
// 				msg : "GET request failed"
// 			})
// 		}
// 	}
// }

export default {
	async fetch(req: Request): Promise<Response> {
		const url = new URL(req.url);

		if (req.method === 'GET' && url.pathname === '/') {
			return Response.json({
				msg: 'GET request sent successfully',
			});
		} 

		else if (req.method === 'POST' && url.pathname === '/') {
			const body = await req.json();
			return Response.json({
				msg: 'POST request sent successfully',
				data: body,
			});
		} 

		else if (req.method === 'PUT' && url.pathname == '/') {
			const body = await req.json()
			return Response.json({
				msg: 'PUT request sent successfully',
				data: body
			});
		}

		else{
			return Response.json({
				msg : "Not found",
				status : 404
			})
		}
	},
};
