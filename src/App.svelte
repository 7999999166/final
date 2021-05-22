<script>
  import { RouterView, Link } from '@bjornlu/svelte-router';
  import './w3.css';
  import './bootstrap.min.css';
</script>

 <style>
   .aa{
     display: flex;
     flex-direction: column;
     flex: 1;
     height:100%;
     background-color: #c9ada7;
   }
   
   .cc{
     height:90%;
     background-color: #c9ada7;
     margin-top: 60px;
   }
   .dd{
     height: 10% ;
     background-color: #22223b;
     display: flex;
     justify-content: space-between;
     align-items: center;
     
   }
   .ll{
     margin-left: 20px;
   }
   .mm{
     margin-right: 20px;
   }
   a{
     text-decoration: none;
     color: #f2e9e4 ;
   }
   a:hover{
     color: #22223b ;
   }

 </style>
  <div class="aa">


      <div class="cc">
       <RouterView /> 
      </div>


     <div class="dd w3-bottom w3-card">
       <div class="hh"><button type="button" class="btn btn-outline-light ll"><a href="/">Blank</a></button></div>
       <div class="ii"><button type="button" class="btn btn-outline-light"><a href="/circle">Circle</a></button></div>
       <div class="jj"><button type="button" class="btn btn-outline-light"><a href="/sheet">Flat</a></button></div>
       <div class="kk"><button type="button" class="btn btn-outline-light"><a href="/cost">Cost</a></button></div> 
       <div class="jj"><button type="button" class="btn btn-outline-light mm"><a href="/equals">Equals</a></button></div>
     </div>
  </div>

