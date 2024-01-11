<template>
    <div class="flex flex-col place-content-center mt-5" >
        <div class="bg-grey m-5 p-5 md:px-0 rounded-md max-md:px-5 border-b-opacity-50 border-b">
            <slot name="ImageCard">
                <slot></slot>
            </slot>
            <slot name="ButtonSubmit"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
