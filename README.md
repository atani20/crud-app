## CRUD App

API поддерживает следующие HTTP-запросы:
- GET
- POST (INSERT)
- PUT (UPDATE)
- DELETE

POST/PUT запросы ожидают JSON с полями *name* и *description*.

Данные сохраняются в файл *data/shoplist.json*

### Проверено при помощи [*curl*](https://curl.se/):
- Получить все:
```angular2
curl -i -X GET http://localhost:8800/api/shoplist
```
- Получить по индексу:
```angular2
curl -i -X GET http://localhost:8800/api/shoplist/id
```
- Добавить запись:
```angular2
curl -i -X POST \
    -H "Content-Type: application/json" \
    -d '{ "name": "Milk", "description": "2 bottle"}' \
    http://localhost:8800/api/shoplist
```
- Обнавить запись по индексу:
```angular2

curl -i -X PUT \
    -H "Content-Type: application/json" \
    -d '{ "name": "Milk", "description": "2 bottle"}' \
    http://localhost:8800/api/shoplist/id
```
- Удалить запись по индексу:
```angular2
curl -i -X DELETE http://localhost:8800/api/shoplist/id
```

### Usage

- git clone
- npm install express 
- npm install --save-dev morgan nodemon
- npm start
- запросы отправлять на http://localhost/8800/api/shoplist