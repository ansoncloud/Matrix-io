// @name = TestFlightD
// @desc = TestFlightD[TF下载修正脚本]
// @author = NobyDa

let app = JSON.parse($request.body);
app.storefrontId = '143441-19,29';
$done({body:JSON.stringify(app)});