<template>
    <div class="flex flex-col place-content-center p-5" >
        <div class="bg-grey p-5 rounded-md border-b-opacity-50 border-b lg:flex">
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
