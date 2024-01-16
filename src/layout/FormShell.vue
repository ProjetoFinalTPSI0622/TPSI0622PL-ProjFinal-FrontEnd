<template>
    <form class="flex flex-col w-full gap-5">
        <slot name="AvatarCard"></slot>
        <div class="bg-grey flex flex-col p-8 rounded-md border-b-opacity-50 border-b mb-12 md:mb-0">
            <slot name="FormTitle"></slot>
            <slot name="Form">
                <slot></slot>
            </slot>
            <slot name="ButtonSubmit"></slot>
        </div>
    </form>
</template>

<script>
export default {
 

}
</script>
