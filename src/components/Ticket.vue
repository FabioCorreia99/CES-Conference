<template>
    <div id="ticket">
        <div v-if="hasLogo">
            <img id="ticketLogo" src="@\assets\media\Logo + year.svg" alt="CES logo">
        </div>

        <div v-if="name" id="ticketName">
            <p>{{ name }}</p>
        </div>

        <div v-if="occupation" id="ticketOccupation">
            <p>{{ occupation }}</p>
        </div>

        <div class="edges">
            <div id="topEdge" :style="{backgroundColor: primaryColor}"></div>
            <div id="bottomEdge" :style="{backgroundColor: primaryColor}"></div>
        </div>

        <div id="QRCODE">
            <img src="@\assets\media\QR CODE.svg" alt="QRCODE">
        </div>

        <div id="tag" :style="{backgroundColor: secondaryColor}">
            <p id="tagText">VISITOR</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Ticket",
        props: {
            primaryColor: {type: String, default: "#26466D"},
            secondaryColor: {type: String, default: "#F2A714"},
            hasLogo: {type: Boolean, default: true},
            name: {type: String},
            occupation: {type: String},
        }
    }
</script>

<style scoped>
#ticket {
    width: 236px;
    height: 409px;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
}
#ticketLogo {
    transform: rotateZ(90deg);
    transform-origin: center;
}
#ticketName {
    position: absolute;
    top: 20%;
    color: #26466D;
}
#ticketOccupation {
    position: absolute;
    top: 25%;
    color: #26466D;
}
.edges {
    position: absolute;
    width: 100%;
    height: 100%;
}
#topEdge {
    width: 24px;
    height: 100%;
    position: absolute;
    left: 0;
}
#bottomEdge {
    position: absolute;
    width: 24px;
    height: 100%;
    right: 0;
}
#QRCODE {
    position: absolute;
    top: 40%;
    left: 20%;
    transform: rotate(90deg);
}
#tag {
    position: absolute;
    width: calc(100% - 48px);
    height: 44px;
    top: 80%;
}
#tagText {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: white;
}
</style>