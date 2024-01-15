<script setup>

import TopMenu from '../components/Users/TopMenu.vue';
import UserItem from '../components/Users/UserItem.vue';

</script>

<template>
    <div class="flex w-full">

        <span class="flex flex-col w-full">
            <TopMenu />
            <UserItem />
            <UserItem />
            <UserItem />
        </span>
    </div>
</template>