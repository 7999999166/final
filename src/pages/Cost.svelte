<script>
var c1 = ' ' ;
var a1 ;
var b1 ;
var c2 ;
var a2 ;
var b2 = " " ;
var c3 ;
var a3 ;
var b3 ;
var c4 ;
var a4 = 0;
var b4 = 0 ;
var c5 ;
var a5 = 0 ;
var b5 = 0 ;
var c6 ;
var a6 = 0 ;
var b6 = 0 ;
  function refresh(e) {
     location.reload(); 
  } 
   function submitData(e){
  c1 = a1 * b1 ;
  c3 = a3 * b3 ;
  c4 = a4 * b4 ;
  c5 = a5 * b5 ;
  c6 = a6 * b6 ;
  c2 = c1 - c3 - c4 - c5 - c6 ;
  console.log(c2);
  a2 = a1 - a3 - a4 - a5 - a6 ;
  console.log(a2);
  b2 = c2/a2 ;
  console.log(b2);
  }

</script>
<style>
.aa{
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 84vh;
}
.bb{
flex-grow: 2;
background-color: #9a8c98;
display: flex;
justify-content: flex-start;
align-items: center;
flex: 2;
}

.dd{
 display: flex;
    flex: 4;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.gg{
    font-family: monospace;
    margin-left: 10px;

}
.hh{
width: 95px;
}
input{
    margin-left: 30px;
}

.ss{
     font-family: monospace;
     font-size: 1.7rem;
     color: #f2e9e4;
}
.pp{
flex-grow:6 ;
display: flex;
justify-content: center;
}
.qq{
flex-grow:2 ;
display: flex;
justify-content: center;
}
.rr{
flex-grow:2 ;
display: flex;
justify-content: center;
}
.oo{
    background-color: #22223b;
    display: flex;
    align-items: center; 
    height: 10vh;
}
.xx{
    margin-top: 23px;
}
.yy{
    margin-bottom: 10px;
}
.aaa{
    background: transparent ;
    
}
.bbb{
    width: 100px;
}
.ccc{
    margin-right: 25px;
}
.ddd{
    background-color: transparent;
    font-weight: bolder;
    border: transparent;
}
.eee{
    margin-bottom: 50px;
}

</style>
<div class="aa">

    <div class="oo w3-top w3-card">
        <div class="pp"><h3 class="ss">Calculator</h3></div>
        <div class="qq"><button type="button" class="btn btn-outline-light" on:click="{refresh}">Clear</button></div>
        <div class="rr"><button type="button" class="btn btn-outline-light" on:click="{submitData}">Calculate</div>
    </div>  

    
     <div class="bb xx">
    <h3 class="gg xxx">purchase : {c1} </h3>
   
     


    </div>
    
   
    <div class="dd">
    <input type="text" class="w3-round w3-input hh aaa bbb">
    <input type="number" class="form-control hh" bind:value={a1} placeholder="Quantity">
    <input type="number" class="form-control hh ccc" bind:value={b1} placeholder="Price"> 

    </div>

     <div class="bb">
    <h3 class="gg xxx">sale : {c1}</h3>
    
     


    </div>
   
     <div class="dd yy">
    <input type="text" class="w3-round w3-input hh aaa bbb">
    <input type="number" class="form-control hh ddd" bind:value={a2} placeholder="Quantity" disabled>
    <input type="number" class="form-control hh ccc ddd" bind:value={b2} placeholder="Cost" disabled>

    </div>
     
   
    <div class="dd yy">
    <input type="text" class="w3-round w3-input hh aaa bbb">
    <input type="number" class="form-control hh" bind:value={a3} placeholder="Quantity">
    <input type="number" class="form-control hh ccc" bind:value={b3} placeholder="Price"> 

    </div>

     <div class="dd yy">
    <input type="text" class="w3-round w3-input hh aaa bbb">
    <input type="number" class="form-control hh" bind:value={a4} placeholder="Quantity" >
    <input type="number" class="form-control hh ccc" bind:value={b4} placeholder="Price"> 

    </div>

     <div class="dd yy">
    <input type="text" class="w3-round w3-input hh aaa bbb">
    <input type="number" class="form-control hh" bind:value={a5} placeholder="Quantity">
    <input type="number" class="form-control hh ccc" bind:value={b5} placeholder="Price"> 

    </div>

     <div class="dd yy eee">
   <input type="text" class="w3-round w3-input hh aaa bbb">
    <input type="number" class="form-control hh" bind:value={a6} placeholder="Quantity">
    <input type="number" class="form-control hh ccc" bind:value={b6} placeholder="Price"> 

    </div>
   
    
</div>