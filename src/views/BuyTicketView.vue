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
                    
                    <h1 class="blueText">Payment Details</h1>
                    <h4 class="mb-2 blueText">Complete your purchase by providing your payment details</h4>

                </v-col>
            </v-row>

            <v-row id="firstRow">
                <v-col cols="12" md="3" class="formContainer"> 
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

                <v-col cols="12" md="6" class="formContainer customTicketContainer"> 
                    <div class="customTicketTitles">
                        <h2 class="blueText">Customize your ticket</h2>
                        <h4 class="mb-2 blueText">Your ticket, your choice</h4>
                    </div>
                    
                    <div class="customTicketOptions">
                        <TicketCustomizationPanel 
                            :ticket="user.ticket"
                        />
                    </div>
                    
                    <div class="TicketComponent">
                        <Ticket
                        :primaryColor="user.ticket.primaryColor"
                        :secondaryColor="user.ticket.secondaryColor"
                        :hasLogo="user.ticket.hasLogo"
                        :name="user.ticket.name ? user.name : ''"
                        :occupation="user.ticket.occupation ? occupation : ''"
                        style="transform: scale(0.65);"
                        />
                    </div>
                    
                </v-col>

            </v-row>

            <v-row id="secondRow">
                
                <v-col cols="12" md="3" class="formContainer"> 
                    
                    <h1 class="blueText">Payment method</h1>
                    <h4 class="mb-2 blueText">Select your preferred payment method and pay securely</h4>

                    <div class="methodsWrapper">
                        <div class="paymentMethod">
                            <img src="@\assets\media\PayPal.svg" alt="PayPal">
                        </div>

                        <div class="paymentMethod">
                            <img src="@\assets\media\Google Pay.svg" alt="Google Pay">
                        </div>

                        <div class="PromotionCode">
                            <h2>Promo Code</h2>
                        </div>
                    </div>

                </v-col>

                <v-col cols="12" md="3" class="formContainer"> 
                    
                    <h1 class="blueText">Total</h1>
                    <hr class="blueText">

                    <h3 class="blueText">Day(s)</h3>
                    <h3 class="blueText">Discount</h3>

                </v-col>

                <v-col cols="12" md="3" class="formContainer"> 
                    
                    

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
import { useUsersStore } from '@/stores/users';

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
            usersStore: useUsersStore(),
        }
    },
    computed: {
        user() {
            return this.usersStore.getUserById(this.usersStore.currentUserId);
        }
    },
    created() {
        
        if (this.user) {
            this.name = this.user.name || "";
            this.email = this.user.Email || "";
        }
        
    },
    
};
</script>

<style scoped>
.formContainer{
    border: 1px solid #26466D;
    border-radius: 10px;
}

.blueText {
    color: #26466D;
}

#firstRow {
    gap: 1rem;
}

#secondRow {
    margin-top: 2rem;
    gap: 1rem;
}

.customTicketContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.customTicketTitles {
    grid-area: 1 / 1 / 2 / 2;
}

.customTicketOptions {
    grid-area: 2 / 1 / 6 / 2;
}

.TicketComponent {
    grid-area: 1 / 2 / 6 / 4;
    margin-top: -4rem;
    min-width: 153.4px;
    min-height: 265.85px;
    max-width: 153.4px;
    max-height: 265.85px;
    justify-self: center;

}

.methodsWrapper {
    display: flex;
    gap: 1rem;
}

.paymentMethod {
    width: 91px;
    height: 36px;
    cursor: pointer;
}
.PromotionCode {
    display: flex;
    justify-content: center;
    color: #26466D;
    width: 182px;
    height: 36px;
    border: 1px solid #26466D;
    border-radius: 10px;
}

@media only screen and (min-width: 961px) {
    #firstRow {
        flex-wrap: nowrap;
        gap: 1rem;
    }
    
}

</style>
