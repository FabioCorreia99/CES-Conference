<template>
  <v-container>
    <h2 class="mb-4">Manage Partner Requests</h2>

    <v-table class="elevation-1">
      <thead>
        <tr>
          <th class="text-left">Company</th>
          <th class="text-left">Type</th>
          <th class="text-left">Country</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="partner in paginatedPendingPartners" :key="partner.id">
          <td>{{ partner.companyName }}</td>
          <td>{{ partner.partnerType }}</td>
          <td>{{ partner.companyCountry }}</td>
          <td>
            <v-btn icon variant="text" @click="approvePartner(partner.id)">
              <v-icon class="icon-style">mdi-check</v-icon>
            </v-btn>
            <v-btn icon variant="text" @click="rejectPartner(partner.id)">
              <v-icon class="icon-style">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <v-alert v-if="pendingPartners.length === 0" class="mt-4">
      No pending partnership requests.
    </v-alert>

    <!-- Paginação -->
    <div class="pagination mt-4">
      <v-btn :disabled="page === 1" @click="prevPage">Previous</v-btn>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <v-btn :disabled="page === totalPages" @click="nextPage">Next</v-btn>
    </div>

    <h2 class="mt-8 mb-4">Approved Partners</h2>
    <v-table class="elevation-1">
      <thead>
        <tr>
          <th class="text-left">Brand</th>
          <th class="text-left">Description</th>
          <th class="text-left">Website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="partner in paginatedApprovedPartners" :key="partner.id">
          <td>{{ partner.brand }}</td>
          <td>{{ partner.desc }}</td>
          <td>{{ partner.site }}</td>
        </tr>
      </tbody>
    </v-table>
    <!-- Paginação para parceiros aprovados -->
    <div class="pagination mt-4">
      <v-btn :disabled="pageApproved === 1" @click="prevPageApproved"
        >Previous</v-btn
      >
      <span>Page {{ pageApproved }} of {{ totalPagesApproved }}</span>
      <v-btn
        :disabled="pageApproved === totalPagesApproved"
        @click="nextPageApproved"
        >Next</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import { usePartnersStore } from "@/stores/partners";

export default {
  data() {
    return {
      store: usePartnersStore(),
      pagePending: 1, // Paginação para pendentes
      pageApproved: 1, // Paginação para aprovados
      itemsPerPage: 5,
    };
  },
  computed: {
    pendingPartners() {
      return this.store.pendingPartners;
    },
    paginatedPendingPartners() {
      const start = (this.pagePending - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.pendingPartners.slice(start, end);
    },
    approvedPartners() {
      return this.store.partners;
    },
    paginatedApprovedPartners() {
      const start = (this.pageApproved - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.approvedPartners.slice(start, end);
    },
    totalPagesPending() {
      return Math.ceil(this.pendingPartners.length / this.itemsPerPage);
    },
    totalPagesApproved() {
      return Math.ceil(this.approvedPartners.length / this.itemsPerPage);
    },
  },
  methods: {
    prevPagePending() {
      if (this.pagePending > 1) this.pagePending--;
    },
    nextPagePending() {
      if (this.pagePending < this.totalPagesPending) this.pagePending++;
    },
    prevPageApproved() {
      if (this.pageApproved > 1) this.pageApproved--;
    },
    nextPageApproved() {
      if (this.pageApproved < this.totalPagesApproved) this.pageApproved++;
    },
    async approvePartner(id) {
      if (confirm("Approve this partner request?")) {
        const approvedPartner = await this.store.approvePartner(id);
        if (approvedPartner) {
        } else {
          alert("Partner not found.");
        }
      }
    },
    rejectPartner(id) {
      if (confirm("Reject this partner request?")) {
        this.store.pendingPartners = this.store.pendingPartners.filter(
          (p) => p.id !== id
        );
      }
    },
  },
};
</script>

<style scoped>
.icon-style {
  width: 24px;
  height: 24px;
  color: #888;
  cursor: pointer;
}

.v-table {
  border-radius: 10px;
}

th {
  font-weight: bold;
  background-color: #f5f5f5;
  padding: 12px;
}

td {
  padding: 12px;
}

.v-btn {
  margin: 0 4px;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
}
</style>
