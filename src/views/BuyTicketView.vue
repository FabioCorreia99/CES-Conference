<template>
    <v-app>
    
    <header class="position-absolute">
        <Navbar />
    </header>

    <v-main>
        
        <v-container id="main">
            <v-row>
                <!-- Header -->
                <v-col cols="12" class="mt-12">
                    
                    <h1>Payment Details</h1>
                    <h4 class="mb-2">Complete your purchase by providing your payment details</h4>

                </v-col>
            </v-row>

            <v-row id="firstRow">
                <v-col cols="12" md="4" class="formContainer"> 
                    <!-- User Info Form -->
                    <v-form ref="buyTicketForm" @submit.prevent="">
                        <!-- First & Last Name -->
                        <v-text-field 
                        v-model="name"
                        label="First and last name" 
                        underlined 
                        dense 
                        required>
                        </v-text-field>
                        
                        <v-text-field 
                        v-model="email"
                        label="Email" 
                        underlined 
                        dense 
                        required>
                        </v-text-field>
                        
                        <v-text-field 
                        v-model="occupation"
                        label="Occupation" 
                        underlined 
                        dense 
                        >
                        </v-text-field>

                        <div>Which days do you wish to attend? {{ checkedDates[0]}} <span v-if="checkedDates[1]">/</span> {{ checkedDates[1]}} <span v-if="checkedDates[2]">/</span> {{ checkedDates[2]}}</div>

                        <input type="checkbox" id="7" value="07-01-25" v-model="checkedDates" class="mr-1"/>
                        <label for="7" class="mr-2">07-01-25</label>

                        <input type="checkbox" id="8" value="08-01-25" v-model="checkedDates" class="mr-1"/>
                        <label for="8" class="mr-2">08-01-25</label>

                        <input type="checkbox" id="9" value="09-01-25" v-model="checkedDates" class="mr-1"/>
                        <label for="9" class="mr-2">09-01-25</label>

                    </v-form>
                </v-col>

                <v-col cols="12" md="8" class="formContainer"> 
                    <h2>Customize your ticket</h2>
                    <h4 class="mb-2">Your ticket, your choice</h4>

                    <Ticket />
                </v-col>

            </v-row>

        </v-container>

        <router-view />
    </v-main>
</v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Ticket from '@/components/Ticket.vue';
import TicketCustomizationPanel from '@/components/TicketCustomizationPanel.vue';

export default {
    name: "BuyTicketView",
    components: {
        Navbar,
        Ticket,
        TicketCustomizationPanel,
    },
    data() {
        return {
            checkedDates: [],
            name: "",
            email: "",
            occupation: "",
        }
    },
};
</script>

<style scoped>
.formContainer{
    border: 1px solid #26466D;
    border-radius: 10px;
}

#firstRow {
    gap: 1rem;
}

@media only screen and (min-width: 961px) {
    #firstRow {
        flex-wrap: nowrap;
        gap: 1rem;
    }
}

</style>
