<script setup>
import { defineProps } from 'vue';
import { UserService } from '../../Services/UserService';

defineProps({
    user: Object
});

const DeleteUser = async (id) => {
    const confirmation = confirm("Are you sure you want to delete this user?");
    if (confirmation) {
        const response = await UserService.deleteUser(id);
        if (response.success) {
            console.log("*************User deleted successfully*************");
        } else {
            console.error("Error deleting user:", response.message);
        }
    }
}

</script>

<template>
    <tr class="hoverGrey border-b-black border-b-opacity-30 border-b border-solid">
        <td class="flex flex-col md:flex-row gap-2.5">
            <img loading="lazy" :src="user.user_info.profile_picture_path"
                class="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
            <span class="flex">
                <div class="text-black text-opacity-80 text-sm sm:text-lg self-center">
                    {{ user.name }}
                </div>
            </span>
        </td>

        <td>{{ user.email }}</td>
        <td>{{ user.user_info.class }}</td>
        <td>{{ user.internalcode }}</td>
        <td>
            <button @click.stop="DeleteUser(user.id)" class="px-4 py-2 ml-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300">
                Delete
            </button>
        </td>
    </tr>
</template>

<style scoped>
td {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: left;
}

td:first-child {
    padding-left: 140px;
}
</style>