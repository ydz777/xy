var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data.left_ticket = 11111
  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}


// {
//   "msg" : "",
//   "data" : {
//     "left_ticket" : 1,
//     "total_get_ticket" : "1",
//     "summary" : [
//       "书票是您在野果搜索的通行证。",
//       "书票的获得:可以通过阅读更多章节，升级自身等级，完成每日任务获得。",
//       "书票的用处:可以打赏给某本好书，激励作者。也可以花费书票成为VIP，享受更多超值服务。"
//     ],
//     "total_use_ticket" : 0
//   },
//   "code" : 200
// }
// https://mlol\.qt\.qq\.com/go/mine/card/get_list url response-body "sumMatchNum": "(.*)", response-body "sumMatchNum": "99999",