/**
 * Component: Footer
 * Description: This component represents the footer section of the application.
 * It displays links and copyright information.
 *
 * Props:
 * - None
 *
 * Data:
 * - links: An array of strings representing the links to be displayed in the footer.
 *
 * Methods:
 * - None
 *
 * Usage:
 * <Footer></Footer>
 */

<script setup>
const links = [
    'About Us',
    'Contact Us',
    'Legal',
    'Privacy Policy',
]
</script>

<template>
  <v-footer app name="footer" class="bg-grey-lighten-1" absolute >
    <v-row justify="center" no-gutters>
      <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>VGU</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>

</style>