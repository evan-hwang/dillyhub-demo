<template>
  <v-app>
      <app-drawer />
      <app-toolbar />
      <v-content>
          <v-container>
              <router-view></router-view>
          </v-container>
      </v-content>
  </v-app>
</template>
