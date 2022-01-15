<template>
<div class="dashboard">

      <h1 class="white--text ma-8 header">Dashboard</h1>

      <v-container class="my-5">

        <v-row class="mb-3 ml-0">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
            <v-btn small text v-on="on" color="grey darken-4" @click="sortBy('title')">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">by project title</span>
            </v-btn>
             </template>
                <span>sort by project title ascending alphabetically</span>
              </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on }">
          <v-btn small text v-on="on" color="grey darken-4" class="ml-0" @click="sortBy('person')">
            <v-icon left small>mdi-account</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
              </template>
              <span>sort by person name ascending alphabetically</span>
            </v-tooltip>
        </v-row>

        <v-card flat class="pa-3 my-1" v-for="(project, i) in projects" :key="i">
          <v-row :class="`pa-1 project ${project.status}`">
            <v-col cols="12" md="6">
              <div class="text-overline black--text">Project Title</div>
              <div>{{ project.title }}</div>
            </v-col>
             <v-col cols="6" sm="4" md="2">
              <div class="text-overline black--text">Person</div>
              <div>{{ project.person }}</div>
            </v-col>
              <v-col cols="6" sm="4" md="2">
              <div class="text-overline black--text">Due Date</div>
              <div>{{ project.due }}</div>
            </v-col>
             <v-col cols="12" sm="4" md="2">
              <div class="float-sm-right">
                  <v-chip :class="`${project.status} white--text my-3`">{{ project.status }}</v-chip>
              </div>
            </v-col>
            </v-row>
        </v-card>
      </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {title: 'Design a new website', person: 'Eric', due: 'Feb 1, 2022',status:'Ongoing'},
        {title: 'Be nicer to people', person: 'Lauren', due: 'Dec 13, 2022',status:'Overdue'}, 
        {title: 'Get a sweet new job', person: 'Elizabeth', due: 'Mar 2, 2022',status:'Completed'},
        {title: 'Get off the couch', person: 'Dad', due: 'Feb 28, 2022',status:'Completed'},   
    ]
    }
  },
  methods: {
    sortBy(prop) {
      // sort by comparing 2 strings at a time (prop=title or person, etc.)
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>


<style>
.header {
  text-align: center;
}

.project.Completed {
  border-left:4px solid #3cd1c2;
}
.project.Ongoing {
  border-left:4px solid #d1cf3c;
}
.project.Overdue {
  border-left:4px solid #d13c3c;
}

.v-chip.Completed {
  background: #3cd1c2 !important;
}
.v-chip.Ongoing {
  background: #d1cf3c !important;
}
.v-chip.Overdue {
  background: #d13c3c !important;
}

</style>