// let url = "https://example.com?foo=1&bar=2";
// let u = new URL(url);
// // console.log(u);
// let params = new URLSearchParams(u.search)
// // console.log(params)

// let f = params.get("foo");
// // console.log(`Foo! = ${f}`);
// console.log(f);



function searchParams (url,params){
    let u = new URL(url);
    let queryParams = new URLSearchParams(u.search)
    return queryParams.get(params);
}
export default searchParams;
