var express = require('express');
var router = express.Router();

/* GET /api */
router.get('/', function (req, res, next) {
  res.send({ message: 'Hello React' });
});

// /api/developers
router.get('/developers', function (req, res, next) {
  setTimeout(function () {
    res.send([
      {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '홍길동',
        'birthday': '961222',
        'gender': '남자',
        'job': '대학생'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '나동빈',
        'birthday': '960508',
        'gender': '남자',
        'job': '프로그래머'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '이순신',
        'birthday': '961127',
        'gender': '남자',
        'job': '디자이너'
      }
    ]);
  }, 3000);
});


module.exports = router;
