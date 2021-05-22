<script> 
 var volume ;
  var weight = " " ;
  var volumel = " " ;
  var radius ;
  var diameter;
  var thickness ;   
  function submitData(e){
  radius = diameter/2 ;
  volume = (radius*0.0254)* (radius*0.0254)* (thickness*0.001)* 3.14 ;
  weight = volume * 7930 ;
  weight = weight.toFixed(3);
  volumel = volume * 1000;
  volumel = volumel.toFixed(2);

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
.xx{
    margin-bottom: 80px;
    padding-bottom: 40px;
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
</style>
<div class="aa">

    <div class="oo w3-top w3-card">
        <div class="pp"><h3 class="ss">Calculator</h3></div>
        <div class="qq"><button type="button" class="btn btn-outline-light" on:click="{refresh}">Clear</button></div>
        <div class="rr"><button type="button" class="btn btn-outline-light" on:click="{submitData}">Calculate</div>
    </div>  


    <div class="bb"><h3 class="gg">Weight (Kg) : {weight} </h3></div>
    <div class="bb"><h3 class="gg">Volume (ltr) : {volumel} </h3></div>
   
    <div class="dd">
    <h3 class="gg">Diameter (inch) :</h3>
    <input type="number" class="form-control hh" bind:value={diameter}>

    </div>
   
    <div class="ee xx">
    <h3 class="gg">Thickness (mm)  :</h3>
    <input type="number" class="form-control hh" bind:value={thickness}> 


    </div>
    
</div>