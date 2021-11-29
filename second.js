if(localStorage.getItem("name")==="admin")
{
function out()
{
    $("#preview").text(" ");
    var total="";
$.get("https://jsonplaceholder.typicode.com/todos",(res,status,xhr)=>{

    console.log(res);
    res.forEach(element => {

        if (element.completed === true)
        {
        
        total+=`<input type='checkbox' id='${element.id}' checked disabled><span style='color:grey;'>&nbsp${element.id}.${element.title}</span> <br><hr>`;
        
        // console.log(`a${element.id}`);
        console.log(element.completed);

        }

        else
        {
            total+=`<input type='checkbox' id='${element.id}'>&nbsp${element.id}.${element.title} <br><hr>`;
        }


        $("#preview").html(total)
    });
    
});
localStorage.setItem("name", "admin");
var a=localStorage.getItem("name");
console.log(a);
}
function redirect()
{
    localStorage.setItem("name", "");
    location.href = 'index.html';
}

var n;



var b=0;
$("body").change(()=>{
var countChecked = function() {
    n = $( "input:checked" ).length;
    n=n-90;

    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            
        
        
        if(n==0)
        {
            
            reject();
        }
        
        else if(n%5==0 && ((b-n)<0))
        {
            
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        }
        else
        {
            b=n;
        }
    
    }, 100);
    });



    // $( "div" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
  };
  countChecked().then((s)=>alert(s));
   
//   $( "input[type=checkbox]" ).on( "click", countChecked );
console.log(n);
});





}
else
{
    $("#preview").html("<h1 style='text-align:center;color:red;'>Session Time out</h1>");
}