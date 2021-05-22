<script>
var height = " " ;
var weight = " " ;
var thickness ;
var section ;
var wide ;
function submitData(e){
height = (section/28)/thickness ;
height = height.toFixed(2);
weight = (thickness*.001) *7930 * (height*.0254) * (wide*0.0254) ;
weight = weight.toFixed(3);
  }
  function refresh(e) {
     location.reload(); 
  }  

</script>
<style>
.aa{
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 90vh;
}
.bb{
flex-grow: 2;
background-color: #9a8c98;
display: flex;
justify-content: center;
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
.ee{
 display: flex;
    flex: 4;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.gg{
    font-family: monospace;

}
.hh{
width: 80px;
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
    margin-bottom: 120px;
}
</style>
<div class="aa">

    <div class="oo w3-top w3-card">
        <div class="pp"><h3 class="ss">Calculator</h3></div>
        <div class="qq"><button type="button" class="btn btn-outline-light" on:click="{refresh}">Clear</button></div>
        <div class="rr"><button type="button" class="btn btn-outline-light" on:click="{submitData}">Calculate</div>
    </div>  

    
     <div class="bb xx">
    <h3 class="gg">Sheet</h3>
     


    </div>
    <div class="ee"><h3 class="gg">Height (inch) : {height}  </h3></div>
    <div class="ee"><h3 class="gg">Weight (Kg) : {weight} </h3></div>

    <div class="dd">
    <h3 class="gg">Wide (inch) &nbsp; :</h3>
    <input type="number" class="form-control hh"  bind:value={wide}>

    </div>
   
    <div class="dd">
    <h3 class="gg">Thickness (mm) :</h3>
    <input type="number" class="form-control hh"  bind:value={thickness}>

    </div>

     <div class="bb">
    <h3 class="gg">Flat</h3>
     


    </div>
   
     
   
    <div class="dd yy">
    <h3 class="gg">Section (mm2) :</h3>
    <input type="number" class="form-control hh"  bind:value={section}>

    </div>
   
    
</div>