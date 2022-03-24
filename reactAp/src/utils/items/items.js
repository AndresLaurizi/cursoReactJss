const products = 
[
{id: 1, title: "Mouse", description: "Inalambrico", price: 999 ,stock: 20, pictureUrl:"/assets/mouse.jpg" },
{id: 2, title: "Mouse2", description: "Inalambrico", price: 999 ,stock: 4, pictureUrl:"/assets/mouse.jpg"},
{id: 3, title: "Mouse3", description: "Inalambrico", price: 999 ,stock: 2, pictureUrl:"/assets/mouse.jpg" },
{id: 4, title: "Mouse4", description: "Inalambrico", price: 999 ,stock: 9, pictureUrl:"/assets/mouse.jpg" }
]

export const getProducts = new Promise ((resolve,reject) => {
    let condition = true
    if (condition){
      setTimeout(() =>{
        resolve(products)
      }, 2000)
    }
    else
      reject("400")
  })

