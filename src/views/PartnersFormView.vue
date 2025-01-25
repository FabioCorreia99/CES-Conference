<template>
  <v-app>
    <header class="position-absolute">
      <Navbar />
    </header>

    <v-main class="d-flex justify-center align-center flex-column greyBG">
      <h1 class="mt-16 blueText">Become a partner</h1>

      <v-row class="formContainer mt-8 mb-8">
        <v-col cols="8">
          <v-form
            ref="partnerForm"
            v-model="isFormValid"
            @submit.prevent="submitForm"
          >
            <h1>What type of partnership do you want at CES?</h1>

            <div class="checkboxWrapper">
              <div class="partnerType">
                <input
                  type="radio"
                  v-model="partnerType"
                  value="Gold"
                  class="mr-1"
                />
                <h4>Gold Partner</h4>
              </div>

              <div class="partnerType">
                <input
                  type="radio"
                  v-model="partnerType"
                  value="Bronze"
                  class="mr-1"
                />
                <h4>Bronze Partner</h4>
              </div>

              <div class="partnerType">
                <input
                  type="radio"
                  v-model="partnerType"
                  value="Silver"
                  class="mr-1"
                />
                <h4>Silver Partner</h4>
              </div>
            </div>

            <v-text-field
              class="mb-4 mt-8"
              v-model="companyName"
              :rules="formRules"
              label="Company name*"
              underlined
              dense
              required
            >
            </v-text-field>

            <v-text-field
              class="mb-4 mt-4"
              v-model="companyWebsite"
              :rules="formRules"
              label="Website*"
              underlined
              dense
              required
            >
            </v-text-field>

            <v-text-field
              class="mb-4 mt-4"
              v-model="companyEmail"
              :rules="formRules"
              label="Email*"
              underlined
              dense
              required
            >
            </v-text-field>

            <v-row>
              <v-col>
                <v-text-field
                  class="mb-4"
                  v-model="companyPhone"
                  :rules="formRules"
                  label="Phone*"
                  underlined
                  dense
                  required
                >
                </v-text-field>
              </v-col>

              <v-col>
                <v-select
                  v-model="companyCountry"
                  :rules="formRules"
                  :items="countryList"
                  label="Country, Region or Territory*"
                  required
                ></v-select>
              </v-col>
            </v-row>

            <h1>
              Tell us about your company and what your goals are to achieve with
              this partnership*
            </h1>

            <v-textarea
              v-model="companyGoals"
              :rules="formRules"
              underlined
              dense
              required
              counter
            >
            </v-textarea>

            <h4>
              By clicking submit, we will soon give you confirmation of this
              partnership with all the terms.
            </h4>

            <SubmitBtn
              :disabled="!isFormValid"
              value="submit"
              @click="submitForm"
            />
          </v-form>
        </v-col>
      </v-row>
    </v-main>
    <Footer id="footer" />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import SubmitBtn from "@/components/SubmitBtn.vue";
import { usePartnersStore } from "@/stores/partners";

export default {
  components: {
    Navbar,
    Footer,
    SubmitBtn,
  },
  data() {
    return {
      partnerType: [],
      companyName: "",
      companyWebsite: "",
      companyEmail: "",
      companyPhone: "",
      companyCountry: "",
      countryList: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czechia",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Holy See",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (North)",
        "Korea (South)",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine State",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ],
      companyGoals: "",
      partnersStore: usePartnersStore(),
      isFormValid: false,
      formRules: [
        (value) => {
          if (value?.length >= 1) {
            return true;
          } else {
            return "This field is mandatory.";
          }
        },
      ],
    };
  },
  methods: {
    submitForm() {
      if (!this.$refs.partnerForm.validate()) {
        return;
      }

      if (!this.partnerType) {
        alert("Please select a partnership type.");
        return;
      }

      try {
        const partnerData = {
          partnerType: this.partnerType,
          companyName: this.companyName,
          companyWebsite: this.companyWebsite,
          companyEmail: this.companyEmail,
          companyPhone: this.companyPhone,
          companyCountry: this.companyCountry,
          companyGoals: this.companyGoals,
        };

        this.partnersStore.submitPartner(partnerData);

        // Exibe um alerta de sucesso
        alert("Your partnership request has been submitted successfully!");

        // Limpa os campos após submissão
        this.partnerType = "";
        this.companyName = "";
        this.companyWebsite = "";
        this.companyEmail = "";
        this.companyPhone = "";
        this.companyCountry = "";
        this.companyGoals = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.checkboxWrapper {
  display: flex;
  gap: 2rem;
}
.partnerType {
  display: flex;
}
.greyBG {
  background-color: rgba(189, 199, 211, 0.3);
}
.blueText {
  color: var(--color-dark-blue);
}
.formContainer {
  padding-top: 1rem;
  padding-bottom: 2rem;
  background-color: white;
  color: var(--color-dark-blue);
  margin-left: 3rem;
  margin-right: 3rem;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
#footer {
  margin-top: 0 !important;
}
</style>
