import find_test from "./find.js";

let data =  [
    {
        id:1,
        title:'new title',
        price:'new price',
        category:'new category',
        description:'new description',
        image:'new image url'
    },  {
        id:2,
        title:'new title',
        price:'new price',
        category:'new category',
        description:'new description',
        image:'new image url'
    },
    {
        id:3,
        title:'new title',
        price:'new price',
        category:'new category',
        description:'new description',
        image:'new image url'
    },
    {
        id:4,
        title:'new title',
        price:'new price',
        category:'new category',
        description:'new description',
        image:'new image url'
    }
];

    test("test find function", ()=>{
        expect(find_test(data, 2)).toEqual( {
            id:2,
            title:'new title',
            price:'new price',
            category:'new category',
            description:'new description',
            image:'new image url'
        });
    } );

    test("test find function 2", () =>{
        expect(find_test(data, 3)).toEqual({
            id:3,
            title:'new title',
            price:'new price',
            category:'new category',
            description:'new description',
            image:'new image url'
        });
    });