var express = require('express');
var router = express.Router();
 
 
// 사용자 목록을 가지고 있는 객체
var users = [
  {
    username: 'gildong',
    name: '홍길동',
    bio: '허균소설'
  },
  {
    username: 'soonshin',
    name: '이순신',
    bio: '조선시대의 임진왜란 때 일본군을 물리치는데 큰 공을 세운 명장'
  },
  {
    username: 'sejong',
    name: '세종대왕',
    bio: '한글을 창제한 조선조 제4대 임'
  }
];
 
///* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});
 
 
/* GET users listing */
// Ver 1- Region start
// 사용자 목록 요청(GET)
//router.get('/', function(req,res,next){
//  res.render('users/index', {title:'사용자 관리', users:users});
//});
//
//// 사용자 등록 요청(POST)
//router.post('/', function(req,res){
//
//});
// Region end
 
 
 
 
/* GET users listing */
// Ver 2- Region start
// 사용자 목록 요청(GET)
router.route('/')
    .get(function(req,res,next){
      res.render('users/index', {title:'사용자 관리', users:users});
    })
    .post(function(req,res){
      users[users.length] = req.body; // 배열에 추가
      res.redirect('/users'); // 회원 목록 페이지로 이동
    });
 
 
// 사용자 등록 폼 요청(GET)
router.route('/new')
    .get(function(req, res){
      // users/new.jade파일을 렌더링
      res.render('users/new', {title:'사용자 등록'});
    })
    .post(function(req,res){
 
    });
// Region end
 
// 사용자 리스트 출력
router.get('/list', function(req,res){
  res.send('{list:'+JSON.stringify(users)+'}');
});
 
// 사용자 리스트를 XML파일로 생성하여 렌더링
router.get('/xmllist', function(req,res){
  var result = '<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><list>';
  for(index in users){
    result += '<item>';
    result += '<username>'+users[index].username+'</username>';
    result += '<name>'+users[index].name+'</name>';
    result += '<bio>'+users[index].bio+'</bio>';
    result += '</item>';
  }
  result += '</list></rss>';
  res.send(result);
})
 
 
 
 
// 사용자 정보 요청(GET)
router.get('/:username', function(req,res){
  var user = users[req.params.username];
  if(user){
    res.render('users/profile', {title:'사용자 프로필', user:user, index:req.params.username});
  }
});
 
// 사용자 정보 편집 폼 요청(GET)
router.post('/:username/edit', function(req,res,next){
  var user=users[req.params.username];
  if(user){
    console.log('Edit Log => '+req.param('username')+' | '+req.param('name')+' | '+req.param('bio'));
    console.log('Edit Log => '+req.body);
 
    delete users[req.params.username];
    // Version 1
    //users[users.length] = req.body; // 배열에 매개변수를 통째로 추가
 
    // Version 2
    var newUser = {
      username: req.param('username'),
          name: req.param('name'),
        bio: req.param('bio')
    };
    users[users.length] = newUser;
    // Version 3
    //users[req.params.username].username = req.param('username');
    //users[req.params.username].name= req.param('name');
    //users[req.params.username].bio = req.param('bio');
    res.redirect('/users');
  }else{
    next(new Error(req.params.username+' delete error!'));
  }
});
 
// 사용자 정보 변경 요청(PUT)
router.put('/:username', function(req,res){
 
});
 
// 사용자 정보 삭제 요청(DELETE)
router.delete('/:username', function(req,res,next){
  console.log('delete '+req.params.username);
  var user=users[req.params.username];
  if(user){
    delete users[req.params.username];
    res.redirect('/users');
  }else{
    next(new Error(req.params.username+' delete error!'));
  }
 
});
 
 
 
 
 
module.exports = router;
