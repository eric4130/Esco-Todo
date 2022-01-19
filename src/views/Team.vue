<template>
  <div class="team">
    <h1 class="white--text ma-8 header">Team</h1>

    <v-container class="my-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(member, i) in team"
          :key="i"
        >
          <v-card class="text-center">
            <v-avatar class="mt-3" size="120">
              <img :src="require(`../assets/${member.image}`)" alt="John" />
            </v-avatar>
            <v-card-text class="pb-2">
              <div class="text-h4">{{ member.name }}</div>
              <div class="text-h5 grey--text">{{ member.role }}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="grey" class="mb-1">
                <v-icon left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Eric", role: "Web Developer", image: "profile.jpg" },
        {
          name: "Elizabeth",
          role: "Being A Butt",
          image: "logo.svg",
        },
        {
          name: "Lauren",
          role: "Ultimate Grump",
          image: "profile.jpg",
        },
        { name: "Mom", role: "Mom Stuff", image: "logo.svg" },
        { name: "Dad", role: "Dad Stuff", image: "profile.jpg" },
      ],
    };
  },
};
</script>

<style>
.header {
  text-align: center;
}
</style>
