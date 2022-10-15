var body = $response.body
var url = $request.url

如果（身体）{
var obj = JSON.parse($response.body)
obj.data = []
$done({ body: JSON.stringify(obj) })
} else {
$done（{}）
}
