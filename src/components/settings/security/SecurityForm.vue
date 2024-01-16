<template>
       <FormShell>
        <template v-slot:FormTitle>
            <div class="flex flex-col w-full">
                <FormTitle FormTitle="Change Password" />
            </div>
        </template>
        <template v-slot:Form>
            <div class="flex flex-col w-full my-5">
                <div class="flex flex-col gap-5 ">
                    <Input LabelTitle="Current Password" type="password" placeholder="Insert your current password" required v-model="currentPassword" />
                    <Input LabelTitle="New Password" type="password" placeholder="Insert new password" required v-model="newPassword" />
                    <Input LabelTitle="Confirm Password" type="password" placeholder="Confirm password" required v-model="confirmPassword" />
                </div>
            </div>
        </template>
        <template v-slot:ButtonSubmit>
            <div class="flex justify-center mx-10">
                <ButtonSubmit textButton="Update Information" />
            </div>
        </template>
    </FormShell>
</template>

<script>
    import FormShell from '../../../layout/FormShell.vue';
    import FormTitle from '../../Form/FormTitle.vue';
    import Input from '../../Form/Input.vue';
    import ButtonSubmit from '../../Form/ButtonSubmit.vue';
    export default {
        components: {
            FormShell,
            FormTitle,
            Input,
            ButtonSubmit
        },
    }
</script>
