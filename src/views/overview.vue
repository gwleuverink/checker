<template>
    <div>

        days to test
        overview

        <ul>
            <li class="substance">
                <span class="substace__countdown">
                    x days left
                </span>
                <div class="substance__icon">

                </div>
                <div class="substance__data">
                    <h2>2cb</h2>
                    <a href="#">
                        more info about this substance
                    </a>
                </div>
            </li>
        </ul>


        <button @click="$emit('navigateTo', 0)">
            Start opnieuw
        </button>
    </div>
</template>

<style lang="scss">

    $substance-padding: 1em;

    .substance {
        padding: 1em;
        display:flex;
        flex-direction: row;

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


