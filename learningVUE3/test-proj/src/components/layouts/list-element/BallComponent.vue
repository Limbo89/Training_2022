<template>
    <div class="ball" :class="[size, border]"></div>
</template>
<script>
export default {
    props: {
        size: {
            type: String,
            default: 'big'
        },
        border: {
            type: String,
            default: 'gold'
        },
        color: {
            type: String,
            default: 'red'
        },
    },

}
</script>
<style>
.ball {
    border-radius: 1000px;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border: 3px solid red;
}

.small {
    width: 50px;
    height: 50px;
}

.middle {
    width: 75px;
    height: 75px;
}

.big {
    width: 100px;
    height: 100px;
}

.gold {
    border-color: rgb(167, 122, 0);
}
.black {
    border-color: rgb(0, 0, 0);
}
.blue {
    border-color: rgb(4, 0, 255);
}
</style>