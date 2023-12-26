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
                      <v-text-field v-model="ageStart" label="Start Age" type="number" disabled></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field v-model="ageEnd" label="End Age" type="number"></v-text-field>
                    </v-col>
                  </v-row>
                  <h5 class="text-h5">Income Per Year</h5>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field v-model="incomeDependent" label="Dependent" type="number"
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
                      <v-text-field v-model="incomeSelfEmploy" label="Self Employ" type="number"
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
                      <v-text-field v-model="incomeRenting" label="Renting" type="number" @focus="$event.target.select()">
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
                      <v-text-field v-model="incomeOther" label="Other" type="number" @focus="$event.target.select()">
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <h5 class="text-h5">Expense per Year</h5>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field v-model="expenseTax" label="Tax" type="number" @focus="$event.target.select()">
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
                      <v-text-field v-model="expenseDailyLife" label="Daily Life" type="number"
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
                      <v-text-field v-model="expenseMaintenance" label="Maintenance" type="number"
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
                      <v-text-field v-model="expenseOther" label="Other" type="number"
                        @focus="$event.target.select()"></v-text-field>
                    </v-col>
                  </v-row>
<!--                  <p> age: {{ user.age }}</p>-->
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="7">
              <!-- <BarChartStep3 :data="passData" /> -->
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
import { ref } from "vue";
// import BarChartStep3 from "./BarChartStep3.vue";
import { user as store } from "../../services/store.js";
export default {
  components: {
    // BarChartStep3
  },
  data() {
    return {
      tab: 'stage1',
      steps: 1,
      ageStart: ref(store.age),
      ageEnd: ref(store.expectedAge),
      incomeDependent: ref(0),
      incomeSelfEmploy: ref(0),
      incomeRenting: ref(0),
      incomeOther: ref(0),
      expenseTax: ref(0),
      expenseDailyLife: ref(0),
      expenseMaintenance: ref(0),
      expenseOther: ref(0),
      stages: []
    };
  },
  methods: {
    addTab() {
      if (this.steps < 10) {
        this.steps++;
        this.tab = `stage${this.steps}`;
        if (this.ageEnd < this.ageStart) {
          alert("The end of the period must be greater than start of the period");
        } else {
          this.pushStage();
        }
      }
    },
    reduceTab() {
      if (this.steps > 1) {
        this.steps--;
        this.tab = `stage${this.steps}`;
        this.stagesValue.pop();
      }
    },
    pushStage() {
      const stage = {
        ageStart: this.ageStart,
        ageEnd: this.ageEnd,
        income: {
          dependent: this.incomeDependent,
          selfEmploy: this.incomeSelfEmploy,
          renting: this.incomeRenting,
          other: this.incomeOther
        },
        expense: {
          tax: this.expenseTax,
          dailyLife: this.expenseDailyLife,
          maintenance: this.expenseMaintenance,
          other: this.expenseOther
        }
      };
      this.stages.push(stage);
    }
  },
  computed: {
    // passData() {
    //   let stagesValue = this.stagesValue[this.steps - 1]
    //   let income = parseInt(stagesValue.income.dependent) + parseInt(stagesValue.income.selfEmploy) + parseInt(stagesValue.income.renting) + parseInt(stagesValue.income.other)
    //   let expense = parseInt(stagesValue.expense.tax) + parseInt(stagesValue.expense.dailyLife) + parseInt(stagesValue.expense.maintenance) + parseInt(stagesValue.expense.other)
    //   let saving = income - expense
    //   return {
    //     labels: ['income', 'expense', 'saving'],
    //     datasets: [
    //       {
    //         label: '',
    //         backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFCE56'],
    //         data: [income, expense, saving]
    //       }
    //     ]

    //   }
    // },

  },
  watch: {

  }
}
</script>