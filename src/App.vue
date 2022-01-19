<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app color="grey lighten-1">
      <v-col class="text-center mb-n6">
        <v-avatar color="blue darken-2" size="80">
          <img :src="require('./assets/profile.jpg')" alt="John" />
        </v-avatar>
        <p class="white--text mt-1 text-h6">Eric</p>
      </v-col>
      <v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon color="black">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content right>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="grey lighten-2">
      <v-app-bar-nav-icon
        class="black--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text text--darken-3 px-0">
        <span class="font-weight-light">ESCO</span>
        <span class="font-weight-bold">Todo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="mr-2 black--text">
        <span>Sign Out</span>
        <v-icon large right>mdi-arrow-right-bold-box-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-1">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        { icon: "mdi-dock-window", text: "Dashboard", route: "/" },
        {
          icon: "mdi-account-details",
          text: "My Projects",
          route: "/projects",
        },
        { icon: "mdi-account-group", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>
