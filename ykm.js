var body = $response.body
var url = $request.url

if (body) {
  console.log(body)
} else {
  $done({})
}
