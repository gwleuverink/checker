<template>
    <div>

        <button @click="$emit('navigateTo', 0)">
            Back
        </button>

        Date input

        <button @click="$emit('navigateTo', 2)">
            Select this date
        </button>
    </div>
</template>