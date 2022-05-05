<template>
    <div id="player" style="height: calc(100vh - 56px); width: 100%; background-color: black;">
        <div class=" h-100">
            <video controls class="h-100 w-100" :src=" `${ this.$route.params.movieL }`" onerror="this.src='http://localhost:5000/static/video.mp4'">
                            
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: "Watch",
}
</script>
