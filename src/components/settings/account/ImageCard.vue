<template>
    <ImageCardShell>
        <template v-slot:ImageCard>
            <div class="flex flex-col gap-5 p-5">
                <div class="flex flex-col gap-5 md:flex-row lg:text-nowrap">
                    <DisplayImage />
                    <ImageText FileName="file_name.jpg" />
                </div>
            </div>
        </template>
        <template v-slot:ButtonSubmit>
            <div class="flex justify-center mx-16 md:mx-28 lg:mx-10 lg:my-auto lg:w-full">
                <ButtonSubmit textButton="Update" />
            </div>
        </template>
    </ImageCardShell>
</template>

<script>
import ImageCardShell from '../../../layout/ImageCardShell.vue';
import DisplayImage from './DisplayImage.vue';
import ImageText from './ImageText.vue';
import ButtonSubmit from '../../ButtonSubmit.vue';

export default {
    components: {
        ImageCardShell,
        DisplayImage,
        ImageText,
        ButtonSubmit
    }
}
</script>
