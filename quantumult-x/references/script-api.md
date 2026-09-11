# Quantumult X 脚本 API 与模板

## Response Body 模板

```javascript
var body = $response.body;
try {
  var obj = JSON.parse(body);
  body = JSON.stringify(obj);
} catch (e) {}
$done({ body: body });
```

## Request Header 模板

```javascript
var headers = $request.headers;
headers['Authorization'] = 'Bearer xxx';
$done({ headers: headers });
```

## 定时任务

```javascript
$task.fetch({ url: 'https://api.example.com/checkin', method: 'POST' }).then(function (res) {
  $notify('签到', '', 'status ' + res.statusCode);
  $done();
}, function (err) {
  $done();
});
```

## 持久化

```javascript
$prefs.setValueForKey('value', 'key_name');
var v = $prefs.valueForKey('key_name');
```
