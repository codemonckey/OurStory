<template>
  <v-container>
    <v-form id="enterStory" outlined>
      <v-text-field
        label="Title"
        v-model="title"
        clearable
        :counter="65"
        :rules="nameRules"
        clear-icon="x"
        auto-grow
        rounded
        outlined
      ></v-text-field>
      <p></p>
      <v-textarea
        label="The First Sentence"
        id="firstSentence"
        v-model="question"
        clearable
        clear-icon="x"
        auto-grow
        rounded
        outlined
        rows="1"
      ></v-textarea>
      <v-btn id="submitStory" color="primary">Submit</v-btn>
    </v-form>
    <v-divider></v-divider>
    <v-container id="shelf">
        <v-card id="storyCard">
          <v-card-title id="titleText">Cloudy, with a chance for storm</v-card-title>
        </v-card>
        <v-card id="storyCard">
          <v-card-title id="titleText">My First Day of School</v-card-title>
        </v-card>
        <v-card id="storyCard">
          <v-card-title id="titleText">My dog is the cutest.</v-card-title>
        </v-card>
        </v-container>
  </v-container>
</template>

<script>
export default {
  name: "BookShelf"
};
</script>

<style scoped>
#enterStory {
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-template-rows: 1fr 1fr;
}
#submitStory {
  padding: 5px;
  margin: 5px;
  margin-top: 10px;
}
#storyCard {
  padding: 5px;
  margin: 5px;
  max-width: 344px;
  justify-content: center;
}
#shelf {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

#titleText {
    justify-content: center;
}
</style>