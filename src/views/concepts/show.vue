<script setup>
import { ref } from 'vue';
import jsonFile from './big.json';
const json = ref(jsonFile);
const show = ref(true);
// {
//     "id": "2489651045",
//     "type": "CreateEvent",
//     "actor": {
//         "id": 665991,
//         "login": "petroav",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/petroav",
//         "avatar_url": "https://avatars.githubusercontent.com/u/665991?"
//     },
//     "repo": {
//         "id": 28688495,
//         "name": "petroav/6.828",
//         "url": "https://api.github.com/repos/petroav/6.828"
//     },
//     "payload": {
//         "ref": "master",
//         "ref_type": "branch",
//         "master_branch": "master",
//         "description": "Solution to homework and assignments from MIT's 6.828 (Operating Systems Engineering). Done in my spare time.",
//         "pusher_type": "user"
//     },
//     "public": true,
//     "created_at": "2015-01-01T15:00:00Z"
// }
</script>
<template>
    <ul class="max-w-7xl h-[400px] overflow-y-scroll" v-if="show">
        <li v-for="item in json?.slice(0, 10000)" :key="item.id" class="flex items-start justify-start space-x-2 my-8">
          <img :src="item.actor.avatar_url" alt="image" class="w-10 h-10 rounded-full" />
            <span>
            {{ item.id }} - {{ item.type }} 
        </span>
    <span>{{ item.actor.url }}
</span>
            {{ item.payload.description }}
        </li>
    </ul>
    <button @click="show = !show">Toggle</button>
</template>
