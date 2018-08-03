<template>
    <div>

        <button @click="$emit('navigateTo', 1)">
            Back
        </button>

        Type select

        <button @click="$emit('navigateTo', 3)">
            Select this type
        </button>
    </div>
</template>
