<template>
    <v-card>
      <v-tabs v-model="tab" bg-color="primary" class="mx-5">
        <v-icon icon="mdi-minus-thick" @click="reduceTab" class="py-6 px-4" color="white"
          :color="steps === 1 ? 'grey' : 'black'"></v-icon>
        <v-tab v-for="n in steps" :key="n">Stage {{ n }}</v-tab>
        <v-icon icon="mdi-plus-thick" @click="addTab" class="py-6 px-4" color="white"></v-icon>
  
      </v-tabs>
  
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item v-for="n in steps" :key="n" :value="`stage${n}`">
            <v-row>
              <v-col cols="5">
                <v-card class="mx-auto px-3">
                  <v-card-title>
                    <span class="text-h3">Stage {{ n }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="stagesValue[n - 1].ageStart" label="Start Age" type="number"
                          disabled></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="stagesValue[n - 1].ageEnd" label="End Age" type="number"></v-text-field>
                      </v-col>
                    </v-row>
                    <h5 class="text-h5">Income Per Year</h5>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="stagesValue[n - 1].income.dependent" label="Dependent" type="number"
                          @focus="$event.target.select()">
                          <template v-slot:prepend>
                            <v-tooltip location="bottom">
                              <template v-slot:activator="{ props }">
                                <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                              </template>
  
                              <span> Dependent income is the income that you receive from your Parents or other family
                                members.</span>
                            </v-tooltip>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="stagesValue[n - 1].income.selfEmploy" label="Self Employ" type="number"
                          @focus="$event.target.select()">
                          <template v-slot:prepend>
                            <v-tooltip location="bottom">
                              <template v-slot:activator="{ props }">
                                <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                              </template>
  
                              <span> Self Employ income is the income that you receive from your own business.</span>
                            </v-tooltip>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="stagesValue[n - 1].income.renting" label="Renting" type="number"
                          @focus="$event.target.select()">
                          <template v-slot:prepend>
                            <v-tooltip location="bottom">
                              <template v-slot:activator="{ props }">
                                <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                              </template>
  
                              <span> Renting income is the income that you receive from your property.</span>
                            </v-tooltip>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="stagesValue[n - 1].income.other" label="Other" type="number"
                          @focus="$event.target.select()">
  
  
  
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <h5 class="text-h5">Expense per Year</h5>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="stagesValue[n - 1].expense.tax" label="Tax" type="number"
                          @focus="$event.target.select()">
                          <template v-slot:prepend>
                            <v-tooltip location="bottom">
                              <template v-slot:activator="{ props }">
                                <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                              </template>
  
                              <span> Tax expense is the tax that you need to pay.</span>
                            </v-tooltip>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="stagesValue[n - 1].expense.dailyLife" label="Daily Life" type="number"
                          @focus="$event.target.select()">
                          <template v-slot:prepend>
                            <v-tooltip location="bottom">
                              <template v-slot:activator="{ props }">
                                <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                              </template>
  
                              <span> Daily Life expense is the expense that you need to pay for your daily life.</span>
                            </v-tooltip>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="stagesValue[n - 1].expense.maintenance" label="Maintenance" type="number"
                          @focus="$event.target.select()"><template v-slot:prepend>
                            <v-tooltip location="bottom">
                              <template v-slot:activator="{ props }">
                                <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                              </template>
  
                              <span> Maintenance expense is the expense that you need to pay for your property maintenance,
                                equipment maintenance, etc.</span>
                            </v-tooltip>
                          </template></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="stagesValue[n - 1].expense.other" label="Other" type="number"
                          @focus="$event.target.select()"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="7">
                <BarChartStep3 :data="passData"/>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </template>
  <script>
  import { ref } from "vue";
  import BarChartStep3 from "./BarChartStep3.vue";
  export default {
    components: {
      BarChartStep3
    },
    data: () => ({
      tab: 'stage1',
      steps: 1,
      stagesValue: [
        {
          ageStart: ref(1), // this should be the start age that user already specified
          ageEnd: ref(),
          income: {
            dependent: ref(0),
            selfEmploy: ref(0),
            renting: ref(0),
            other: ref(0),
          },
          expense: {
            tax: ref(0),
            dailyLife: ref(0),
            maintenance: ref(0),
            other: ref(0),
          }
        }]
    }),
    methods: {
      addTab() {
        if (this.steps < 10) {
          this.steps++;
          this.tab = `stage${this.steps}`;
          if (this.stagesValue[this.steps - 1].ageEnd < this.stagesValue[this.steps - 1].ageStart) {
            alert("The end of the period must be greater than start of the period");}
          else{
          this.stagesValue.push({
            ageStart: ref(),
            ageEnd: ref(), // this should be the end age that user already specified
            income: {
              dependent: ref(0),
              selfEmploy: ref(0),
              renting: ref(0),
              other: ref(0),
            },
            expense: {
              tax: ref(0),
              dailyLife: ref(0),
              maintenance: ref(0),
              other: ref(0),
            }
          }),
            this.stagesValue[this.steps - 1].ageStart = this.stagesValue[this.steps - 2].ageEnd;
          }
        }
        console.log("new stage added")
      },
      reduceTab() {
        if (this.steps > 1) {
          this.steps--;
          this.tab = `stage${this.steps}`;
          this.stagesValue.pop();
        }
      }
    },
    computed: {
      passData(){
        let stagesValue = this.stagesValue[this.steps - 1]
        let income = parseInt(stagesValue.income.dependent) + parseInt(stagesValue.income.selfEmploy) + parseInt(stagesValue.income.renting) + parseInt(stagesValue.income.other)
        let expense = parseInt(stagesValue.expense.tax) + parseInt(stagesValue.expense.dailyLife) + parseInt(stagesValue.expense.maintenance) + parseInt(stagesValue.expense.other)
        let saving = income - expense
        return {
          labels: ['income', 'expense', 'saving'],
          datasets: [
            {
              label: '',
              backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFCE56'],
              data: [income, expense, saving]
            }
          ]
  
        }
      }
    }
  }
  </script>