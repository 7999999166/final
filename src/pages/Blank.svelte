<script> 
  var volume ;
  var weight = " " ;
  var height ;
  var width ;
  var diameter;
  var thickness ;   
  function submitData(e){
  if (diameter != undefined){width = 3.14*diameter}
  volume = (height*0.0254)* (width*0.0254)* (thickness*0.001) ;
  weight = volume * 7930 ;
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
    height: 100vh;
}
.oo{
    background-color: #22223b;
    display: flex;
    align-items: center; 
    height: 10vh;
}
.bb{
flex-grow: .5;
background-color: #9a8c98;
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
}
.cc{
 display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    align-items: center;
}
.dd{
 display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.ee{
 display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.zz{
     display: flex;
    flex: .5;
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
.xx{
    margin-bottom: 50px;
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
</style>
<div class="aa">
    <div class="oo w3-top w3-card">
        <div class="pp"><h3 class="ss">Calculator</h3></div>
        <div class="qq"><button type="button" class="btn btn-outline-light" on:click="{refresh}">Clear</button></div>
        <div class="rr"><button type="button" class="btn btn-outline-light" on:click="{submitData}">Calculate</div>
    </div>


    <div class="bb"><h3 class="gg">Weight (Kg) : {weight} </h3></div>
    <div class="cc">
    <h3 class="gg">Height (inch) &nbsp; :</h3>
    <input type="number" class="form-control hh" bind:value={height}>

    </div>
    <div class="dd">
    <h3 class="gg">Diameter (inch) :</h3>
    <input type="number" class="form-control hh" bind:value={diameter}>

    </div>
    <div class="ee">
    <h3 class="gg">Width (inch) &nbsp;&nbsp; :</h3>
    <input type="number" class="form-control hh" bind:value={width}>
 
    </div>
    <div class="ee">
    <h3 class="gg">Thickness (mm)  :</h3>
    <input type="number" class="form-control hh" bind:value={thickness}> 


    </div>
   <div class="zz xx"></div>
</div>