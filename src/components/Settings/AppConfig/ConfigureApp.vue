<template>
    <div>
        <div class="bg-grey rounded-md p-5">
            <FormTitle FormTitle="Criação de Novo Estado" />
            <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
                <div class="w-2/5">
                    <Input LabelTitle="Titulo do Estado" type="text" required v-model="buttonText"/>
                </div>
                <div class="flex">
                    <Colorpicker :buttonText="buttonText"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormTitle from '../../Form/FormTitle.vue';
import Input from '../../Form/Input.vue';
import Colorpicker from './Colorpicker.vue';
export default {
    components: {
        FormTitle,
        Input,
        Colorpicker
    },
    data() {
        return {
            buttonText: ""
        }
    },
}
</script>
