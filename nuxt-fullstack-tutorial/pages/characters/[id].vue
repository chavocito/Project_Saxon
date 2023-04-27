<script lang="ts" setup>
const route = useRoute()

type Character = {
    character: {
        id: string,
        name: string,
        image: string,
        status: string,
        species: string,
        location: {
          name: string
        }
    }
}


const query = gql`
query getCharacter{
  character(id: ${route.params.id}) {
      id
      name
      image
    	species
      status
      location {
        name
      }
  }
}
`

const { data, error } = await useAsyncQuery<Character>(query)
</script>

<template>
    <div>
        <CharacterCard 
            :key="data?.character.id"
            :id="data.character.id"
            :name="data.character.name"
            :image="data.character.image"
            :status="data.character.status"
            :species="data.character.species"
            :location="data.character.location.name"
      />
    </div>
</template>