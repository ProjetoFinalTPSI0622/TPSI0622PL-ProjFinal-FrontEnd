<template>
    <ImageCardShell>
        <template v-slot:ImageCard>
                    <div class="flex flex-col gap-5 p-5 w-[80%] max-md:w-full max-md:ml-0">
                        <div class="grow max-md:max-w-full max-md:mt-5">
                            <div class="gap-5 flex max-md:flex-col">
                                <DisplayImage />
                                <ImageText FileName="file_name.jpg" />
                            </div>
                        </div>
                </div>
        </template>
        <template v-slot:ButtonSubmit>
            <div class="flex justify-center mx-16">
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
