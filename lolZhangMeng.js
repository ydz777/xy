var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data.lolCard.tag1Content = 699111
  obj.data.lolCard.sumMatchNum = 699111
  obj.data.lolCard.level = 987654
  obj.data.lolCard.fullRankTitle = '最强王者'
  obj.data.lolCard.rankUrl = 'https://ossweb-img.qq.com/images/lol/space/rank/2019pre/season_2019_challenger.png'

  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
