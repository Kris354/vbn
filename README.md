curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -d '{"name": "Harry Potter", "price": 29.99}'

curl http://localhost:5000/api/books

curl http://localhost:5000/api/books/1

curl -X DELETE http://localhost:5000/api/books/1