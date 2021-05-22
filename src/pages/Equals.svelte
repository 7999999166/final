<script>
var value1 ;
var value2 ;
var pvalue1 ;
var pvalue2 ;



function refresh(e) {
     location.reload(); 
  } 
   function submitData(e){
if(value1 == undefined){
   value1 =  pvalue1*value2/pvalue2 ;
}
if(value2 == undefined){
   value2 =  pvalue2*value1/pvalue1 ;
}
if(pvalue1 == undefined){
   pvalue1 =  pvalue2*value1/value2 ;
}
if(pvalue2 == undefined){
   pvalue2 =  pvalue1*value2/value1 ;
}

  }


</script>
<style>
.aa{
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 84vh;
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
.ss{
     font-family: monospace;
     font-size: 1.7rem;
     color: #f2e9e4;
}
.dd{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.yy{
    margin-bottom: 10px;
}
.ccc{
    margin-right: 25px;
}
.ddd{
    background-color: transparent;
    font-weight: bolder;
    border: transparent;
}
.hh{
width: 95px;
}
.mmm{
    margin-top: 40%;
}
.ttt{
    text-align: center;
}
.iii{
    margin-left: 30px;
}
</style>

<div class="aa">
   <div class="oo w3-top w3-card">
        <div class="pp"><h3 class="ss">Calculator</h3></div>
        <div class="qq"><button type="button" class="btn btn-outline-light" on:click="{refresh}">Clear</button></div>
        <div class="rr"><button type="button" class="btn btn-outline-light" on:click="{submitData}">Calculate</div>
    </div>  


   
    
     
   
    <div class="dd yy mmm iii">
    
    <input type="number" class="form-control hh ccc ttt" bind:value={value1} placeholder="Value">
    <input type="number" class="form-control hh ccc ddd" disabled>
    <input type="number" class="form-control hh ccc ttt" bind:value={pvalue1} placeholder=" % Value"> 

    </div>

     <div class="dd yy iii">
    
    <input type="number" class="form-control hh ddd ccc" disabled>
    <input type="number" class="form-control hh ccc ddd ttt" placeholder="=" disabled>
    <input type="number" class="form-control hh ccc ddd" disabled>

    </div>

     <div class="dd yy iii">
    
    <input type="number" class="form-control hh ccc ttt" bind:value={value2} placeholder=" Value" >
    <input type="number" class="form-control hh ccc ddd" disabled>
    <input type="number" class="form-control hh ccc ttt" bind:value={pvalue2} placeholder=" % Value"> 

    </div> 
</div>