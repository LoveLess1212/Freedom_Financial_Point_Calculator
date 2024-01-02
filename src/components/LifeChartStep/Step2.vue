<script>
import {ref} from "vue";
import { asset as store } from "../../services/store";
import PieChart from "./PieChart.vue";
export default {
  name: "Step2",
components: {
    PieChart
  },
  setup() {
    const Cash = ref(0);
    const Investment = ref(0);
    const Real_Estate = ref(0);
    const Business = ref(0);
    const OtherAssets = ref(0);
    const Mortgage = ref(0);
    const Loan = ref(0);
    const CreditCard = ref(0);
    const otherLiab = ref(0);

    return {
      Cash,
      Investment,
      Real_Estate,
      Business,
      OtherAssets,
      Mortgage,
      Loan,
      CreditCard,
      otherLiab,
    }
  }
  ,
  data() {
    return{
      
    }
  },
  computed: {
    TotalAssets() {
      return parseInt(this.Cash) + parseInt(this.Investment) + parseInt(this.Real_Estate) + parseInt(this.Business) + parseInt(this.OtherAssets)
    },
    TotalLiab() {
      return parseInt(this.Mortgage) + parseInt(this.Loan) + parseInt(this.CreditCard) + parseInt(this.otherLiab)
    },
    FreeEquity() {
      return parseInt(this.TotalAssets) - parseInt(this.TotalLiab)
    },
    DataAsset(){
      let CashPercent = (parseInt(this.Cash) / parseInt(this.TotalAssets)) * 100
      let InvestmentPercent = parseInt(this.Investment) / parseInt(this.TotalAssets) * 100
      let Real_EstatePercent = parseInt(this.Real_Estate) / parseInt(this.TotalAssets) * 100
      let BusinessPercent = parseInt(this.Business) / parseInt(this.TotalAssets) * 100
      let OtherAssetsPercent = parseInt(this.OtherAssets) / parseInt(this.TotalAssets) * 100
      // console.log(typeof(CashPercent))
      return {
        labels: ['Cash', 'Investment', 'Real Estate', 'Business', 'Other'],
        datasets: [
          {
            label: 'Assets Percentage',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFCE56'],
            data: [CashPercent, InvestmentPercent, Real_EstatePercent, BusinessPercent, OtherAssetsPercent]
          }
        ]
      } 
    },
    DataLiab(){
      let MortgagePercent = parseInt(this.Mortgage) / parseInt(this.TotalLiab) * 100
      let LoanPercent = parseInt(this.Loan) / parseInt(this.TotalLiab) * 100
      let CreditCardPercent = parseInt(this.CreditCard) / parseInt(this.TotalLiab) * 100
      let otherLiabPercent = parseInt(this.otherLiab) / parseInt(this.TotalLiab) * 100
      return {
        labels: ['Mortgage', 'Loan', 'Credit Card', 'Other'],
        datasets: [
          {
            label: 'Liabilities Percentage',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [MortgagePercent, LoanPercent, CreditCardPercent, otherLiabPercent]
          }
        ]
      } 
    },
  },
  methods:{
    modifyData(){
      store.Cash = this.Cash
      store.Investment = this.Investment
      store.Business = this.Business
      store.RealEstate = this.Real_Estate
      store.Mortgage = this.Mortgage
      store.StudentLoan = this.Loan
      store.CreditCard = this.CreditCard
      store.OtherLiab = this.otherLiab
      store.FreeEquity = this.FreeEquity
    }
  }

}
</script>

<template>

  <v-container class="d-auto">
    <v-row>
      <h2 class="text-h2">Balance Sheet</h2>
    </v-row>
    <v-row>
      <v-col cols="5" id="LeftInputBalanceSheet" style="border-right: 1px solid darkgray ">
        <v-card>
          <v-card-title>
            <h5 class="text-h5">Assets</h5>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="Cash" label="Cash" type="number" @focus="$event.target.select()">
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>
                      <span>Include all cash and cash equivalents, such as checking and savings accounts, money market accounts, and certificates of deposit (CDs).</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="Investment" label="Investment" type="number" @focus="$event.target.select()">
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Include all investment accounts, such as retirement accounts, brokerage accounts, and education savings accounts.</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="Real_Estate" label="Real Estate" type="number" @focus="$event.target.select()">
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Include the current market value of your primary residence and any other real estate you own. </span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="Business" label="Business" type="number" @focus="$event.target.select()">
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Include the current market value of any business you own.</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="OtherAssets" label="Other" type="number" @focus="$event.target.select()">
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Include the current market value of any other assets you own, such as cars, boats, and collectibles.</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-title>
            <h5 class="text-h5">Liabilities</h5>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="Mortgage" label="Mortgage" type="number" @focus="$event.target.select()">
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Include the current balance of your mortgage(s). "Mortgage: is the total amount of money you owe to your mortgage lender(s).</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="Loan" label="Student Loan" type="number" @focus="$event.target.select()">
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Include the current balance of your student loan(s).</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="CreditCard" label="Credit Card" type="number" @focus="$event.target.select()">
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Include the current balance of your credit card(s).</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="otherLiab" label="Other" type="number" @focus="$event.target.select()">
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Include the current balance of any other liabilities you have, such as car loans, personal loans, and medical debt.</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-container class="text-center">
            <v-btn type="submit" block @click="modifyData" class="mt-0">Submit</v-btn>
          </v-container>
          </v-card-text>
        </v-card>
        
      </v-col>
      <v-col cols="7" id="RightData">
        <v-card>
          <v-card-title>
            <h5 class="text-h5">Total</h5>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="TotalAssets" label="Total Assets" type="number" readonly>
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Assets are what you own.</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="TotalLiab" label="Total Liabilities" type="number" readonly>
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Liabilities are what you owe.</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field variant="solo-filled" v-model="FreeEquity" label="Free Equity" type="number" readonly>
                  <template v-slot:prepend>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>

                      <span>Free Equity is the difference between your assets and liabilities.</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <div>
        <v-row style="height: 50dvh; margin-top: 5px;">
          <v-col cols="12" md="6" style="border-right: 1px solid gray;">
            <PieChart :chartData="DataAsset" aria-describedby="my-data-table"/>
          </v-col>
          <v-col cols="12" md="6">
            <PieChart :chartData="DataLiab"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <h5 class="text-h5 text-center">Assets</h5>
          </v-col>
          <v-col cols="12" md="6">
            <h5 class="text-h5 text-center">Liabilities</h5>
          </v-col>
        </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>