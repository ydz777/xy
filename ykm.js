// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.

var body = $response.body
var obj = JSON.parse(body)
obj.data.encode = ''
body = JSON.stringify(obj)

console.log(body)

$done(body)
