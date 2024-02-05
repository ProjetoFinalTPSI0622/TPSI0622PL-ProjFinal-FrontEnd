<template>
    <div>
        <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between text-purple text-base xl:text-2xl font-bold my-auto w-full pl-1 pb-2 border-b-2 border-purple">
                {{ title }}
                <FilterType class="lg:pr-2 xl:pl-10 xl:w-3/12"/>
            </div>
        </div>
    </div>
</template>

<script>
import CheckBox from './CheckBox.vue'
import FilterType from './FilterType.vue'
export default {
    components: {
        CheckBox,
        FilterType
    },
    props: {
        title: {
            type: String,
            required: true
        }
    },
}
</script>
