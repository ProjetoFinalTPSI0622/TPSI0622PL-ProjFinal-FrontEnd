<template>
    <div class="flex flex-col" >
        <div class="bg-grey p-5 rounded-md border-b-opacity-50 border-b lg:flex">
            <slot name="AvatarCard">
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
