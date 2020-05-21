<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="finder-form md-layout-item md-size-50 md-small-size-100">
        <!-- <md-card-header>
          <div class="md-title">Finder Form</div>
        </md-card-header> -->

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-100">
              <md-field :class="getValidationClass('type')">
                <label for="animal-type">Type</label>
                <md-select
                  name="type"
                  id="type"
                  v-model="form.type"
                  :disabled="sending"
                >
                  <md-option value="dog">Dog</md-option>
                  <md-option value="cat">Cat</md-option>
                  <md-option value="oth">Other</md-option>
                </md-select>
                <span class="md-error" v-if="!$v.form.type.required"
                  >Animal type is required</span
                >
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-100">
              <md-field :class="getValidationClass('gender')">
                <label for="gender">Gender</label>
                <md-select
                  name="gender"
                  id="gender"
                  v-model="form.gender"
                  md-dense
                  :disabled="sending"
                >
                  <md-option value="A">Any</md-option>
                  <md-option value="M">Male</md-option>
                  <md-option value="F">Female</md-option>
                </md-select>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50">
              <md-field :class="getValidationClass('postcode')">
                <label for="postcode">Postal Code</label>
                <md-input
                  name="postcode"
                  id="postcode"
                  v-model="form.postcode"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.postcode.required"
                  >The postal code is required</span
                >
                <span class="md-error" v-else-if="!$v.form.postcode.numeric"
                  >Your postal code must contain numbers only</span
                >
                <span class="md-error" v-else-if="!$v.form.postcode.length"
                  >Your postal code must be 5 digits</span
                >
              </md-field>
            </div>

            <div class="md-layout-item md-size-50">
              <md-field :class="getValidationClass('distance')">
                <label for="distance">Distance</label>
                <md-select
                  name="distance"
                  id="distance"
                  v-model="form.distance"
                  md-dense
                  :disabled="sending"
                >
                  <md-option value="0">Anywhere</md-option>
                  <md-option value="50">50 miles</md-option>
                  <md-option value="100">100 miles</md-option>
                  <md-option value="150">150 miles</md-option>
                  <md-option value="200">200 miles</md-option>
                </md-select>
                <span class="md-error">The distance is required</span>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="query" v-if="sending"/>

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary" :disabled="sending"
            >Search</md-button
          >
        </md-card-actions>
      </md-card>

      <!-- <md-snackbar :md-active.sync=""></md-snackbar> -->
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
  required,
  minLength,
  maxLength,
  numeric,
} from 'vuelidate/lib/validators';

export default {
  name: 'FormValidation',
  mixins: [validationMixin],
  data: () => ({
    form: {
      type: null,
      breed: null,
      size: null,
      gender: "A",
      postcode: null,
      distance: "100",
    },
    sending: false,
  }),
  validations: {
    form: {
      type: {
        required,
      },
      postcode: {
        required,
        numeric,
        length: (val) => {
          return val.length === 5;
        },
      },
    },
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.type = null;
      this.form.gender = null;
      this.form.postcode = null;
    },
    search() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.sending = false;
        this.clearForm();
      }, 5000);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.search();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.finder-form {
  margin: 30px auto 0;
}
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
