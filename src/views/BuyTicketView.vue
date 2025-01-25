<template>
    <v-app>
    
    <header class="position-absolute">
        <Navbar />
    </header>

    <v-main>
        
        <div class="mainWrapper">
            <v-row>
                <!-- Header -->
                <v-col cols="9" class="mt-12">
                    
                    <h1 class="blueText">Payment Details</h1>
                    <h4 class="mb-2 blueText">Complete your purchase by providing your payment details</h4>

                </v-col>
            </v-row>

            <v-row id="firstRow" cols="12" md="3">
                <v-col class="formContainer"> 
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

            <v-row id="secondRow" cols="12" md="3">
                
                <v-col class="formContainer"> 
                    
                    <h1 class="blueText">Payment method</h1>
                    <h4 class="mb-2 blueText">Select your preferred payment method and pay securely</h4>

                    <div class="methodsWrapper">
                        <div class="paymentMethod">
                            <img src="@\assets\media\PayPal.svg" alt="PayPal">
                        </div>

                        <div class="paymentMethod">
                            <img src="@\assets\media\Google Pay.svg" alt="Google Pay">
                        </div>

                    </div>

                </v-col>

                <v-col cols="12" md="3" class="formContainer"> 
                    
                  
                    <div class="totalGroup">
                        <div class="totalWrapper">
                            <h1 class="blueText">Total</h1>
                            <span id="value">{{ total }} $</span>
                        </div>

                        <hr class="blueText">
                    </div>

                    <div class="daysDiscountWrapper">
                        <div class="totalWrapper">
                            <h3 class="blueText">Day(s)</h3>
                            <span id="value">{{ checkedDates.length }}</span>
                        </div>
                        
                        <div class="totalWrapper">
                            <h3 class="blueText">Discount</h3>
                            <span id="value">{{ (days * 600 * discount[days]) || 0  }} $</span>
                        </div>
                    </div>
                
                </v-col>

                <v-col cols="12" md="3" class="formContainer" id="payContainer"> 
                    
                    <div class="termsWrapper">
                        <input type="checkbox" class="mr-1"/>
                        <h5 class="blueText">I have read and agree to the <b>Terms and Conditions</b> and <b>Privacy Policy</b>.</h5>
                    </div>

                    <div class="termsWrapper">
                        <input type="checkbox" class="mr-1"/>
                        <h5 class="blueText">I <b>consent</b> to receive <b>marketing emails</b>and <b>promotional offers</b> from <b>CTA/CES</b>.</h5>
                    </div>

                    <div class="payButton">
                        <span id="payText">/End purchase</span>

                        <span id="payText2">/Confirm and pay {{ total }} $</span>
                       
                    </div>

                </v-col>

            </v-row>
        </div>

        <router-view />
    </v-main>

    <Footer />
</v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';
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
        Footer,
    },
    data() {
        return {
            checkedDates: [],
            name: "",
            email: "",
            occupation: "",
            usersStore: useUsersStore(),
            total: 0,
            discount: {
                1: 0,
                2: 1/6,
                3: 1/3,
            },
        }
    },
    computed: {
        user() {
            return this.usersStore.getUserById(this.usersStore.currentUserId);
        },
        days() {
            return this.checkedDates.length;
        },
    },
    created() {
        
        if (this.user) {
            this.name = this.user.name || "";
            this.email = this.user.Email || "";
        }
        
    },
    methods: {
        calculateTotal() {
            const dayPrice = 600;
            const discount = this.discount[this.days] || 0;

            this.total = Math.round(this.days * dayPrice * ( 1- discount));
        }
    },
    watch: {
        days(newVal) {
            this.calculateTotal();
        }
    },
    
};
</script>

<style scoped>

.mainWrapper {
    position: relative;
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 2rem; 
}

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
    gap: 0.5rem;
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
    width: 100%; 
    max-width: 153.4px; 
    height: auto; 
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

.paymentMethod:hover {
    border-radius: 10px;
    border: 1px solid #26466D;
}

.paymentMethod:active {
    border-radius: 10px;
    border: 1px solid #26466D;
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

.totalWrapper {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

.daysDiscountWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 75%;
}

.termsWrapper {
    display: flex;
    align-items: center;
}

#payContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.payButton {
    border-radius: 10px;
    border: 1px solid #26466D;
    background-color: #F2A714;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    position: relative;
    overflow: hidden; 
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.payButton:hover {
    background-color: white;
}

.payButton::before {
    content: '';
    position: absolute;
    bottom: -80%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 0;
    transition: bottom 0.3s ease;
}

.payButton:hover::before {
    bottom: 0;
}

#payText, #payText2 {
    position: absolute;
    z-index: 1;
    transition: opacity 0.3s ease;
    white-space: nowrap;
}

#payText {
    opacity: 1;
}

#payText2 {
    opacity: 0;
    color: #26466D;
}

.payButton:hover #payText {
    opacity: 0;
}

.payButton:hover #payText2 {
    opacity: 1;
}

@media only screen and (min-width: 961px) {
    #firstRow {
        flex-wrap: nowrap;
        gap: 1rem;
    }
    
}

@media (max-width: 500px) {
    .customTicketContainer {
        grid-template-columns: 1fr; 
        grid-template-rows: auto; 
    }

    .TicketComponent {
        grid-area: unset;
        transform-origin: top left;
        /* margin-top: 1rem;  */
        transform: scale(0.75);
        margin: auto;  
    }
}

</style>
