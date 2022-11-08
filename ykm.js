// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.

var body = $response.body
var obj = JSON.parse(body)
obj.data.encode =
  'l0GlDRTtPJTRwNyO1DKDxf9PHywlvG+U2AAOaUFd4HR7qNvFSiazQgzhq5O830XwF0rLCbcf0ovKsc3xrOp0Cf1KQHfXjfVEQQ/McbSTLt0IxxCAx1ieYDcElCNgFA/DkYz8mjsJ2MMwdTFASXSPa2JwaBRLtPH410mzbs3JkX43vF7UtmvBlXfjd8xhqF6gFbP+PAi0rdJCmI1S1MWp+rdaA07UDQ1B9AHTh28GheBMwd7+iHBSnNsuQd6Ts0XljvZDGUx2DSy+aoyI+IBu78PUODlAyTYg57ui+RzLuVt6XQmtXlbqCKvNoFZ/Z1QBOu1nBOhLt0ExKzQ21MmQqbs0PU5MYb468zijOzpgZciKMizy5TeVeQdcXwqWSG0Nf0hRoEdZCR9XcCUwN9Nfu3h7m2tBOqo4cVzFRRipm0Vp+UJBrOZfPrz0rzM3BG3rxbdZ0V9iywgd0OqBjTXy3sQcF/4mycjIEElLqOO0HDQ=111'
body = JSON.stringify(obj)

console.log(body)

$done(body)
