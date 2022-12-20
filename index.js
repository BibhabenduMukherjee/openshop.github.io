function handleSubmit(){
    const email = document.getElementById("exampleInputEmail1").value
    const password = document.getElementById("exampleInputPassword1").value
  console.log(email);
  console.log(password);
    if(email === "admin@admin.com" && password === "123456"){
        alert("Login Successfully")
    }
}


function decreaseQuantity(){
    const itemsNumber = document.getElementById("cartInput").value;
    if(Number(itemsNumber) <= Number("0")){
        alert("Cannot assign negative number items")
        return ;
    }
   
    const a = Number(itemsNumber)-1;
    document.getElementById("cartInput").value = a;

}


function increaseQuantity(){
    const itemsNumber = document.getElementById("cartInput").value;
    if(Number(itemsNumber) >= Number("50")){
        alert("To much items")
        return ;
    }
   
    const a = Number(itemsNumber)+1;
    document.getElementById("cartInput").value = a;


}

