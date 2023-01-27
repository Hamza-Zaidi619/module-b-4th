// let mam = [1,2,3]

// // let marks = mam.map(mam=> mam*2)
// // console.log(marks)


// let marks = mam.filter( function(a){
//   return a ===2 
// })
// console.log(marks)



let mobiles = [
  {
      name: "a30",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 2000,
      brand: "samsung"
  },
  {
      name: "note10",
      ram: "6gb",
      rom: "128gb",
      camera: "50px",
      price: 4000,
      brand: "samsung"
  },
  {
      name: "s10",
      ram: "3gb",
      rom: "128gb",
      camera: "10px",
      price: 5000,
      brand: "samsung"
  },
  {
      name: "iphone4",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "iphone"
  },
  {
      name: "iphone4s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 20000,
      brand: "iphone"
  },
  {
      name: "iphone5",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "iphone"
  },
  {
      name: "iphone6",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "iphone"
  },
  {
      name: "redminote10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi"
  },
  {
      name: "redminote11",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi"
  },
  {
      name: "redmi10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi"
  },
  {
      name: "redmi10pro",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi"
  },
  {
      name: "a3s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "oppo"
  },
];

// let status= mobiles.some(x=> x.name =="a30");
// console.log(status)

let brand = mobiles.map((x)=>x.brand)
brand= [...new Set(brand)]

// console.log(brands)

// let a = document.getElementById('brand')
// let b = document.getElementById('model')
// function init(){
//   brands.forEach((x)=>{
//     a.innerHTML += `<option value= '${x}'>${x}</option>`;
//   });
// }
// init();

// function getBrands(){
//     model = mobiles.filter((x)=>{x.brand== a.value}).map((x)=>name.value)
//   b.innerHTML+=`<option value= '${x}'>${x}</option>`
// }


let brands = document.getElementById('brands')
let model;
let models = document.getElementById('models')

function init() {
    brand.forEach((x) => {
        brands.innerHTML += `<option value='${x}'>${x}</option>`
    })
}
init()

function getBrand() {
    model = mobiles.filter(x => x.brand == brands.value).map(x => x.name)
    // console.log(model)
    models.innerHTML = ""
    model.forEach(x => {
        models.innerHTML += `<option value='${x}'>${x}</option>`
    })
}

function getMobile() {
    let obj = mobiles.find((x) => x.brand == brands.value && x.name == models.value)
    console.log(obj)
}

// let arr1= [1,2,3,["A","B","c"]];
// arr1=arr1.flat(3);
// console.log(arr1)

// let arr2= [1,2,3,["A","B","c",["1a","2a"]]];
// arr2=arr2.flat(Infinity);
// console.log(arr2)


// let numArr=[1,2,3,45,67,78,90,99]

// let c = Math.max(...numArr);
// console.log(c);