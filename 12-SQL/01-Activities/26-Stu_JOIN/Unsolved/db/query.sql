-- Add your code below and execute file in MySQL Shell --

-- My code:
SELECT favorite_books.id, favorite_books.book_name AS "Book Names", favorite_books.in_stock AS In_Stock, book_prices.price AS "Book Prices"
FROM book_prices
INNER JOIN favorite_books ON favorite_books.book_price=book_prices.price;

-- ChatGPT CODE: BETTER HERE!
SELECT favorite_books.id, favorite_books.book_name, favorite_books.in_stock, book_prices.price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;
