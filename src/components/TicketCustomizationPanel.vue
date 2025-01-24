<template>
    <div>
        <div class="options">

            <div class="logoWrapper">
                <input type="checkbox" id="displayLogo" value="true" v-model="hasLogo" class="mr-1" @change="updateTicket('hasLogo', hasLogo)"/>
                <label for="displayLogo" class="mr-2 ">Display CES logo</label>
            </div>

            <div class="nameWrapper">
                <input type="checkbox" id="displayName" value='true' v-model="displayName" class="mr-1" @change="updateTicket('name', displayName)"/>
                <label for="displayName" class="mr-2 ">Display name</label>
            </div>

            <div class="occupationWrapper">
                <input type="checkbox" id="displayOccupation" value="true" v-model="displayOccupation" class="mr-1" @change="updateTicket('occupation', displayOccupation)"/>
                <label for="displayOccupation" class="mr-2 ">Display occupation</label>
            </div>

        </div>

        <div class="colorOptions">
            <div class="primaryColor">

                <h3 class="">Primary color</h3>

                <div class="colorWrapper">
                    <div class="color" id="black" @click="updateTicket('primaryColor', 'black')"></div>
                    <div class="color" id="darkBlue" @click="updateTicket('primaryColor', '#26466D')"></div>
                    <div class="color" id="lightBlue" @click="updateTicket('primaryColor', '#6590D0')"></div>
                    <div class="color" id="white" @click="updateTicket('primaryColor', 'white')"></div>
                    <div class="color" id="grey" @click="updateTicket('primaryColor', '#AAAEB1')"></div>
                    <div class="color" id="orange" @click="updateTicket('primaryColor', '#F2A714')"></div>
                </div>

            </div>

            <div class="secondaryColor">
                
                <h3 class="">Secondary color</h3>

                <div class="colorWrapper">
                    <div class="color" id="black" @click="updateTicket('secondaryColor', 'black')"></div>
                    <div class="color" id="darkBlue" @click="updateTicket('secondaryColor', '#26466D')"></div>
                    <div class="color" id="lightBlue" @click="updateTicket('secondaryColor', '#6590D0')"></div>
                    <div class="color" id="white" @click="updateTicket('secondaryColor', 'white')"></div>
                    <div class="color" id="grey" @click="updateTicket('secondaryColor', '#AAAEB1')"></div>
                    <div class="color" id="orange" @click="updateTicket('secondaryColor', '#F2A714')"></div>
                </div>

            </div>
        </div>
    </div>
        
</template>

<script>
import { useUsersStore } from '@/stores/users';

    export default {
        props: {
            ticket: {
                type: Object,
                required: true,
            }
        },
        data() {
            const usersStore = useUsersStore();
            return {
                user: usersStore.getUserLogged,
                hasLogo: this.ticket.hasLogo,
                displayName: this.ticket.name,
                displayOccupation: this.ticket.occupation,
                usersStore,
            }
        },
        methods: {
            updateTicket(attribute, value) {

                if (this.user) {
                    const updatedTicket = {
                        ...this.user.ticket,
                        [attribute]: value
                    };

                    this.usersStore.updateUser({
                        ...this.user,
                        ticket: updatedTicket
                    });

                }
            }
        }
        
    }
</script>

<style scoped>
.options {
    display: flex;
    flex-direction: column;  
}
.colorOptions {
    margin-top: 2rem;
}
.labelText {
    color: #26466D;
}
.color {
    width: 37px;
    height: 16px;
    cursor: pointer;
}
#darkBlue {
    background-color: #26466D;
}
#lightBlue {
    background-color: #6590D0;
}
#black {
    background-color: black;
}
#white {
    background-color: white;
}
#grey {
    background-color: #AAAEB1;
}
#orange {
    background-color: #F2A714;
}
.colorWrapper {
    display: flex;
    flex-direction: row;
}

</style>