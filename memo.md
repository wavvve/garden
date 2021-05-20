페이지는 asyncData 통해 동적페이지로 불러온다.
asyncData : 로드전 호출되어 컴포넌트의 Data와 병합되어 출력.
자동화 레퍼문서 : https://day0404.tistory.com/22

npm install @nuxt/http
npm install --save vue-lodash lodash

str api
Example
#Sort users by email.
ASC: GET /users?_sort=email:ASC
DESC: GET /users?_sort=email:DESC
#Sorting on multiple fields
GET /users?_sort=email:asc,dateField:desc
GET /users?_sort=email:DESC,username:ASC

정렬기능 만들기