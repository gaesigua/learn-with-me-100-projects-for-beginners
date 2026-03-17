/*
1. You should have a booWho function.
2. booWho(true) should return true.
3. booWho(false) should return true.
4. booWho([1, 2, 3]) should return false.
5. booWho([].slice) should return false.
6. booWho({ "a": 1 }) should return false.
7. booWho(1) should return false.
8. booWho(NaN) should return false.
9. booWho("a") should return false.
10. booWho("true") should return false.
11. booWho("false") should return false

*/

const booWho = (arg1) => {
  if(arg1 === true){
    return true;
	}
	else if(arg1 === false){
	   return true;
	}
	else {
	   return false;
	}
}