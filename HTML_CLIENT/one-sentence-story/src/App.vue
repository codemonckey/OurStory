<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">

        <h1>One Sentence Story</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="doSignOut" v-show="isLoggedIn === false">SignOut</v-btn>
    </v-app-bar>

    <v-content>
      <BookShelf/>
    </v-content>
    <v-footer>2019 OneSentenceStory</v-footer>
  </v-app>
</template>

<script>
import BookShelf from './components/BookShelf';

export default {
  name: 'App',

  components: {
    BookShelf,
  },

  data: () => ({
    //
  }),
};
</script>
