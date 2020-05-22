<template>
  <div>
    <div><md-button @click="getAnimals">TEST</md-button></div>
    <div>{{ animals }}</div>
    <div
      v-for="animal in animals"
      :key="animal.id"
      class="animal-list md-layout-item md-size-50 md-gutter"
    >
      <md-card class="md-primary" md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">{{ animal.name }}</div>
            <div class="md-subhead">{{ animal.type }}</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout-item md-size">
              <img
                class="pet-photo"
                :src="animal.image"
                :alt="animal.name + ': ' + animal.description"
              />
            </div>
            <div class="md-layout-item md-size">{{ animal.description }}</div>
          </md-card-content>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import pf_config from '../../pf_config.json';

const pfAddr = 'https://api.petfinder.com/v2/';

export default {
  name: 'AnimalList',
  data() {
    return {
      animals: [],
    };
  },
  methods: {
    async authenticate(token) {
      let response;
      let accessToken = token || this.token;

      if (!accessToken) {
        response = await axios.post(`${pfAddr}/oauth2/token`, {
          client_id: pf_config.key,
          client_secret: pf_config.secret,
          grant_type: 'client_credentials',
        });

        accessToken = response.data.access_token;
        console.log(response.data);
      }
      
      this.token = accessToken;
    },
    async getAnimals() {
        const response = await axios.get(`${pfAddr}/animals`, {

        });
        this.animals = response.data;
    },
  },
  mounted() {
    console.log('getting animals');
    this.authenticate(this.token);
  },
};
</script>

<style lang="scss">
.animal-list {
  margin: 0 auto;
  padding: 10px 0;

  .pet-photo {
    max-width: 200px;
  }
}
</style>
