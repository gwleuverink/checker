
<template>

    <li class="substance">
        <span class="substance__countdown">
            x days left
        </span>
        <div class="substance__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line><line x1="7" y1="3.5" x2="17" y2="8.5"></line></svg>
        </div>
        <div class="substance__data">
            <p class="substance__name">{{ substance.name }}</p>
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
    $substance-padding: .5em;

    .substance {
        padding: $substance-padding;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        background: rgba(white, .3);
        margin-bottom: ($substance-padding * 1.5);
        border-radius: 10px;
        position: relative;

        $icon-size: 3em;

        &__name {
            font-weight: bold;
            color: white;
            text-transform: uppercase;
        }

        a {
            font-weight: normal;
            font-size: .8rem;
            color: white;
        }

        &__icon {
            width: $icon-size;
            height: $icon-size;
            border-radius: 5px;
            background: white;
            margin-right: ($substance-padding * 1.5);
            display: flex;
            align-content: center;
            align-items: center;

            svg {
                width: 50%;
                flex: 1;
            }
        }

        &__countdown {
            position: absolute;
            font-size: .7rem;
            padding: .75em;
            top: 50%;
            transform: translateY(-50%);
            right: $substance-padding;
            color: white;
        }

        // &__data {
        //     width: calc(100% - #{$icon-size});
        // }
    }
</style>

