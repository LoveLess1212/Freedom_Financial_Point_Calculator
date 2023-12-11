
<template>
  <div class="d-flex flex-column main">
      <div class="page">

      <div class="d-flex justify-center">
          <h1 class="">Title</h1>
      </div>

      <div class="row justify-content">
          <form>
            <v-row>
              <div class="col-5 col-md-5">
                  <div class="tabs">
                      <div class="nav-tabs">
                          <div class="nav-item rounded-t-xl" @click="setActive('tab-1')">
                              Akitin 1
                          </div>
                          <div class="nav-item rounded-t-xl" @click="setActive('tab-2')">
                              Akitin 2
                          </div>
                          <div class="nav-item rounded-t-xl" @click="setActive('tab-3')">
                              Akitin 3
                          </div>
                          <div class="nav-item rounded-t-xl" @click="setActive('tab-4')">
                              Akitin 4
                          </div>
                          <div class="nav-item rounded-t-xl" @click="setActive('tab-5')">
                              Passiva 1
                          </div>
                          <div class="nav-item rounded-t-xl" @click="setActive('tab-6')">
                              Passiva 2
                          </div>
                      </div>
                      <div class="tab-content">
                        
                          <div class="tab-pane" v-show="isActive('tab-1')">
                              <div class="for-example">
                                  <h1>Asset-Liquid Investment</h1>
                                  <div class="tab">
                                      <div class="LiquidInvestment">
                                          <p>Casher</p>
                                          <input id="cash" type="number" v-model="cash" placeholder="Enter num"/> <br>
                                          <p>Shares</p>
                                          <input id="share" type="number" v-model="share" placeholder="Enter num"/> <br>
                                          <p>Equity fund</p>
                                          <input id="fund" type="number" v-model="fund" placeholder="Enter num"/><br>
                                          <p>Pensions</p>
                                          <input id="pensions" type="number" v-model="pensions" placeholder="Enter num"/><br>
                                          <p>Pension fund</p>
                                          <input id="pensionfund" type="number" v-model="pensionfund" placeholder="Enter num"/><br>
                                          <p>Derivatives</p>
                                          <input id="derivatives" type="number" v-model="derivatives" placeholder="Enter num"/><br>
                                          <p>Precious Metals</p>
                                          <input id="preciousmetal" type="number" v-model="preciousmetal" placeholder="Enter num"/><br>
                                          <p>Other</p>
                                          <input id="other" type="number" v-model="other" placeholder="Enter num"/><br>

                                          
                                          <h1 id="message"> </h1>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <div class="tab-pane" v-show="isActive('tab-2')">
                              <h1>Asset-Real Estate</h1>
                              <div class="tab">
                                  <div class="LiquidInvestment">
                                      <p>Owner-occupied property</p>
                                      <input id="owner-occupied-property" type="number" v-model="OwnerOccupiedProperty" placeholder="Enter num"/> <br>
                                      <p>Rented residential properties</p>
                                      <input id="rented-residential-properties" type="number" v-model="RentedResidentialProperties" placeholder="Enter num"/> <br>
                                      <p>Rented commercial properties</p>
                                      <input id="rented-commercial-properties" type="number" v-model="RentedCommercialProperties" placeholder="Enter num"/><br>
                                      <p>Undeveloped lots</p>
                                      <input id="undeveloped-lots" type="number" v-model="UndevelopedLots" placeholder="Enter num"/><br>
                                      <p>Closed real estate funds</p>
                                      <input id="closed-real-estate-funds" type="number" v-model="ClosedRealEstateFunds" placeholder="Enter num"/><br>
                                      <p>Open real estate funds</p>
                                      <input id="open-real-estate-funds" type="number" v-model="OpenRealEstateFunds" placeholder="Enter num"/><br>
                                      <p>Other</p>
                                      <input id="other2" type="number" v-model="other2" placeholder="Enter num"/><br>
                                      <h1 id="message"> </h1>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane" v-show="isActive('tab-3')">
                              <h1>Asset-Coporate Holding</h1>
                              <div class="tab">
                                  <div class="LiquidInvestment">
                                      <p>Active participations</p>
                                      <input id="active-participations" type="number" v-model="ActiveParticipations" placeholder="Enter num"/> <br>
                                      <p>Not active participations</p>
                                      <input id="not-active-participations" type="number" v-model="NotActiveParticipations" placeholder="Enter num"/> <br>
                                      
                                      <h1 id="message"> </h1>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane" v-show="isActive('tab-4')">
                              <h1>Asset-Other Asset</h1>
                              <div class="tab">
                                  <div class="LiquidInvestment">
                                      <p>Capital building insurance</p>
                                      <input id="capital-building-insurance" type="number" v-model="CapitalBuildingInsurance" placeholder="Enter num"/> <br>
                                      <p>leasing fund</p>
                                      <input id="leasing-fund" type="number" v-model="LeasingFund" placeholder="Enter num"/> <br>
                                      <p>Art and Collections</p>
                                      <input id="art-and-collections" type="number" v-model="ArtAndCollections" placeholder="Enter num"/> <br>
                                      <p>Claims</p>
                                      <input id="claims" type="number" v-model="Claims" placeholder="Enter num"/> <br>
                                      <p>Other</p>
                                      <input id="other3" type="number" v-model="other3" placeholder="Enter num"/> <br>
                                      <h1 id="message"> </h1>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane" v-show="isActive('tab-5')">
                              <h1>Liabilities - Liabilities</h1>
                              <div class="tab">
                                  <div class="LiquidInvestment">
                                      <p>Object-related liabilities</p>
                                      <input id="object-related-liabilities" type="number" v-model="ObjectRelatedLiabilities" placeholder="Enter num"/> <br>
                                      <p>Non-property-related liabilities</p>
                                      <input id="non-property-related-liabilities" type="number" v-model="NonPropertyRelatedLiabilities" placeholder="Enter num"/> <br>
                                      
                                      <h1 id="message"> </h1>
                                  </div>
                              </div>
                              <h1>Liabilities - Provisions</h1>
                              <div class="LiquidInvestment">
                                      <p>Provisions</p>
                                      <input id="provisions" type="number" v-model="Provisions" placeholder="Enter num"/> <br>
                                  
                                      <h1 id="message"> </h1>
                                  </div>
                          </div>
                          <div class="tab-pane" v-show="isActive('tab-6')">
                              <h1>Liabilities - Reserved Equity</h1>
                              <div class="tab">
                                  <div class="LiquidInvestment">
                                      <p>Reserved equity for consumption</p>
                                      <input id="reserved-equity-for-consumption" type="number" v-model="ReservedEquityForConsumption" placeholder="Enter num"/> <br>
                                      <p>Reserved equity capital for pension provision</p>
                                      <input id="reserved-equity-capital-for-pension-provision" type="number" v-model="ReservedEquityCapitalForPensionProvision" placeholder="Enter num"/> <br>
                                      
                                      <h1 id="message"> </h1>
                                  </div>
                              </div>
                          </div>
                      </div>
                          <button type="button" v-on:click="calculate(
                          cash, share, fund, pensions, pensionfund, derivatives, preciousmetal, other, 
                          OwnerOccupiedProperty, RentedResidentialProperties, RentedCommercialProperties,UndevelopedLots, ClosedRealEstateFunds,OpenRealEstateFunds,other2,
                          ActiveParticipations, NotActiveParticipations,
                          CapitalBuildingInsurance, LeasingFund, ArtAndCollections, Claims, other3,
                          ObjectRelatedLiabilities, NonPropertyRelatedLiabilities, Provisions,
                          ReservedEquityForConsumption, ReservedEquityCapitalForPensionProvision)">Ok</button>
                  </div>
                          <!-- result show -->
                  
                         
            </div>
            <div class="col-5 col-md-5">
              <div class="tab">
                
              </div>
              <h1>mmb</h1>
            </div>
          </v-row>
          </form>
          <!-- <p>cash: {{ cash }}</p>
          <p>share: {{ share }}</p>
          <p>fund: {{ fund }}</p> -->
          <p>result: {{ result }}</p>
      </div>
</div>

</div>

</template>

<script>
  import math from '../services/math';
  
  export default 
  {
      name: 'Capital',
      data(){
          return{
              cash: 0, share: 0, fund: 0, pensions:0, pensionfund:0, derivatives:0, preciousmetal:0, other:0, 
              OwnerOccupiedProperty:0, RentedResidentialProperties:0, RentedCommercialProperties:0,UndevelopedLots:0, ClosedRealEstateFunds:0,OpenRealEstateFunds:0,other2:0,
              ActiveParticipations: 0, NotActiveParticipations:0,
              CapitalBuildingInsurance: 0, LeasingFund: 0, ArtAndCollections: 0, Claims: 0, other3: 0,
              ObjectRelatedLiabilities: 0, NonPropertyRelatedLiabilities: 0, Provisions: 0,
              ReservedEquityForConsumption:0, ReservedEquityCapitalForPensionProvision:0,
          }
      },
      data:() =>({
          activeTab: 'tab-1'
      })
      ,
      methods:
      {
          
          setActive(tab){
              this.activeTab = tab
          },
          isActive(tab){
              return this.activeTab ==tab;
          },
          calculate(a1,a2,a3,a4,a5,a6,a7,a8,b1,b2,b3,b4,b5,b6,b7,c1,c2,d1,d2,d3,d4,d5,e1,e2,e3,f1,f2)
          {
              var meth =new math();
              var BalanceSheet = meth.LiquidInvestment(a1,a2,a3,a4,a5,a6,a7,a8) + meth.RealEsate(b1,b2,b3,b4,b5,b6,b7) + meth.CoporateHolding(c1,c2) + meth.OtherAsset(d1,d2,d3,d4,d5);
              var FreeEquity = BalanceSheet - (meth.Liabilities(e1,e2,e3) + meth.ReservedEquity(f1,f2));
              console.log("Balancesheet = " + BalanceSheet);
              console.log("FreeEquity = " + FreeEquity);
              
          },
          
      }
      
      
  }
  // import math from '../services/math';
  // var a = new math();
  // console.log(a.plus(cash,share))
 
  
  
</script>
<style>
.LiquidInvestment input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;

  margin-left: 10px;
  border: 1px solid skyblue;
}
/* .LiquidInvestment button{
  width: 220px;
  height: 40px;
  border: 1px solid black
} */
.tabs{
  width: 900px;
  margin: 0 auto;
}
.nav-tabs{
  display: flex;
  justify-content: left;
}
.nav-item{
  cursor: pointer;
  width: 150px;
  background-color: aqua;
  text-align: center;

}
.tab-content{
  padding: 32px;

}
.for-example h1{
  margin-top: 0;
}
.main {
  background-color: #b1b1b1;
  height: 100%;
}
.page {
  background-color: #ffffff;
  padding: 50px;
  margin: 50px;
  width: auto;
  border-radius: 50px;
}
.button {
background-color: #04AA6D; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
}
</style>