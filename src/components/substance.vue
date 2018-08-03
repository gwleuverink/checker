
<template>

    <li class="substance">

        <!--
            Add to json:
            - substance more info links
            - type
        -->

        <span class="substance__countdown">
            x days left
        </span>
        <div class="substance__icon">
        </div>
        <div class="substance__data">
            <h2>{{ substance.name }}</h2>
            <a href="#">
                more info about this substance
            </a>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        substance: {
            type: Object
        }
    }
}
</script>


<style lang="scss">

    $substance-padding: 1em;

    .substance {
        padding: 1em;
        display:flex;
        flex-direction: row;
        position: relative;
        background: white;
        margin-bottom: .25em;
        box-shadow: 0 0 20px rgba(black, .2);

        $icon-size: 3em;

        &__icon {
            width: $icon-size;
            height: $icon-size;
            border-radius: $icon-size;
            background: white;
        }

        &__countdown {
            position: absolute;
            border-radius: 5px;
            padding: .5em;
            background: #bada55;
            top: $substance-padding;
            right: $substance-padding;
            font-weight: bold;
            color: #333;
        }

        &__data {
            width: calc(100% - #{$icon-size});
        }
    }
</style>

