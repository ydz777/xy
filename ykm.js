// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.

var body = $response.body

let val = $prefs.valueForKey('ykmVal')

if (val) {
  console.log('val', val)
  $done(val)
} else {
  $prefs.setValueForKey(body, 'ykmVal')
  console.log('body', body)
  $done(body)
}
