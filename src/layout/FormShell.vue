<template>
    <div class="bg-grey flex flex-col px-10 py-8 rounded-md max-md:px-5 border-b-opacity-50 border-b m-5">
        <slot name="FormTitle"></slot>
        <slot name="Form" >
            <slot></slot>

        </slot>
        <slot name="ButtonSubmit"></slot>
    </div>
</template>

<script>
export default {

}
</script>
