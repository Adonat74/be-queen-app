<script setup>

</script>

<template>
    <div class="productImg">
        <img src="../../assets/images/bikle-modele-s-velo-moto-1 2.png" alt="" height="270px" width="500">
        <select name="" id="ficheTechnique">
            <option value="">Fiche technique</option>
        </select>
    </div>
</template>

<style scoped>
    /* imageComponent */
    #ficheTechnique{
        width: 500px;
    }
    .productImg{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .productImg>select{
        border-radius: 5px;
        background-color: rgb(198, 198, 198);
        text-align: center;
        font-size: 1.1rem;
    }
</style>
