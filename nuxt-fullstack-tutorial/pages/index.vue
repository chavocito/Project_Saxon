<template>
    <div class="flex flex-wrap dark:bg-gray-900">
      <CharacterCard 
        v-for="{ id, name, image, status, species, location } in data?.characters.results"
        :key="id"
        :id="id"
        :name="name"
        :image="image"
        :status="status"
        :species="species"
        :location="location.name"
      />
    </div>
  </template>
  <script lang="ts" setup>
  type CharactersResults = {
    characters: {
      results: {
        id: string,
        name: string,
        image: string,
        status: string,
        species: string,
        location: {
          name: string
        }
      } []
    }
  }
  
  const query = gql`
    query getCharacters {
      characters {
        results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
      }
    }
  `
  
  const { data } = await useAsyncQuery<CharactersResults>(query)
  </script>