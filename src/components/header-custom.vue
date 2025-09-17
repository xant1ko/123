<template>
<header>
  <div class="header-custom">
      <div class="col-header">
        <div class="left">
          <div class="ab">
          <router-link to="/" class="ab-text">Aura Bloom</router-link>
          </div>
        </div>
        <div class="middle">
          <div class="col3">
          <router-link to="/page1" class="col3-text">Catalog</router-link>
          <a href="" class="col3-text">Collection</a>
          <a href="" class="col3-text">Rewiews</a>
          </div>
        </div>
        <div class="right">
          <div class="abcon">
              <a href="" class="col3-text">About us</a>
              <div class="btn">
                <router-link to="/page2" class="col3-text">Contacts</router-link>
              </div>
            </div>
          </div>
        </div>
        <v-label class="green-label" v-if="isLabel">В комнате бомба! </v-label>
      </div>
      
  </header>
  </template>
  <style scoped>
    @import '/src/assets/styles.css';
  </style>