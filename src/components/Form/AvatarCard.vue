<template>
    <AvatarCardShell>
        <div class="flex flex-col md:flex-row p-5 md:px-10 gap-5 items-center">
            <div class="flex flex-col gap-5 w-full items-center md:flex-row">
                <div class="flex flex-col w-36 items-center justify-center">
                    <img v-if="imagePreview" :src="imagePreview" alt="AvatarDefault">
                </div>
                <div class="flex flex-col items-center md:items-start md:justify-center">
                    <h2 class="text-primary text-xl">Upload Photo</h2>
                    <p class="text-primary text-opacity-50 text-base mt-2.5" v-if="fileName"> {{ fileName }} </p>
                </div>
            </div>
            <label class="text-white text-center text-lg font-bold justify-center items-center bg-purple py-3 rounded-md cursor-pointer my-auto w-6/12 md:w-5/12">
                <span >Choose Photo</span>
                <input type="file" class="hidden" @change="handleImageChange" accept="image/*">
            </label>
        </div>
    </AvatarCardShell>
</template>
  
<script>
import AvatarDefault from '../../assets/AvatarDefault.svg'
import AvatarCardShell from '../../layout/AvatarCardShell.vue';
export default {
    components: {
        AvatarCardShell
    },
    data() {
        return {
            imagePreview: AvatarDefault,
            fileName: 'No file selected'
        }
    },
    methods: {
        handleImageChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.imagePreview = URL.createObjectURL(file)
                this.fileName = file.name
                // this.$emit('image-selected', this.imagePreview);
            }
        },
    },
}
</script>
  
  
  