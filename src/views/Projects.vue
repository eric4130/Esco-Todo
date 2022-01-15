<template>
  <div class="projects">

      <h1 class="white--text ma-8 header">This is a projects page</h1>
      
      <v-container class="my-5">
      <v-row>
            <v-col  cols="12" md="6">
                <v-btn outlined block class="primary">1</v-btn>
          </v-col>
          <v-col  cols="4" md  ="2">
                <v-btn outlined block class="primary">2</v-btn>
          </v-col>
          <v-col  cols="4" md="2">
                <v-btn outlined block class="primary">3</v-btn>
          </v-col>
          <v-col  cols="4" md="2">
                <v-btn outlined block class="primary">4</v-btn>
          </v-col>
        </v-row>

        <v-row justify="space-around">
          <v-col cols="4" md="3">
                <v-btn outlined block class="primary">1</v-btn>
          </v-col>
          <v-col cols="4" md="3">
                <v-btn outlined block class="primary">2</v-btn>
          </v-col>
        </v-row>
      </v-container>

  </div>
</template>

<style>

.header {
  text-align: center;
}
</style>